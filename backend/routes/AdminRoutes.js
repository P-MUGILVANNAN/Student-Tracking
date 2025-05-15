const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/adminMiddleware');
const isAuthenticated = require('../middleware/isAuthenticated');
const User = require('../model/UserSchema');
const Progress = require('../model/ProgressSchema');
const Course = require('../model/CourseSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const StudentSubmission = require('../model/StudentSubmission');


// ✅ View all students by trainer name
router.get('/students', isAdmin, async (req, res) => {
  try {
    const admin = await User.findById(req.user.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const students = await User.find({
      role: 'student',
      trainerName: admin.trainerName
    }).populate('courses'); // ✅ Populate course details

    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.get('/student/:id', isAdmin, async (req, res) => {
  try {
    const student = await User.findById(req.params.id)
      .populate('institution')
      .populate('courses')
      .lean(); // Lean gives plain JS object

    if (!student) return res.status(404).json({ message: 'Student not found' });

    // Fetch all submissions made by this student
    const submissions = await StudentSubmission.find({ studentId: req.params.id })
      .populate('assessmentId') // populate assessment details inside submission
      .lean();

    // Attach submissions to the student object
    student.submissions = submissions;

    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



// ✅ Enroll student in a course
router.post('/enroll', isAdmin, async (req, res) => {
  const { studentId, courseId, daysData } = req.body;

  try {
    // Prevent duplicate enrollments
    const existing = await Progress.findOne({ userId: studentId, courseId });
    if (existing) return res.status(400).json({ message: 'Already enrolled in this course' });

    // Save progress record
    const progress = new Progress({
      userId: studentId,
      courseId,
      days: daysData
    });
    await progress.save();

    // Update student's enrolled courses
    await User.findByIdAndUpdate(studentId, {
      $addToSet: { courses: courseId } // avoid duplicates
    });

    res.status(201).json({ message: 'Student enrolled successfully', progress });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Admin Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await User.findOne({ email, role: 'admin' });
    if (!admin) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '365d' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ✅ GET Admin Profile (optional course population)
router.get('/profile', isAdmin, async (req, res) => {
  try {
    const admin = await User.findOne({ _id: req.user._id, role: 'admin' })
      .populate('courses'); // only works if admin model stores courses[] as ObjectIds

    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ✅ PUT Admin Profile
router.put('/profile', isAdmin, async (req, res) => {
  const { name, institution, trainerName, courses, phone } = req.body;

  try {
    const updatedAdmin = await User.findOneAndUpdate(
      { _id: req.user._id, role: 'admin' },
      { name, institution, trainerName, courses, phone },
      { new: true }
    ).populate('courses');

    if (!updatedAdmin) return res.status(404).json({ message: 'Admin not found' });

    res.json(updatedAdmin);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
