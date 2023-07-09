const catchAsyncErrors = require('../middleware/catchAsyncErrors');

exports.nextProject = catchAsyncErrors((req, res, next) => {
  const { name, phone, email } = req.body;
});
exports.contact = catchAsyncErrors((req, res, next) => {
  const { name, phone, email, requirement, message } = req.body;
});
