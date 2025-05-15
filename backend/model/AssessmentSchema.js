// models/Assessment.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionType: {
    type: String,
    enum: ['mcq', 'shortAnswer'],
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  options: [String], // Only for MCQ
  correctAnswer: String // Can be index (for MCQ) or text (for short answer)
});

const assessmentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  questions: [questionSchema]
});

module.exports = mongoose.model('Assessment', assessmentSchema);
