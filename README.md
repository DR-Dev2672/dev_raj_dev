# MERN Portfolio

This repository contains a simple MERN portfolio scaffold (backend + frontend).

## Structure
- `backend/` - Express API, Mongoose models, and a seed script
- `frontend/` - React (Vite) app with pages: Home, Projects, Journey, Coding Background

## Quick start
1. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

2. Configure backend
- Copy `backend/.env.example` to `backend/.env` and set `MONGO_URI`.

3. Seed sample data (optional)

```bash
cd backend
npm run seed
```

4. Run servers (in separate terminals)

```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

Frontend will run on Vite (default http://localhost:5173) and the backend on the port in your `.env` (default 5000). The frontend calls the API at `http://localhost:5000/api/...` by default.

## Next steps
- Replace seed/profile data with your personal info
- Add authentication or admin UI to manage content
- Customize UI and deploy (Netlify/Vercel for frontend, Render/Heroku for backend)
