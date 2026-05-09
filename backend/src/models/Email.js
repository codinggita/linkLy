const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    senderEmail: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      default: '',
    },
    body: [
      {
        type: String,
      },
    ],
    read: {
      type: Boolean,
      default: false,
    },
    starred: {
      type: Boolean,
      default: false,
    },
    folder: {
      type: String,
      enum: ['inbox', 'sent', 'drafts', 'spam', 'trash'],
      default: 'inbox',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Email', emailSchema);
