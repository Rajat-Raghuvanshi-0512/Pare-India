const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const analytics = require("../services/analyticsService");
const config = require("../../../../config");
const { client } = require("./messageHelper");
const Models = require("../db/models");
const { authentications, globalConstant } = require("../../../../constants");
const tokenGenerate = require("./tokenGenerate");
const templates = require("../templates");
const handlebars = require("handlebars");
const sgMail = require("@sendgrid/mail");
const { SENDGRID_SENDER, SENDGRID_API_KEY } = require("../../../../config");
sgMail.setApiKey(SENDGRID_API_KEY);
// <-------------------------------------------------Success-Response----------------------------------------------->
exports.successResponse = (res, statusCode, message, data) => {
  return res.status(statusCode).json({
    message: message,
    data: data,
  });
};

// <----------------------------------------------------Jwt-Signing-------------------------------------------------->
exports.jwtSign = (user) => {
  try {
    const payload = {
      _id: user._id,
    };
    return jwt.sign(payload, process.env.JWT_SECRET_KEY);
  } catch (error) {
    return error;
  }
};

// <---------------------------------------------------Jwt-Verification----------------------------------------------->
exports.jwtVerify = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    return error;
  }
};

// <---------------------------------------------------Otp-Generate--------------------------------------------------->
exports.generateOtp = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

// <-------------------------------------------------Twilio Message Sender-------------------------------------------->
exports.messageSender = async (otp, phone, countryCallingCode) => {
  try {
    await client.messages.create({
      body: `Welcome on tiobu ! your otp is ${otp}`,
      messagingServiceSid: config.TWILIO_SERVICE_SID,
      to: `${countryCallingCode}${phone}`,
    });
  } catch (error) {
    return error;
  }
};

// <------------------------------------------------Send-Grid Mail Sender----------------------------------------------->
exports.mailSender = async (email, otp) => {
  try {
    const template = handlebars.compile(templates.email.signup_template);
    const replacements = {
      otp,
    };
    const html = template(replacements);
    const msg = {
      to: email,
      from: `Tiobu <${SENDGRID_SENDER}>`,
      subject: "Tiobu - Verify your email",
      html,
    };
    await sgMail.send(msg);
  } catch (error) {
    return error;
  }
};

// <--------------------------------------------------Request Type Id Finder-------------------------------------------->
exports.requestIdFinder = async (requestUniqueNumber) => {
  try {
    const { _id } = await Models.FanRequestType.findOne({
      requestUniqueNumber,
    });
    return _id;
  } catch (error) {
    return error;
  }
};

// <--------------------------------------------------Media Type Id Finder----------------------------------------------->
exports.mediaIdFinder = async (mediaUniqueNumber) => {
  try {
    const { _id } = await Models.MediaRequestType.findOne({
      mediaUniqueNumber,
    });
    return _id;
  } catch (error) {
    return error;
  }
};
// <--------------------------------------------------Hash password----------------------------------------------->

exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    return error;
  }
};
exports.sessionCreate = async (deviceID, deviceType, userObj) => {
  try {
    const analyticsData = {
      deviceID,
      _id: userObj._id,
      deviceType,
    };
    await analytics.loginAnalyticsService(analyticsData);
    const { accessToken, refreshToken, sessionId } = await tokenGenerate(
      userObj._id
    );
    const date = new Date();
    const logoutDate = new Date();
    logoutDate.setDate(logoutDate.getDate() + authentications.SESSION_EXPIRY);
    const session = new Models.Session({
      tokenId: sessionId,
      userID: userObj._id,
      loginTime: date,
      logoutTime: logoutDate,
      deviceID: deviceID,
    });
    await session.save();
    return { accessToken, refreshToken, sessionId };
  } catch (error) {
    throw error;
  }
};

exports.headerSet = (res, accessToken, refreshToken) => {
  const path = "/v1";

  res.setHeader("Set-Cookie", [
    `accessToken=${accessToken}; HttpOnly; path= ${path}; sameSite=strict; secure=true; Max-Age=${authentications.ACCESS_TOKEN_COOKIE_EXPIRY}`,
    `refreshToken=${refreshToken}; HttpOnly; path=${path}; sameSite=strict; secure=true; Max-Age=${authentications.REFRESH_TOKEN_COOKIE_EXPIRY}`,
  ]);
  return res;
};

exports.faceBookLogin = async (req, _, __, profile, done) => {
  const { email, name, id } = profile._json;
  const isObject = await Models.User.findOne({ email });

  // To fetch s3 key of default avatar
  const defaultAvatar = await Models.DefaultImages.findOne({
    imageUniqueNumber: globalConstant.DEFAULT_AVATAR,
  });
  // After deleting profilePhoto, again set the default image to user profile
  const defaultProfilePhoto = !isObject
    ? await Models.Attachments.create({
        fileName: `${globalConstant.DEFAULT_AVATAR}.png`,
        isPublic: true,
        size: 1200,
        mediaType: "image",
        url: `${globalConstant.DEFAULT_PIC_URL}${defaultAvatar.key}`,
      })
    : null;

  // Find the object Id for fan type user
  const { _id } = await Models.UserType.findOne({
    userUniqueNumber: globalConstant.USER_TYPE_IS_FAN,
  });

  const userObj = !isObject
    ? await Models.User.create({
        phone: null,
        userName: null,
        email,
        profilePhoto: defaultProfilePhoto._id,
        userType: _id,
        isEmailVerified: true,
        fullName: name,
      })
    : isObject;
  const analyticsData = {
    deviceID: id,
    _id: userObj._id,
    deviceType: "browser",
  };
  await analytics.loginAnalyticsService(analyticsData);
  const { accessToken, refreshToken, sessionId } = await tokenGenerate(
    userObj._id
  );
  const date = new Date();
  const logoutDate = new Date();
  logoutDate.setDate(logoutDate.getDate() + authentications.SESSION_EXPIRY);
  const session = new Models.Session({
    tokenId: sessionId,
    userID: userObj._id,
    loginTime: date,
    logoutTime: logoutDate,
    deviceID: id,
  });
  await session.save();

  done(null, profile, { accessToken, refreshToken });
};
