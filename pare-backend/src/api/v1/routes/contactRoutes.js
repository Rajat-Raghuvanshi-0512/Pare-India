const { contactController } = require('../controllers');
const { contactValidation } = require('../validations');

const router = require('express').Router();

router.route('/').post(contactValidation.contactUs, contactController.contact);
router
  .route('/next-project')
  .post(contactValidation.nextProject, contactController.nextProject);

module.exports = router;
