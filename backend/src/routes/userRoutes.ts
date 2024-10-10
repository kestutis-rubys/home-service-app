import express, { Request, Response } from 'express';
import UserModel from '../models/userModel';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

export default router;
