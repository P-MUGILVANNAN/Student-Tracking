const Progress = require('../model/ProgressSchema');

// 1. Create progress for a course when enrolled
exports.createProgress = async (req, res) => {
  try {
    const { userId, courseId, daysData } = req.body;

    const newProgress = new Progress({
      userId,
      courseId,
      days: daysData // { day1: { pdfUrl, task, completed: false }, ... }
    });

    await newProgress.save();
    res.status(201).json(newProgress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 2. Get progress for a user & course
exports.getProgress = async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const progress = await Progress.findOne({ userId, courseId });
    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 3. Update task completion for a day
exports.updateDayCompletion = async (req, res) => {
  try {
    const { userId, courseId, day } = req.body;

    const progress = await Progress.findOne({ userId, courseId });
    if (!progress) return res.status(404).json({ message: 'Progress not found' });

    if (!progress.days.has(day)) return res.status(404).json({ message: 'Day not found' });

    progress.days.get(day).completed = true;
    await progress.save();

    res.status(200).json({ message: 'Day marked complete', progress });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
