import express from 'express';

import UserModel from '../models/userModel';
import { generateToken } from '../utils/password';

const router = express.Router();

router.post('/register', async (req: any, res: any) => {
  try {
    const user = req.body;
    const existingUser = await UserModel.findOne({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new UserModel(user);
    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    return res.status(500).json({
      message: 'Error registering new user.',
      error: (err as Error).message,
    });
  }
});

router.post('/login', async (req: any, res: any) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  const token = generateToken({ id: user._id });
  const { password: _, ...data } = user.toObject();
  return res.status(200).json({ token, data });
});

export default router;
