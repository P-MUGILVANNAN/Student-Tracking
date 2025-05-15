const express = require('express');
const router = express.Router();
const courseController = require('../controller/CourseController');
const isAdmin = require('../middleware/adminMiddleware');

// Routes
router.get('/', isAdmin, courseController.getCourses);
router.post('/', isAdmin, courseController.createCourse);
router.put('/:id', isAdmin, courseController.updateCourse);
router.delete('/:id', isAdmin, courseController.deleteCourse);
router.get('/:id', isAdmin, courseController.getCourseById);

module.exports = router;
