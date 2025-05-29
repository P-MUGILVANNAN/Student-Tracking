const express = require('express');
const router = express.Router();
const {
  addAssessment,
  getAssessmentsByCourse,
  getAssessmentById,
  submitAssessment,
  getSubmissionsByAssessment,
  getSubmissionsByCourse,
  getSubmissionsByStudentId
} = require('../controller/AssessmentController');

const authenticateUser = require('../middleware/authenticateUser');
const authorizeRoles = require('../middleware/authorizeRoles');

// Add new assessment (admin/trainer only)
router.post(
  '/assessments',
  authenticateUser,
  authorizeRoles('admin'),
  addAssessment
);

// Get all assessments for a course (admin or student)
router.get(
  '/assessments/:courseId',
  authenticateUser,
  authorizeRoles('admin', 'student'),
  getAssessmentsByCourse
);

// Get single assessment by ID (admin or student)
router.get(
  '/assessment/:id',
  authenticateUser,
  authorizeRoles('admin', 'student'),
  getAssessmentById
);

// Submit answers for an assessment (student only)
router.post(
  '/assessment/:id/submit',
  authenticateUser,
  authorizeRoles('student'),
  submitAssessment
);

// Get all submissions for a particular assessment (admin only)
router.get(
  '/assessment/:id/submissions',
  authenticateUser,
  authorizeRoles('admin'),
  getSubmissionsByAssessment
);

// Get all submissions for a particular course (admin only)
router.get(
  '/course/:courseId/submissions',
  authenticateUser,
  authorizeRoles('admin','student'),
  getSubmissionsByCourse
);

router.get('/submissions/student/:studentId', getSubmissionsByStudentId);


module.exports = router;
