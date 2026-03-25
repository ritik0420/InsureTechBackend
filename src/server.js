const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./config/db');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  })
);
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.status(200).json({ success: true, message: 'Backend is healthy' });
});

app.use('/api/courses', courseRoutes);

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
