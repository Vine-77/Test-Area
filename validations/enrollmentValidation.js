const Joi = require('joi');

exports.createEnrollment = Joi.object({
  student: Joi.string().required(),
  course: Joi.string().required(),
  semester: Joi.string(),
  status: Joi.string().valid('enrolled', 'in_progress', 'completed', 'dropped')
});

exports.updateEnrollment = Joi.object({
  status: Joi.string().valid('enrolled', 'in_progress', 'completed', 'dropped'),
  grade: Joi.string().allow(''),
  completionDate: Joi.date()
}).min(1);