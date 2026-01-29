const Joi = require('joi');

exports.createPrerequisite = Joi.object({
  course: Joi.string().required(),
  requiredCourse: Joi.string().required(),
  isMandatory: Joi.boolean()
});

exports.updatePrerequisite = Joi.object({
  course: Joi.string(),
  requiredCourse: Joi.string(),
  isMandatory: Joi.boolean()
}).min(1);