const express = require('express');
const router = express.Router();

const { getRecommendedCourses } = require('../controllers/recommendationController');

const auth = require('../middleware/auth');

router.route('/:studentId')
  .get(auth, getRecommendedCourses);

module.exports = router;