const User = require('../model/UserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// JWT creation function
const createToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, { expiresIn: '365d' });
};

// Signup controller - updated for new schema
exports.signup = async (req, res) => {
  const { name, email, password, phone, studentId, trainerName, institution, role } = req.body;

  try {
    // Check if email or studentId already exists
    const existingUser = await User.findOne({ $or: [{ email }, { studentId }] });
    if (existingUser) {
      return res.status(400).json({ 
        message: existingUser.email === email ? 'Email already exists' : 'Student ID already exists'
      });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password,
      phone,
      studentId,
      trainerName,
      institution,
      role: role || 'student'
    });

    await user.save();

    const token = createToken(user._id, user.role);

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        studentId: user.studentId,
        trainerName: user.trainerName,
        institution: user.institution,
        role: user.role,
        joiningDate: user.joiningDate
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Login controller - remains mostly the same
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = createToken(user._id, user.role);

    res.status(200).json({
      message: 'User logged in successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        studentId: user.studentId
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get student profile - updated for new schema
exports.getStudentProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const student = await User.findById(userId)
      .populate('courses')
      .populate('enrollments.course')
      .select('-password');

    if (!student || student.role !== 'student') {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({
      id: student._id,
      name: student.name,
      email: student.email,
      phone: student.phone,
      studentId: student.studentId,
      joiningDate: student.joiningDate,
      trainerName: student.trainerName,
      institution: student.institution,
      courses: student.courses,
      enrollments: student.enrollments
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update student profile - updated for new schema
exports.updateProfile = async (req, res) => {
  const { name, email, phone } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update basic fields
    user.name = name || user.name;
    user.phone = phone || user.phone;

    // Email can only be updated if it's not already taken
    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return res.status(400).json({ message: 'Email already in use' });
      }
      user.email = email;
    }

    await user.save();

    // Return updated user data
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      studentId: user.studentId,
      trainerName: user.trainerName,
      institution: user.institution,
      joiningDate: user.joiningDate,
      role: user.role
    };

    res.status(200).json({
      message: 'Profile updated successfully',
      user: userData
    });

  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ 
      message: 'Server error while updating profile',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// New controller for course enrollment
exports.enrollInCourse = async (req, res) => {
  const { courseId } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check if already enrolled
    const alreadyEnrolled = user.enrollments.some(e => e.course.toString() === courseId);
    if (alreadyEnrolled) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    // Add new enrollment
    user.enrollments.push({
      course: courseId,
      enrolledAt: new Date()
    });

    // Also add to courses array for backward compatibility
    if (!user.courses.includes(courseId)) {
      user.courses.push(courseId);
    }

    await user.save();

    res.status(200).json({
      message: 'Successfully enrolled in course',
      enrollments: user.enrollments
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// New controller to update course progress
exports.updateCourseProgress = async (req, res) => {
  const { enrollmentId, date, status, notes } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const enrollment = user.enrollments.id(enrollmentId);
    if (!enrollment) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }

    // Add or update day data
    const dayIndex = enrollment.daysData.findIndex(d => 
      new Date(d.date).toDateString() === new Date(date).toDateString()
    );

    if (dayIndex >= 0) {
      // Update existing day
      enrollment.daysData[dayIndex].status = status;
      enrollment.daysData[dayIndex].notes = notes;
    } else {
      // Add new day
      enrollment.daysData.push({ date, status, notes });
    }

    await user.save();

    res.status(200).json({
      message: 'Course progress updated',
      enrollment
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};