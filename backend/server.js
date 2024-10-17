const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskerRoutes = require('./routes/taskerRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://ballerina_app:ballerinawso2@cluster0.epixg.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes - Use separate paths for taskers and users
app.use('/api/taskers', taskerRoutes);  // Tasker routes
app.use('/api/users', userRoutes);      // User routes

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
