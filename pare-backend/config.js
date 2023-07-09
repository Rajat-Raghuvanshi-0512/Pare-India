const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, `./${process.env.NODE_ENV}.env`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || './dev',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3001,
  DB_URL: process.env.DB_URL || 'mongodb://127.0.0.1:27017/pare-backend',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI:
    process.env.GOOGLE_REDIRECT_URI ||
    'https://developers.google.com/oauthplayground',
  GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
  EMAIL_ID: process.env.EMAIL_ID,
  SMTP_SERVICE: process.env.SMTP_SERVICE || 'gmail',
};
