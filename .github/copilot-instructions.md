# Copilot Instructions for Shree-Ganesh-Pest-Control

## Project Overview
- **Monorepo** with `backend/` (Node.js/Express/MongoDB) and `frontend/` (React/Vite)
- Main data flow: Frontend submits bookings via REST API to backend, which stores them in MongoDB.

## Backend
- Located in `backend/`
- Uses **Express** for API, **MongoDB** (native driver and Mongoose) for data
- Main entry: `backend/server.js`
- Environment config: `backend/.env` (see `MONGO_URI`, `PORT`)
- Bookings API:
  - `POST /api/bookings` — create booking (expects JSON body)
  - `GET /api/bookings` — list all bookings
- MongoDB connection via both `mongodb` and `mongoose` (see `db.js` and `server.js`)
- Models in `backend/models/` (e.g., `booking.js`)
- Some legacy code in `backend/routes/booking.js` uses SQL-style queries—prefer MongoDB/Mongoose for new work

## Frontend
- Located in `frontend/`
- Built with **React** (see `src/`), uses **Vite** for dev/build
- Main entry: `frontend/src/main.jsx`, app: `frontend/src/App.jsx`
- Pages: `Home.jsx`, `Services.jsx`, `Booking.jsx`
- Booking form (`Booking.jsx`) posts to backend at `http://localhost:5000/api/bookings`
- Navigation via React Router (`Navbar.jsx`)

## Developer Workflows
- **Backend**: Run with `node backend/server.js` (ensure `.env` is set)
- **Frontend**: Run with `npm run dev` in `frontend/` (requires Vite)
- **Install dependencies**: `npm install` in both `backend/` and `frontend/`
- **No formal test suite** — manual testing via UI and API

## Conventions & Patterns
- Use **MongoDB/Mongoose** for all new backend data access
- API endpoints should be prefixed with `/api/`
- Use async/await for backend logic
- Keep React components in `frontend/src/components/` and pages in `frontend/src/pages/`
- Use environment variables for secrets/ports

## Integration Points
- Frontend and backend communicate via REST (CORS enabled)
- MongoDB Atlas connection string in `.env` (do not commit secrets)

## Examples
- See `frontend/src/pages/Booking.jsx` for API usage
- See `backend/server.js` for API implementation

---
For questions, check the relevant directory for examples before introducing new patterns.
