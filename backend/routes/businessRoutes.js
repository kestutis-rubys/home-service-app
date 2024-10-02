import express from 'express';
import Business from '../models/businessModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/category/:category', async (req, res) => {
  const requestedCategory =
    req.params.category.charAt(0).toUpperCase() + req.params.category.slice(1);

  try {
    const businesses = await Business.find({
      category: requestedCategory,
    });
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    res.json(business);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const { category, serviceName, name, address, photoUrl } = req.body;

  const business = new Business({
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
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { category, serviceName, name, address, photoUrl } = req.body;

  try {
    const business = await Business.findById(req.params.id);

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
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);

    if (business) {
      await business.remove();
      res.json({ message: 'Business removed' });
    } else {
      res.status(404).json({ message: 'Business not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:businessId/bookings/date/:date', async (req, res) => {
  try {
    const business = await Business.findById(req.params.businessId);
    const bookings = business.bookings.filter(
      (booking) => booking.date === req.params.date,
    );
    res.json(bookings);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;
