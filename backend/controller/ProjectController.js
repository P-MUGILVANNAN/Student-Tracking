const Project = require('../model/ProjectSchema');

// Get all projects for the logged-in user
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ createdBy: req.user._id });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get projects by course ID (only if created by logged-in user)
exports.getProjectsByCourse = async (req, res) => {
  const { courseId } = req.params;
  try {
    const projects = await Project.find({ 
      course: courseId,
    });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get projects by category (for a specific course)
exports.getProjectsByCategory = async (req, res) => {
  const { courseId, category } = req.params;
  try {
    const projects = await Project.find({ 
      course: courseId,
      category
    });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Add a new project
exports.createProject = async (req, res) => {
  const { 
    title,
    category,
    description, 
    duration, 
    maxGroupSize, 
    resources, 
    requirements, 
    course 
  } = req.body;

  try {
    const newProject = new Project({
      title,
      category,
      description,
      duration,
      maxGroupSize,
      resources: resources || '',
      requirements,
      course
    });
    
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ 
      message: 'Failed to create project', 
      error: err.message,
      // Include validation errors if available
      errors: err.errors ? Object.values(err.errors).map(e => e.message) : undefined
    });
  }
};

// Update a project (only by creator)
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { 
    title,
    category,
    description, 
    duration, 
    maxGroupSize, 
    resources, 
    requirements 
  } = req.body;

  try {
    const updated = await Project.findOneAndUpdate(
      { _id: id },
      { 
        title,
        category,
        description, 
        duration, 
        maxGroupSize, 
        resources, 
        requirements 
      },
      { 
        new: true,
        runValidators: true // Ensure validations run on update
      }
    );
    
    if (!updated) {
      return res.status(404).json({ message: 'Project not found or not owned by you' });
    }
    
    res.json(updated);
  } catch (err) {
    res.status(500).json({ 
      message: 'Error updating project', 
      error: err.message,
      errors: err.errors ? Object.values(err.errors).map(e => e.message) : undefined
    });
  }
};

// Get a single project by ID (only if created by logged-in user)
exports.getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findOne({ _id: id });
    if (!project) {
      return res.status(404).json({ message: 'Project not found or not owned by you' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching project', error: err.message });
  }
};

// Delete a project (only by creator)
exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Project.findOneAndDelete({ _id: id });
    if (!deleted) {
      return res.status(404).json({ message: 'Project not found or not owned by you' });
    }
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting project', error: err.message });
  }
};