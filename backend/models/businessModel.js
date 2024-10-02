import mongoose from 'mongoose';

const businessSchema = new mongoose.Schema({
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

const BusinessModel = mongoose.model('Business', businessSchema);

export default BusinessModel;
