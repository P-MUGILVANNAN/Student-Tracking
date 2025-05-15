const Attendance = require('../model/AttendanceSchema');
const Student = require('../model/UserSchema');
const Course = require('../model/CourseSchema');

const attendanceController = {
  // Mark or update attendance
  markAttendance: async (req, res) => {
    try {
      const { studentId, date, courseId, status, groomingStatus, remarks } = req.body;
      
      // Validate required fields
      if (!studentId || !date || !courseId || !status || !groomingStatus) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Check if student and course exist
      const [student, course] = await Promise.all([
        Student.findById(studentId),
        Course.findById(courseId)
      ]);

      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }

      const attendanceData = {
        student: studentId,
        date: new Date(date),
        course: courseId,
        status,
        groomingStatus,
        remarks: remarks || ''
      };

      const attendance = await Attendance.markAttendance(attendanceData);
      
      res.status(201).json({
        message: 'Attendance marked successfully',
        attendance
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ error: 'Duplicate attendance entry' });
      }
      res.status(500).json({ error: error.message });
    }
  },

  // Bulk mark attendance for multiple students
  markBulkAttendance: async (req, res) => {
    try {
      const { date, courseId, attendanceRecords } = req.body;
      
      if (!date || !courseId || !attendanceRecords || !Array.isArray(attendanceRecords)) {
        return res.status(400).json({ error: 'Invalid request data' });
      }

      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }

      const results = await Promise.all(
        attendanceRecords.map(async record => {
          try {
            const student = await Student.findById(record.studentId);
            if (!student) {
              return { 
                studentId: record.studentId, 
                error: 'Student not found' 
              };
            }

            const attendanceData = {
              student: record.studentId,
              date: new Date(date),
              course: courseId,
              status: record.status,
              groomingStatus: record.groomingStatus,
              remarks: record.remarks || ''
            };

            const attendance = await Attendance.markAttendance(attendanceData);
            return { studentId: record.studentId, success: true, attendance };
          } catch (error) {
            return { 
              studentId: record.studentId, 
              error: error.message 
            };
          }
        })
      );

      res.status(201).json({
        message: 'Bulk attendance processed',
        results
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get attendance by date and course
  getAttendanceByDateAndCourse: async (req, res) => {
    try {
      const { date, courseId } = req.params;
      
      const attendances = await Attendance.find({
        date: new Date(date),
        course: courseId
      }).populate('student', 'name studentId')
        .populate('course', 'title code')
        .sort({ 'student.name': 1 });

      res.status(200).json(attendances);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get student attendance history
  getStudentAttendance: async (req, res) => {
    try {
      const { studentId, courseId } = req.params;
      const { startDate, endDate } = req.query;
      
      const query = { 
        student: studentId,
        ...(courseId && { course: courseId })
      };

      if (startDate && endDate) {
        query.date = { 
          $gte: new Date(startDate), 
          $lte: new Date(endDate) 
        };
      }

      const attendances = await Attendance.find(query)
        .populate('course', 'title code')
        .sort({ date: -1 });

      res.status(200).json(attendances);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update attendance record
  updateAttendance: async (req, res) => {
    try {
      const { id } = req.params;
      const { status, groomingStatus, remarks } = req.body;
      
      const attendance = await Attendance.findByIdAndUpdate(
        id,
        { 
          status, 
          groomingStatus, 
          remarks,
          updatedAt: Date.now() 
        },
        { new: true }
      ).populate('student', 'name studentId')
       .populate('course', 'title code');

      if (!attendance) {
        return res.status(404).json({ error: 'Attendance record not found' });
      }

      res.status(200).json({
        message: 'Attendance updated successfully',
        attendance
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete attendance record
  deleteAttendance: async (req, res) => {
    try {
      const { id } = req.params;
      
      const attendance = await Attendance.findByIdAndDelete(id);

      if (!attendance) {
        return res.status(404).json({ error: 'Attendance record not found' });
      }

      res.status(200).json({
        message: 'Attendance deleted successfully'
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get attendance summary for a course
  getCourseAttendanceSummary: async (req, res) => {
    try {
      const { courseId } = req.params;
      
      const summary = await Attendance.aggregate([
        { $match: { course: mongoose.Types.ObjectId(courseId) } },
        {
          $group: {
            _id: '$status',
            count: { $sum: 1 }
          }
        }
      ]);

      res.status(200).json(summary);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = attendanceController;