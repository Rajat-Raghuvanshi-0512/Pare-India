const { contactController } = require('../controllers');
const { contactValidation } = require('../validations');
const multer = require('multer');

const router = require('express').Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  },
});
const uploadStorage = multer({ dest: 'uploads' });

router.route('/').post(contactValidation.contactUs, contactController.contact);
router
  .route('/next-project')
  .post(contactValidation.nextProject, contactController.nextProject);
router
  .route('/career')
  .post(
    uploadStorage.single('file'),
    contactValidation.careerFormValidation,
    contactController.careerForm
  );

module.exports = router;
