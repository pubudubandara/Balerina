const express = require('express');
const Tasker = require('../models/Tasker'); // Import Tasker model
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

// Get the most recent tasker
router.get('/recent', async (req, res) => {
  try {
    const recentTasker = await Tasker.findOne().sort({ createdAt: -1 }); // Get the most recent tasker
    if (!recentTasker) {
      return res.status(404).json({ message: 'No tasker found' });
    }
    res.status(200).json(recentTasker);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving recent tasker', error: err });
  }
});

module.exports = router;
