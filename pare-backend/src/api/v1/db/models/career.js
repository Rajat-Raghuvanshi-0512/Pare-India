const { Schema, model } = require('mongoose');

const careerSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
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
    education: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    file: {
      name: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model('career', careerSchema);
