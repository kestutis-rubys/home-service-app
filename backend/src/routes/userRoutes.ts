import express, { Request, Response } from 'express';
import UserModel from '../models/userModel';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', authMiddleware, async (req: Request, res: Response) => {
  const _id = (req as any).user.id;
  try {
    const user = await UserModel.findById({ _id });
    const { password, ...rest } = user?.toObject() as any;
    res.json(rest);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

export default router;
