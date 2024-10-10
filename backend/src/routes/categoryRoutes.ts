import express from 'express';
import { CategoryModel } from '../models/categoryModel';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

router.post('/', async (req, res) => {
  const category = new CategoryModel({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

export default router;
