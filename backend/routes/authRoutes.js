import express from 'express';
import User from '../models/userModel.js';
import generateToken from '../utils/password.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new User(user);
    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error registering new user.', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  const token = generateToken({ id: user._id });
  const { name } = user;
  return res.status(200).json({ token, name });
});

export default router;
