import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({});

const BookingModel = mongoose.model('Booking', bookingSchema);

export default BookingModel;
