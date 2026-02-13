const mongoose = require('mongoose');

const JourneySchema = new mongoose.Schema({
  title: { type: String, required: true },
  period: String,
  description: String,
  type: String, // e.g., 'education' or 'work'
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Journey', JourneySchema);
