const express = require('express');
const router = express.Router();
const { getDashboard } = require('../controllers/dashboardController');
const { protect } = require('../middlewares/auth');

router.use(protect);

router.get('/', getDashboard);

module.exports = router;
