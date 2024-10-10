import mongoose from 'mongoose';

interface Business {
  category: string;
  serviceName: string;
  name: string;
  address: string;
  photoUrl: string;
}

const businessSchema = new mongoose.Schema<Business>({
  category: {
    type: String,
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
});

export const BusinessModel = mongoose.model<Business>(
  'Business',
  businessSchema,
);
