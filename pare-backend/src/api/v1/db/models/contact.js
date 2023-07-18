const { Schema, model } = require('mongoose');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    requirement: String,
    message: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = model('contactInfo', contactSchema);
