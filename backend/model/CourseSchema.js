const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String },
  courseUILink: { type: String },
  syllabus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Syllabus'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // admin who created it
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
