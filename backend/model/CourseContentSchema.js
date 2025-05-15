const mongoose = require('mongoose');

const courseContentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  title: {
    type: String,
    default: '' // Optional title for the content
  },
  fileUrl: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    enum: ['pdf', 'ppt', 'pptx'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('CourseContent', courseContentSchema);
