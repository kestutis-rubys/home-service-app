import express from 'express';
import { categories } from '../data/index.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(categories);
});

export default router;
