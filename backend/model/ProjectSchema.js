const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Project category is required'],
    enum: {
      values: ['html-css', 'javascript', 'bootstrap', 'react-angular', 'final-project'],
      message: '{VALUE} is not a valid project category'
    },
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true
  },
  duration: {
    type: String,
    required: [true, 'Project duration is required'],
    enum: {
      values: ['1-week', '2-weeks', '3-weeks', '4-weeks', '5-weeks', '6-weeks', 'semester-long'],
      message: '{VALUE} is not a valid duration'
    }
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Maximum group size is required'],
    min: [1, 'Group size must be at least 1'],
    max: [20, 'Group size cannot exceed 20']
  },
  resources: {
    type: String,
    trim: true,
    default: ''
  },
  requirements: {
    type: String,
    required: [true, 'Project requirements are required'],
    trim: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Course reference is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  projectSubmissions: [{
    type: Schema.Types.ObjectId,
    ref: 'ProjectSubmission'
  }]
});

// Indexes for better query performance
projectSchema.index({ course: 1 });
projectSchema.index({ createdBy: 1 });
projectSchema.index({ category: 1 }); // New index for category filtering

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;