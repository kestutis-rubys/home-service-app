import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import categoryRoutes from '../src/routes/categoryRoutes';
import businessRoutes from '../src/routes/businessRoutes';
import bookingsRoutes from '../src/routes/bookingRoutes';
import userRoutes from '../src/routes/userRoutes';
import authRoutes from '../src/routes/authRoutes';

import { connectToDb, PORT } from './config/db';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/categories', categoryRoutes);
app.use('/api/businesses', businessRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
