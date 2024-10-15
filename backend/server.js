const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskerRoutes = require('./routes/taskerRoutes'); // Import tasker routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// MongoDB connection
mongoose.connect('mongodb+srv://ballerina:a0XgS4NudgS1OZgL@cluster1.zoqrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/api/taskers', taskerRoutes); // Use the tasker routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
