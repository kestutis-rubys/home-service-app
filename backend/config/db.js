import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT ?? 5000;

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'development' });
    console.log('Connected to MongoDB with Mongoose');
  } catch (err) {
    console.error('Could not connect to the database', err);
    process.exit(1);
  }
};

export { connectToDb, PORT };
