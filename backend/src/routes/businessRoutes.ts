import express from 'express';
import { BusinessModel } from '../models/businessModel';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const businesses = await BusinessModel.find();
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

router.get('/category/:category', async (req, res) => {
  const requestedCategory =
    req.params.category.charAt(0).toUpperCase() + req.params.category.slice(1);

  try {
    const businesses = await BusinessModel.find({
      category: requestedCategory,
    });
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const business = await BusinessModel.findById(req.params.id);
    res.json(business);
  } catch (err) {
    res.status(404).json({ message: (err as Error).message });
  }
});

router.post('/', async (req, res) => {
  const { category, serviceName, name, address, photoUrl } = req.body;

  const business = new BusinessModel({
    category: category,
    serviceName: serviceName,
    name: name,
    address: address,
    photoUrl: photoUrl,
  });

  try {
    const newBusiness = await business.save();
    res.status(201).json(newBusiness);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

router.put('/:id', async (req, res) => {
  const { category, serviceName, name, address, photoUrl } = req.body;

  try {
    const business = await BusinessModel.findById(req.params.id);

    if (business) {
      business.category = category;
      business.serviceName = serviceName;
      business.name = name;
      business.address = address;
      business.photoUrl = photoUrl;

      const updatedBusiness = await business.save();
      res.json(updatedBusiness);
    } else {
      res.status(404).json({ message: 'Business not found' });
    }
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const business = await BusinessModel.findById(req.params.id);

    if (business) {
      await business.deleteOne({ _id: business._id });
      res.json({ message: 'Business removed' });
    } else {
      res.status(404).json({ message: 'Business not found' });
    }
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

// router.get('/:businessId/bookings/date/:date', async (req, res) => {
//   try {
//     const business = await BusinessModel.findById(req.params.businessId);
//     if (business) {
//       const bookings = business.bookings.filter(
//         (booking) => booking.date === req.params.date,
//       );
//     res.json(bookings);
//   } catch (err) {
//     res.status(404).json({ message: (err as Error).message });
//   }
// });

export default router;
