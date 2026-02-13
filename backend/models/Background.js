const mongoose = require('mongoose');

const BackgroundSchema = new mongoose.Schema({
  languages: [String],
  frameworks: [String],
  tools: [String],
  notes: String
});

module.exports = mongoose.model('Background', BackgroundSchema);
