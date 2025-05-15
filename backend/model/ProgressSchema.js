const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
  pdfUrl: { type: String, required: true },
  task: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  days: { type: Map, of: daySchema }, // day1, day2, etc.
}, { timestamps: true });

module.exports = mongoose.model('Progress', ProgressSchema);
