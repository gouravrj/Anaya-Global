# Anaya Global MERN Website

Modern MERN website for Anaya Global with a React/Tailwind frontend, Express API, MongoDB enquiry storage, and JWT-protected admin dashboard.

## Setup

1. Install dependencies:

```bash
npm install
npm run install:all
```

2. Configure server environment:

```bash
cp server/.env.example server/.env
```

3. Fill in `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`.

4. Run locally:

```bash
npm run dev
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:5000`

Hidden admin login: `http://localhost:5173/admin`
