import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import categoriesRoutes from './routes/categoriesRoutes.js';
import { connectToDb, PORT } from './config/db.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/categories', categoriesRoutes);

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
