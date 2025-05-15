const express = require('express');
const router = express.Router();
const submissionController = require('../controller/ProjectSubmissionController');
const isAuthenticated = require('../middleware/isAuthenticated');
const authorizeRoles = require('../middleware/authorizeRoles');

// Route to submit a project (accessible by students)
router.post(
  '/',
  isAuthenticated,
  authorizeRoles('student'),
  submissionController.submitProject
);

// Route to get all submissions for a specific project (accessible by instructors/admins)
router.get(
  '/project/:projectId',
  isAuthenticated,
  authorizeRoles('admin'),
  submissionController.getSubmissionsForProject
);

// Route to get a student's own submissions for a project
router.get(
  '/project/:projectId/my-submission',
  isAuthenticated,
  authorizeRoles('student'),
  submissionController.getMySubmission
);

// Route to get all submissions by a specific student (accessible by instructors/admins)
router.get(
  '/student/:studentId',
  isAuthenticated,
  authorizeRoles('admin','student'),
  submissionController.getSubmissionsByStudent
);

// Route to get a specific submission by ID
router.get(
  '/:id',
  isAuthenticated,
  authorizeRoles('admin', 'student'),
  submissionController.getSubmissionById
);

// Route to update a submission (only accessible by the submitting student)
router.put(
  '/:id',
  isAuthenticated,
  authorizeRoles('student'),
  submissionController.updateSubmission
);

// Route to delete a submission (only accessible by admin or the submitting student)
router.delete(
  '/:id',
  isAuthenticated,
  authorizeRoles('admin', 'student'),
  submissionController.deleteSubmission
);

// Route to get all submissions for a course (accessible by instructors/admins)
router.get(
  '/course/:courseId',
  isAuthenticated,
  authorizeRoles('admin'),
  submissionController.getSubmissionsForCourse
);

module.exports = router;