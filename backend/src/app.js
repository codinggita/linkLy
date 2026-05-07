const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'https://link-ly-dusky.vercel.app',
    'http://localhost:5173',
  ],
  credentials: true,
}));
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
