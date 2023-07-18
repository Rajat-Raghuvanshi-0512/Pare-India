const { statusCodes, messages } = require('../../../../constants');
const models = require('../db/models');
const { mailSender, sendResponse } = require('../helpers/authHelper');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

exports.nextProject = catchAsyncErrors(async (req, res, next) => {
  const { name, phone, email } = req.body;
  // await mailSender('rajat.karnal@gmail.com', 'hii buddy');
  const oldUser = await models.Contact.findOne({ email });
  if (oldUser) {
    return sendResponse(
      res,
      statusCodes.BAD_REQUEST,
      messages.FORM_ALREADY_FILLED
    );
  }
  const user = await models.Contact.create({ name, phone, email });
  return sendResponse(res, statusCodes.OK, messages.RESPONSE_SUBMITTED, user);
});
exports.contact = catchAsyncErrors(async (req, res, next) => {
  const { name, phone, email, requirement, message } = req.body;
  const oldUser = await models.Contact.findOne({ email });
  if (oldUser) {
    oldUser.phone = phone;
    oldUser.email = email;
    oldUser.requirement = requirement;
    oldUser.message = message;
    await oldUser.save();
    return sendResponse(
      res,
      statusCodes.OK,
      messages.RESPONSE_UPDATED,
      oldUser
    );
  }
  const newUser = await models.Contact.create({
    name,
    phone,
    email,
    requirement,
    message,
  });
  return sendResponse(
    res,
    statusCodes.OK,
    messages.RESPONSE_SUBMITTED,
    newUser
  );
});

exports.careerForm = catchAsyncErrors(async (req, res, next) => {
  const {
    fname,
    lname,
    phone,
    email,
    education,
    message,
    gender,
    experience,
    position,
  } = req.body;

  const alreadyFilled = await models.Career.findOne({ email });
  if (alreadyFilled) {
    return sendResponse(
      res,
      statusCodes.BAD_REQUEST,
      messages.FORM_ALREADY_FILLED
    );
  }
  console.log(req.file.path);
  const fileData = {
    name: req.file.originalname,
    path: req.file.path,
  };

  const filePath = req.file.path;
  const formData = await models.Career.create({
    fname,
    lname,
    phone,
    email,
    education,
    message,
    gender,
    experience,
    position,
    file: fileData,
  });
  // For development
  // const fileLink = `http://localhost:3000/file/${file.id}`

  //For Production
  const fileLink = `${req.protocol}://${req.headers.host}/${filePath}`;
  return sendResponse(res, statusCodes.OK, messages.RESPONSE_SUBMITTED, {
    ...formData,
    fileLink,
  });
});
