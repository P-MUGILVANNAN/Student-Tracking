const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  status: {
    type: String,
    required: true,
    enum: ['present', 'absent', 'late', 'holiday'],
    default: 'present'
  },
  groomingStatus: {
    type: String,
    required: true,
    enum: ['present', 'absent'],
    default: 'present'
  },
  remarks: {
    type: String,
    trim: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Compound index to prevent duplicate attendance records for same student+date+course
attendanceSchema.index(
  { student: 1, date: 1, course: 1 }, 
  { unique: true }
);

// Update the updatedAt field before saving
attendanceSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Static method to mark attendance
attendanceSchema.statics.markAttendance = async function(attendanceData) {
  const { student, date, course } = attendanceData;
  
  // Check if attendance already exists for this student-date-course combination
  const existingAttendance = await this.findOne({ 
    student, 
    date: new Date(date), 
    course 
  });

  if (existingAttendance) {
    // Update existing record
    existingAttendance.status = attendanceData.status;
    existingAttendance.groomingStatus = attendanceData.groomingStatus;
    existingAttendance.remarks = attendanceData.remarks;
    return existingAttendance.save();
  }

  // Create new attendance record
  return this.create(attendanceData);
};

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;