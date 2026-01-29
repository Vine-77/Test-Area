const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const Prerequisite = require('../models/Prerequisite');

exports.getRecommendedCourses = async (req, res) => {
  try {
    const { studentId } = req.params;

    // 1. Get completed courses for this student
    const completed = await Enrollment.find({
      student: studentId,
      status: 'completed'
    }).select('course');

    const completedIds = completed.map(enr => enr.course.toString());

    // 2. Get all courses
    const allCourses = await Course.find({}).lean();

    // 3. Filter recommendable courses (all prereqs satisfied)
    const recommendable = [];

    for (const course of allCourses) {
      if (completedIds.includes(course._id.toString())) continue;

      const prereqs = await Prerequisite.find({ course: course._id });

      const allPrereqsMet = prereqs.every(p =>
        completedIds.includes(p.requiredCourse.toString())
      );

      if (allPrereqsMet || prereqs.length === 0) {
        recommendable.push({
          ...course,
          suggestedTimeInterval: course.durationWeeks
            ? `Complete within ~${course.durationWeeks} weeks`
            : 'Within the current/next semester'
        });
      }
    }

    res.status(200).json({
      success: true,
      count: recommendable.length,
      data: recommendable
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};