const express = require('express');
const Tasker = require('../models/Tasker');
const router = express.Router();

// Create a new tasker
router.post('/', async (req, res) => {
  try {
    const newTasker = new Tasker(req.body);
    const savedTasker = await newTasker.save();
    res.status(201).json(savedTasker);
  } catch (err) {
    res.status(500).json({ message: 'Error creating tasker', error: err });
  }
});

// Get all taskers
// Get a specific tasker (assuming seller is a tasker)
router.get('/seller/:id', async (req, res) => {
    try {
      const tasker = await Tasker.findById(req.params.id);  // Assuming seller is identified by ID
      if (!tasker) {
        return res.status(404).json({ message: 'Seller not found' });
      }
      res.status(200).json(tasker);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving seller', error: err });
    }
  });
  

module.exports = router;
