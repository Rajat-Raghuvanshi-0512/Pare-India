const templates = require('../templates');
const handlebars = require('handlebars');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const config = require('../../../../config');

// <-------------------------------------------------Success-Response----------------------------------------------->
exports.sendResponse = (res, statusCode, message, data) => {
  return res.status(statusCode).json({
    message: message,
    data: data,
  });
};
// <------------------------------------------------Send-Grid Mail Sender----------------------------------------------->
exports.mailSender = async (email, subject) => {
  const oAuthToClient = new google.auth.OAuth2({
    clientId: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    redirectUri: config.GOOGLE_REDIRECT_URI,
  });
  oAuthToClient.setCredentials({
    refresh_token: config.GOOGLE_REFRESH_TOKEN,
  });

  // const template = handlebars.compile(templates.email.signup_template);
  // const replacements = {
  //   otp,
  // };
  // const html = template(replacements);
  try {
    const accessToken = await oAuthToClient.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: config.SMTP_SERVICE,
      auth: {
        type: 'OAuth2',
        user: config.EMAIL_ID,
        accessToken,
        clientId: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        refreshToken: config.GOOGLE_REFRESH_TOKEN,
      },
    });
    await transporter.sendMail({
      from: `Pare India <${config.EMAIL_ID}>`,
      to: email,
      subject,
      text,
      html,
    });
  } catch (error) {
    console.log(error);
  }
};
