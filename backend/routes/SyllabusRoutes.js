const express = require('express');
const router = express.Router();
const syllabusController = require('../controller/SyllabusController');
const authenticateUser = require('../middleware/authenticateUser');
const authorizeRoles = require('../middleware/authorizeRoles');

// Route to upload syllabus (only accessible by admins)
router.post(
    '/',
    authenticateUser,
    authorizeRoles('admin'),
    syllabusController.upload, // Multer middleware for file upload
    syllabusController.addSyllabus // Controller to handle the upload
);

// Route to get all syllabi (only accessible by admins)
router.get(
    '/',
    authenticateUser,
    authorizeRoles('admin'),
    syllabusController.getAllSyllabi
);

// Route to get syllabus by course ID (accessible by both admins and students)
router.get(
    '/:courseId',
    authenticateUser,
    authorizeRoles('admin', 'student'),
    syllabusController.getSyllabusByCourse
);

// Route to delete syllabus (only accessible by admins)
router.delete(
    '/:id',
    authenticateUser,
    authorizeRoles('admin'),
    syllabusController.deleteSyllabus
);

module.exports = router;