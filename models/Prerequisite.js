const mongoose = require('mongoose');

const prerequisiteSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  requiredCourse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  isMandatory: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Prerequisite', prerequisiteSchema);