const Email = require('../models/Email');

// @desc    Get all emails for user
// @route   GET /api/emails
const getEmails = async (req, res) => {
  try {
    const filter = { user: req.user._id };
    if (req.query.folder) filter.folder = req.query.folder;
    if (req.query.starred) filter.starred = req.query.starred === 'true';

    const emails = await Email.find(filter).sort({ createdAt: -1 });
    res.json(emails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create an email
// @route   POST /api/emails
const createEmail = async (req, res) => {
  try {
    const email = await Email.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json(email);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update an email (mark read, star, move folder)
// @route   PUT /api/emails/:id
const updateEmail = async (req, res) => {
  try {
    const email = await Email.findOne({ _id: req.params.id, user: req.user._id });
    if (!email) return res.status(404).json({ message: 'Email not found' });

    Object.assign(email, req.body);
    await email.save();
    res.json(email);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete an email
// @route   DELETE /api/emails/:id
const deleteEmail = async (req, res) => {
  try {
    const email = await Email.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!email) return res.status(404).json({ message: 'Email not found' });
    res.json({ message: 'Email removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getEmails, createEmail, updateEmail, deleteEmail };
