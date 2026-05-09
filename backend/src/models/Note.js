const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tags: [
      {
        label: { type: String },
        color: { type: String },
      },
    ],
    items: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      default: '',
    },
    bullets: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Note', noteSchema);
