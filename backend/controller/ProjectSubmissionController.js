const ProjectSubmission = require('../model/ProjectSubmissionSchema');
const Project = require('../model/ProjectSchema');
const User = require('../model/UserSchema');

// Submit a project
exports.submitProject = async (req, res) => {
  try {
    const { projectId, githubLink, liveLink, description } = req.body;
    const userId = req.user._id; // This should be set by your authentication middleware

    // Debug: Check if userId exists
    // console.log('User ID from request:', userId);
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'User not authenticated'
      });
    }

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ 
        success: false, 
        message: 'Project not found' 
      });
    }

    const existingSubmission = await ProjectSubmission.findOne({ 
      project: projectId, 
      student: userId 
    });
    
    if (existingSubmission) {
      return res.status(400).json({ 
        success: false, 
        message: 'You have already submitted this project' 
      });
    }

    const submission = new ProjectSubmission({
      project: projectId,
      student: userId, // Make sure this is included
      title: project.title,
      githubLink,
      liveLink: liveLink || undefined,
      description
    });

    await submission.save();
    
    // Update project's submissions array
    if (!project.submissions) {
      project.submissions = [];
    }
    project.submissions.push(submission._id);
    await project.save();

    res.status(201).json({ 
      success: true, 
      message: 'Project submitted successfully',
      data: submission
    });

  } catch (err) {
    console.error('Submission error:', err);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: err.message 
    });
  }
};

// Get all submissions for a project
exports.getSubmissionsForProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const submissions = await ProjectSubmission.find({ project: projectId })
      .populate('student', 'name email')
      .sort({ submittedAt: -1 });
    res.status(200).json({ success: true, data: submissions });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

// Get student's submission for a project
exports.getMySubmission = async (req, res) => {
  try {
    const { projectId } = req.params;
    const submission = await ProjectSubmission.findOne({
      project: projectId,
      student: req.user._id
    }).populate('project', 'title category');
    
    if (!submission) {
      return res.status(404).json({ success: false, message: 'Submission not found' });
    }
    res.status(200).json({ success: true, data: submission });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

// Get submissions by student
exports.getSubmissionsByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const submissions = await ProjectSubmission.find({ student: studentId })
      .populate('project', 'title category');
    res.status(200).json({ success: true, data: submissions });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

// Get submission by ID
exports.getSubmissionById = async (req, res) => {
  try {
    const submission = await ProjectSubmission.findById(req.params.id)
      .populate('student', 'name email')
      .populate('project', 'title category');
      
    if (!submission) {
      return res.status(404).json({ success: false, message: 'Submission not found' });
    }
    res.status(200).json({ success: true, data: submission });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

// Update submission
exports.updateSubmission = async (req, res) => {
  try {
    const updatedSubmission = await ProjectSubmission.findOneAndUpdate(
      { _id: req.params.id, student: req.user._id },
      req.body,
      { new: true }
    );
    
    if (!updatedSubmission) {
      return res.status(404).json({ success: false, message: 'Submission not found' });
    }
    res.status(200).json({ success: true, data: updatedSubmission });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

// Delete submission
exports.deleteSubmission = async (req, res) => {
  try {
    const submission = await ProjectSubmission.findOneAndDelete({
      _id: req.params.id,
      $or: [
        { student: req.user._id },
        { role: 'admin' }
      ]
    });
    
    if (!submission) {
      return res.status(404).json({ success: false, message: 'Submission not found' });
    }
    res.status(200).json({ success: true, message: 'Submission deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

// Get submissions for course
exports.getSubmissionsForCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const submissions = await ProjectSubmission.find()
      .populate({
        path: 'project',
        match: { course: courseId }
      })
      .populate('student', 'name email');
      
    const filtered = submissions.filter(sub => sub.project);
    res.status(200).json({ success: true, data: filtered });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};