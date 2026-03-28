const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: String,
  headline: String,
  about: String,
  location: String,
  image: String,
  resume: String,
  college: String,
  school: String,
  socials: {
    github: String,
    linkedin: String,
    twitter: String,
    codeforces: String,
    leetcode: String
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);
