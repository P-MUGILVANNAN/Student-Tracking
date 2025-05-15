const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format']
  },
  password: { 
    type: String, 
    required: true,
    minlength: [6, 'Password must be at least 6 characters']
  },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  phone: { type: String },
  studentId: { 
    type: String, 
    required: true,
    trim: true,
    unique: true
  },
  joiningDate: { 
    type: Date, 
    default: Date.now 
  },
  institution: {
    name: { type: String },
    address: { type: String }
  },
  trainerName: { 
    type: String, 
    required: true,
    trim: true
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    }
  ],
  enrollments: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      },
      enrolledAt: {
        type: Date,
        default: Date.now
      },
      daysData: [{
        date: Date,
        status: String,
        notes: String
      }]
    }
  ]
}, { 
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

// Hash password before save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);