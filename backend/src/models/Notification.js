const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: ['mention', 'access', 'change', 'created'],
      required: true,
    },
    fromUser: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default: '',
    },
    extra: {
      type: String,
      default: '',
    },
    quote: {
      type: String,
      default: '',
    },
    team: {
      type: String,
      default: '',
    },
    unread: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Notification', notificationSchema);
