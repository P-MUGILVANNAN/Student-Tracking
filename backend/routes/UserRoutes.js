const express = require('express');
const router = express.Router();
const { 
  signup, 
  login, 
  updateProfile, 
  getStudentProfile,
  enrollInCourse,
  updateCourseProgress
} = require('../controller/UserController');
const isAuthenticated = require('../middleware/isAuthenticated');
const authorizeRoles = require('../middleware/authorizeRoles');

// Authentication routes
router.post('/signup', signup);
router.post('/login', login);

// Student profile routes
router.get('/profile', isAuthenticated, getStudentProfile);
router.put('/profile', isAuthenticated, updateProfile);

// Course enrollment routes
router.post('/enroll', isAuthenticated, authorizeRoles('student'), enrollInCourse);
router.put('/progress', isAuthenticated, authorizeRoles('student'), updateCourseProgress);

// Admin-only routes could be added here with authorizeRoles('admin')

module.exports = router;