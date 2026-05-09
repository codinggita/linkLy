const Contact = require('../models/Contact');

// @desc    Get all contacts for user
// @route   GET /api/contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a contact
// @route   POST /api/contacts
const createContact = async (req, res) => {
  try {
    const contact = await Contact.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a contact
// @route   PUT /api/contacts/:id
const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findOne({ _id: req.params.id, user: req.user._id });
    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    Object.assign(contact, req.body);
    await contact.save();
    res.json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a contact
// @route   DELETE /api/contacts/:id
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getContacts, createContact, updateContact, deleteContact };
