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
    name: 'Dev Raj Dev',
    headline: 'Full Stack Developer & DevOps Engineer',
    about: 'Passionate developer focusing on full-stack apps, automation and DevOps practices.',
    location: 'City, Country',
    image: 'https://picsum.photos/seed/profile/400/400',
    resume: 'https://example.com/resume.pdf',
    college: 'Your College Name',
    school: 'Your School Name',
    socials: {
      github: 'https://github.com/yourname',
      linkedin: 'https://www.linkedin.com/in/yourname',
      twitter: '',
      codeforces: 'https://codeforces.com/profile/yourhandle',
      leetcode: 'https://leetcode.com/yourhandle'
    }
  });

  await Project.insertMany([
    {
      title: 'Awesome Project',
      description: 'A brief description of the awesome project. It does cool things and demonstrates full-stack features.',
      link: 'https://example.com',
      image: 'https://picsum.photos/seed/awesome/800/450',
      techStack: ['React', 'Node', 'MongoDB']
    },
    {
      title: 'Another App',
      description: 'A sample app showcasing UI components and API integration.',
      link: '',
      image: 'https://picsum.photos/seed/another/800/450',
      techStack: ['Vite', 'Express']
    },
    {
      title: 'Task Manager',
      description: 'A lightweight task manager with drag-and-drop and realtime updates (mock).',
      link: 'https://github.com/yourname/task-manager',
      image: 'https://picsum.photos/seed/task/800/450',
      techStack: ['React', 'Socket.io', 'Node']
    },
    {
      title: 'E-Commerce UI',
      description: 'A polished storefront UI with product gallery and cart interactions.',
      link: 'https://github.com/yourname/ecommerce-ui',
      image: 'https://picsum.photos/seed/ecom/800/450',
      techStack: ['React', 'Tailwind', 'Vite']
    },
    {
      title: 'Data Visualizer',
      description: 'Interactive charts and dashboards built for demoing datasets.',
      link: '',
      image: 'https://picsum.photos/seed/data/800/450',
      techStack: ['D3', 'React']
    },
    {
      title: 'Portfolio CMS Mock',
      description: 'A minimal admin mock to manage projects and journey entries (frontend-only demo).',
      link: 'https://github.com/yourname/portfolio-cms-mock',
      image: 'https://picsum.photos/seed/cms/800/450',
      techStack: ['React', 'LocalStorage']
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
