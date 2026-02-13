const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Journey = require('../models/Journey');
const Background = require('../models/Background');
const Profile = require('../models/Profile');

// GET profile
router.get('/profile', async (req, res) => {
  try {
    const p = await Profile.findOne();
    res.json(p || {});
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET projects
router.get('/projects', async (req, res) => {
  try {
    const items = await Project.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET journey
router.get('/journey', async (req, res) => {
  try {
    const items = await Journey.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET coding background
router.get('/background', async (req, res) => {
  try {
    const b = await Background.findOne();
    res.json(b || { languages: [], frameworks: [], tools: [] });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
