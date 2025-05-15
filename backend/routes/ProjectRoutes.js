const express = require('express');
const router = express.Router();
const projectController = require('../controller/ProjectController');
const authenticateUser = require('../middleware/authenticateUser');
const authorizeRoles = require('../middleware/authorizeRoles');

// Route to create a new project (accessible by instructors/admins)
router.post(
  '/',
  authenticateUser,
  authorizeRoles('admin'),
  projectController.createProject
);

// Route to get all projects for logged-in user
router.get(
  '/',
  authenticateUser,
  authorizeRoles('admin', 'student'),
  projectController.getProjects
);

// Route to get projects by course ID (accessible by instructors/admins/students of that course)
router.get(
  '/course/:courseId',
  authenticateUser,
  authorizeRoles('admin', 'student'),
  projectController.getProjectsByCourse
);

// Route to get a single project by ID
router.get(
  '/:id',
  authenticateUser,
  authorizeRoles('admin', 'student'),
  projectController.getProjectById
);

// Route to update a project (only accessible by creator or admin)
router.put(
  '/:id',
  authenticateUser,
  authorizeRoles('admin'),
  projectController.updateProject
);

// New route for getting projects by category
router.get(
    '/course/:courseId/category/:category',
    authenticateUser,
    authorizeRoles('admin', 'student'),
    projectController.getProjectsByCategory
  );

// Route to delete a project (only accessible by creator or admin)
router.delete(
  '/:id',
  authenticateUser,
  authorizeRoles('admin'),
  projectController.deleteProject
);

module.exports = router;