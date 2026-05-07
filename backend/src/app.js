const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();


const allowedOrigins = [
  'http://localhost:5173',
];

app.use(cors({
  origin: function (origin, callback) {

    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    if (origin.endsWith('.vercel.app')) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  },

  credentials: true,
}));



app.use(express.json());


app.use('/api/auth', authRoutes);



app.get('/', (req, res) => {
  res.send('API is running...');
});


module.exports = app;