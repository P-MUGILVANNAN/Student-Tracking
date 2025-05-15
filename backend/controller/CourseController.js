const Course = require('../model/CourseSchema');

// Get all courses for the logged-in admin
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find({ createdBy: req.user._id });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Add a new course
exports.createCourse = async (req, res) => {
  const { title, duration } = req.body;
  try {
    const newCourse = new Course({
      title,
      duration,
      createdBy: req.user._id
    });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create course', error: err.message });
  }
};

// Update a course (only by creator)
exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, duration } = req.body;
  try {
    const updated = await Course.findOneAndUpdate(
      { _id: id, createdBy: req.user._id },
      { title, duration },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Course not found or not owned by you' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating course', error: err.message });
  }
};

// Get a single course by ID (only if created by logged-in admin)
exports.getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findOne({ _id: id, createdBy: req.user._id });
    if (!course) {
      return res.status(404).json({ message: 'Course not found or not owned by you' });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching course', error: err.message });
  }
};


// Delete a course (only by creator)
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Course.findOneAndDelete({ _id: id, createdBy: req.user._id });
    if (!deleted) return res.status(404).json({ message: 'Course not found or not owned by you' });
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting course', error: err.message });
  }
};
