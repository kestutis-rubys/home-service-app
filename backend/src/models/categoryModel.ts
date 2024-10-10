import mongoose from 'mongoose';

interface Category {
  name: string;
  icon: string;
  color: string;
}

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    required: true,
  },
});

export const CategoryModel = mongoose.model<Category>(
  'Category',
  categorySchema,
);
