const router = require('express').Router();

router.use('/contact', require('./contactRoutes'));

module.exports = router;
