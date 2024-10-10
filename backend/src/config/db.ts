import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT ?? 5000;

export const connectToDb = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined');
    }
    await mongoose.connect(mongoUri, { dbName: 'development' });
    console.log('Connected to MongoDB with Mongoose');
  } catch (err) {
    console.error('Could not connect to the database', err);
    process.exit(1);
  }
};
