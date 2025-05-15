const express = require('express');
const router = express.Router();
const attendanceController = require('../controller/AttendanceController');
const isAuthenticated = require('../middleware/isAuthenticated');
const authorizeRoles = require('../middleware/authorizeRoles');

// Mark individual attendance (Admin/Instructor only)
router.post(
    '/',
    isAuthenticated,
    authorizeRoles('admin'),
    attendanceController.markAttendance
  );
  
  // Mark bulk attendance (Admin/Instructor only)
  router.post(
    '/bulk',
    isAuthenticated,
    authorizeRoles('admin'),
    attendanceController.markBulkAttendance
  );
  
  // Get attendance by specific date and course (Admin/Instructor only)
  router.get(
    '/date/:date/course/:courseId',
    isAuthenticated,
    authorizeRoles('admin'),
    attendanceController.getAttendanceByDateAndCourse
  );
  
  // Get a student's attendance (Student can view own, Admin/Instructor can view any)
  router.get(
    '/student/:studentId',
    isAuthenticated,
    authorizeRoles('admin', 'student'),
    attendanceController.getStudentAttendance
  );
  
  // Get specific attendance record by ID (Admin/Instructor/Student - if their record)
//   router.get(
//     '/:id',
//     isAuthenticated,
//     authorizeRoles('admin', 'student'),
//     attendanceController.getAttendanceById
//   );
  
  // Update attendance record (Admin/Instructor only)
  router.put(
    '/:id',
    isAuthenticated,
    authorizeRoles('admin'),
    attendanceController.updateAttendance
  );
  
  // Delete attendance record (Admin only)
  router.delete(
    '/:id',
    isAuthenticated,
    authorizeRoles('admin'),
    attendanceController.deleteAttendance
  );
  
  // Get course attendance summary (Admin/Instructor only)
  router.get(
    '/course/:courseId/summary',
    isAuthenticated,
    authorizeRoles('admin', 'instructor'),
    attendanceController.getCourseAttendanceSummary
  );
  
  module.exports = router;