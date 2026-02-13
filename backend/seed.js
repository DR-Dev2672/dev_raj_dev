// Run with `npm run seed` after setting MONGO_URI in .env
require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Journey = require('./models/Journey');
const Background = require('./models/Background');
const Profile = require('./models/Profile');

const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

async function seed(){
  await mongoose.connect(MONGO);
  console.log('Connected to', MONGO);

  await Project.deleteMany();
  await Journey.deleteMany();
  await Background.deleteMany();
  await Profile.deleteMany();

  await Profile.create({
    name: 'Your Name',
    headline: 'Full-stack Developer | React • Node • MongoDB',
    about: 'Passionate developer building clean, performant web apps.',
    location: 'City, Country',
    socials: { github: 'https://github.com/yourname', linkedin: '', twitter: '' }
  });

  await Project.insertMany([
    {
      title: 'Awesome Project',
      description: 'A brief description of the awesome project. It does cool things.',
      link: 'https://example.com',
      image: '',
      techStack: ['React', 'Node', 'MongoDB']
    },
    {
      title: 'Another App',
      description: 'Another example project showcasing UI and APIs.',
      link: '',
      techStack: ['Vite', 'Express']
    }
  ]);

  await Journey.insertMany([
    { title: 'Software Engineer at Acme', period: '2022 - Present', description: 'Working on web platforms.', type: 'work' },
    { title: 'BSc Computer Science', period: '2018 - 2021', description: 'Studied algorithms and systems.', type: 'education' }
  ]);

  await Background.create({
    languages: ['JavaScript', 'TypeScript', 'Python'],
    frameworks: ['React', 'Express', 'Node'],
    tools: ['Git', 'Docker', 'MongoDB'],
    notes: 'Comfortable building full-stack applications.'
  });

  console.log('Seed complete');
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
