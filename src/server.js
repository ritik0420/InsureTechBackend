const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./config/db');
const courseRoutes = require('./routes/courseRoutes');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:3000')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser requests and explicitly listed browser origins.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
  })
);
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.status(200).send('OK');
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ success: true, message: 'Backend is healthy' });
});

app.use('/api/courses', courseRoutes);
app.use('/api/leads', leadRoutes);

app.use((err, _req, res, _next) => {
  const statusCode = err.name === 'ValidationError' ? 400 : 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal server error',
  });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server', error.message);
    process.exit(1);
  }
};

startServer();
