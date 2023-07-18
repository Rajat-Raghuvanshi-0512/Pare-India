const Joi = require('joi');
const { validateSchema } = require('./validationFunction');

exports.nextProject = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  });
  try {
    const validated = validateSchema(req.body, schema);
    if (validated) next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.contactUs = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    requirement: Joi.string().valid('walls', 'ceiling', 'facades'),
    message: Joi.string().max(200).required(),
  });
  try {
    const validated = validateSchema(req.body, schema);
    if (validated) next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.careerFormValidation = (req, res, next) => {
  const schema = Joi.object({
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    education: Joi.string().required(),
    message: Joi.string().required(),
    gender: Joi.string().required(),
    experience: Joi.string().required(),
    position: Joi.string().required(),
  });
  try {
    const validated = validateSchema(req.body, schema);
    if (validated) next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
