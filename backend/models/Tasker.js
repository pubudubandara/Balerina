const mongoose = require('mongoose');

const TaskerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  stateProvince: { type: String },
  postalCode: { type: String, required: true },
  country: { type: String },
  category: { type: String, required: true }
});

module.exports = mongoose.model('Tasker', TaskerSchema);
