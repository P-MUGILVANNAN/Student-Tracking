const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadContent, getCourseContentByCourseId } = require('../controller/CourseContentController');
const authenticateUser = require('../middleware/authenticateUser');
const authorizeRoles = require('../middleware/authorizeRoles');

// Memory storage for multer (used for temporary in-memory file storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to upload course content (only accessible by admins)
router.post(
  '/course-content',
  authenticateUser, // Authenticate the user (e.g., JWT check)
  authorizeRoles('admin'), // Only allow admins to upload content
  upload.single('file'), 
  uploadContent // Controller to handle the file upload and saving in DB
);

// Route to fetch course content by courseId (accessible by both admins and students)
router.get(
  '/course-content/:courseId',
  authenticateUser, // Authenticate the user (e.g., JWT check)
  authorizeRoles('admin', 'student'), // Allow both admins and students
  getCourseContentByCourseId // Controller to fetch course content grouped by day
);

module.exports = router;
