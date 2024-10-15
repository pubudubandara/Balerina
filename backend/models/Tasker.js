const mongoose = require('mongoose');

// Define the Tasker schema
const TaskerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  stateProvince: { type: String },
  postalCode: { type: String },
  country: { type: String, required: true },
  category: { type: String, required: true }
});

// Create the Tasker model
const Tasker = mongoose.model('Tasker', TaskerSchema);

module.exports = Tasker;
