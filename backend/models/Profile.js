const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: String,
  headline: String,
  about: String,
  location: String,
  socials: {
    github: String,
    linkedin: String,
    twitter: String
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);
