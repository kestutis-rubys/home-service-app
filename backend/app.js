import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import categoriesRoutes from './routes/categoryRoutes.js';
import businessesRoutes from './routes/businessRoutes.js';
import bookingsRoutes from './routes/bookingRoutes.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { connectToDb, PORT } from './config/db.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/categories', categoriesRoutes);
app.use('/api/businesses', businessesRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
