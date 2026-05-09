const express = require('express');
const router = express.Router();
const { getEmails, createEmail, updateEmail, deleteEmail } = require('../controllers/emailController');
const { protect } = require('../middlewares/auth');

router.use(protect);

router.route('/')
  .get(getEmails)
  .post(createEmail);

router.route('/:id')
  .put(updateEmail)
  .delete(deleteEmail);

module.exports = router;
