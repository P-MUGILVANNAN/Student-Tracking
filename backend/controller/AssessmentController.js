const Assessment = require('../model/AssessmentSchema');
const StudentSubmission = require('../model/StudentSubmission');
const mongoose = require('mongoose');

// Add a new assessment
exports.addAssessment = async (req, res) => {
  try {
    const { courseId, topic, questions } = req.body;

    if (!courseId || !topic || !questions) {
      return res.status(400).json({ error: 'Course ID, topic, and questions are required' });
    }

    const newAssessment = new Assessment({ courseId, topic, questions });
    await newAssessment.save();
    res.status(201).json({ message: 'Assessment created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create assessment' });
  }
};

// Get submissions by course ID
exports.getSubmissionsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    // Find all assessments for the course
    const assessments = await Assessment.find({ courseId });

    if (!assessments || assessments.length === 0) {
      return res.status(404).json({ error: 'No assessments found for this course' });
    }

    // Get all submissions for each assessment in the course
    const allSubmissions = [];
    for (const assessment of assessments) {
      const submissions = await StudentSubmission.find({ assessmentId: assessment._id })
        .populate('studentId', 'name email') // Populate student details
        .populate('assessmentId', 'topic');  // Populate assessment details

      allSubmissions.push(...submissions);
    }

    if (allSubmissions.length === 0) {
      return res.status(404).json({ error: 'No submissions found for this course' });
    }

    res.json(allSubmissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch submissions for this course' });
  }
};

// Get assessments by course
exports.getAssessmentsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const assessments = await Assessment.find({ courseId });

    if (!assessments || assessments.length === 0) {
      return res.status(404).json({ error: 'No assessments found for this course' });
    }

    res.json(assessments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch assessments' });
  }
};

// Get assessment by ID
exports.getAssessmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const assessment = await Assessment.findById(id);

    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }

    res.json(assessment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch assessment' });
  }
};

// Submit assessment
exports.submitAssessment = async (req, res) => {
  try {
    const { id: assessmentId } = req.params; // ✅ change here
    const { answers } = req.body; // { questionId: selectedOption }

    const studentId = req.user.id;

    if (!studentId) {
      return res.status(400).json({ error: 'Student ID is required' });
    }

    // Fetch the assessment to compare correct answers
    const assessment = await Assessment.findById(assessmentId);
    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }

    // Transform and grade answers
    const formattedAnswers = Object.entries(answers).map(([questionId, selectedAnswer]) => {
      const question = assessment.questions.find(q => q._id.toString() === questionId);
      const isCorrect = question?.correctAnswer === selectedAnswer;

      return {
        questionId,
        selectedAnswer,
        isCorrect,
      };
    });

    const newSubmission = new StudentSubmission({
      studentId,
      assessmentId,
      answers: formattedAnswers,
      submittedAt: new Date(),
    });

    await newSubmission.save();

    res.status(200).json({ message: 'Assessment submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit assessment' });
  }
};



// Get submissions by assessment ID
exports.getSubmissionsByAssessment = async (req, res) => {
  try {
    const { id: assessmentId } = req.params;

    // Find all submissions for the given assessment
    const submissions = await StudentSubmission.find({ assessmentId })
      .populate('studentId', 'name email') // Populate student details
      .populate('assessmentId', 'topic');  // You may or may not need to populate this based on your use case

    if (!submissions || submissions.length === 0) {
      return res.status(404).json({ error: 'No submissions found for this assessment' });
    }

    res.json(submissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
};
