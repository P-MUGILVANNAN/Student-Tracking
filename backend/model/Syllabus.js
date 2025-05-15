const mongoose = require('mongoose');

const syllabusSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Course ID is required']
  },
  filename: {
    type: String,
    required: [true, 'Filename is required']
  },
  fileUrl: {  // Changed from filePath to fileUrl for S3
    type: String,
    required: [true, 'File URL is required']
  },
  fileType: {
    type: String,
    required: [true, 'File type is required'],
    enum: ['pdf', 'doc', 'docx'] // Only allow these file types
  },
  fileSize: {
    type: Number,  // Changed from String to Number
    required: [true, 'File size is required']
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add virtual population for course details
syllabusSchema.virtual('course', {
  ref: 'Course',
  localField: 'courseId',
  foreignField: '_id',
  justOne: true
});

// Add virtual population for uploader details
syllabusSchema.virtual('uploader', {
  ref: 'User',
  localField: 'uploadedBy',
  foreignField: '_id',
  justOne: true
});

module.exports = mongoose.model('Syllabus', syllabusSchema);