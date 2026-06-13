import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import connectDatabase from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import enquiryRoutes from './routes/enquiryRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json({ limit: '1mb' }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 120 }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'anaya-global-api' });
});

app.use('/api/auth', authRoutes);
app.use('/api/enquiries', enquiryRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server error' });
});

connectDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Anaya Global API running on port ${port}`);
  });
});
