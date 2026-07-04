# EduFlow LMS

A modern learning management system built with React and Express.

## Project Structure

```
EduFlow-LMS/
├── frontend/          # React + Vite + TypeScript
│   ├── src/
│   │   ├── assets/
│   │   ├── components/  # common/, forms/, layout/, ui/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/       # auth/, admin/, instructor/, student/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── store/
│   │   ├── styles/
│   │   ├── types/
│   │   └── utils/
│   ├── App.tsx
│   └── main.tsx
│
├── backend/           # Express.js + JavaScript (ES Modules)
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── models/
│   │   ├── database/    # JSON files
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   └── .env.example
│
├── .gitignore
├── package.json
└── README.md
```

## Installation

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies
cd ../backend && npm install
```

## Running the Application

### Frontend

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`.

### Backend

```bash
cd backend
npm run dev
```

The backend will start on `http://localhost:5000`.

### Both (from root)

```bash
npm run dev
```

## Environment Variables

### Frontend (`frontend/.env`)

- `VITE_API_URL` - Backend API URL (default: `http://localhost:5000/api`)

### Backend (`backend/.env`)

- `PORT` - Server port (default: `5000`)
- `NODE_ENV` - Environment mode
- `JWT_SECRET` - JWT signing secret
