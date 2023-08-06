const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { AppError } = require('./src/api/v1/helpers/appError');

// Require base route file
const route = require('./src/api/v1/routes');
const config = require('./config');

const corsOptions = {
  origin: [
    'https://pare-india.netlify.app',
    'https://pareindia.com',
    'http://localhost:3000',
    'https://www.instagram.com',
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use((req, res, next) => {
  const info = req.method + ' ' + res.statusCode + ' ' + req.url;
  console.log('API HIT -------------->', info, '\n|\nv\n|\nv\n');
  if (!req.header('lang') || req.header('lang') == '') req.lang = 'en';
  else req.lang = req.header('lang');
  next();
});

// Routes Api ----------> {{BASE_URL}}/v1...
app.use('/v1', route);
app.use(express.static(path.join(__dirname, '../pare-frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../pare-frontend/dist/index.html'));
});

// Log the NODE Environment
console.log(`NODE_ENV=${config.NODE_ENV}`);

module.exports = app;
