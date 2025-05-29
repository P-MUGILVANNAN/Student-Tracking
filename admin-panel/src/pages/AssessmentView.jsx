import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AssessmentView() {
  const { id, studentId } = useParams();
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState(null);
  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const [assessmentRes, submissionRes] = await Promise.all([
        axios.get(`https://student-tracking-e3tk.onrender.com/api/assessment/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }),
        axios.get(`https://student-tracking-e3tk.onrender.com/api/assessment/${id}/submissions`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
      ]);

      setAssessment(assessmentRes.data);
      
      // Debug logs
      console.log('All submissions:', submissionRes.data);
      console.log('Looking for studentId:', studentId);

      // Find the student's submission - properly access nested studentId._id
      const studentSubmission = submissionRes.data.find(sub => 
        sub.studentId._id.toString() === studentId.toString()
      );

      console.log('Found submission:', studentSubmission);
      
      setSubmission(studentSubmission || null);

      // Calculate score if submission exists
      if (studentSubmission) {
        console.log('Calculating score for submission:', studentSubmission);
        
        const correctAnswers = assessmentRes.data.questions.filter(q => {
          const studentAnswer = studentSubmission.answers.find(a => 
            a.questionId.toString() === q._id.toString()
          );
          
          console.log(`Question ${q._id}:`, {
            correctAnswer: q.correctAnswer,
            studentAnswer: studentAnswer?.selectedAnswer,
            isCorrect: studentAnswer?.selectedAnswer === q.correctAnswer
          });
          
          return studentAnswer?.selectedAnswer === q.correctAnswer;
        }).length;
        
        console.log('Correct answers:', correctAnswers);
        
        setScore(correctAnswers);
        setTotalQuestions(assessmentRes.data.questions.length);
      } else {
        console.log('No submission found for this student');
        setScore(0);
        setTotalQuestions(assessmentRes.data.questions.length);
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setLoading(false);
    }
  };

  fetchData();
}, [id, studentId]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!assessment) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <div className="alert alert-danger">Failed to load assessment</div>
      </div>
    );
  }

  return (
    <div className="assessment-view-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem 0'
    }}>
      <div className="container">
        <div className="card border-0 shadow-lg" style={{
          borderRadius: '15px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)'
        }}>
          <div className="card-header py-3" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="mb-0 text-white">
                <i className="bi bi-clipboard-data me-2"></i>
                {assessment.topic}
              </h3>
              <button
                className="btn btn-sm btn-outline-light"
                onClick={() => navigate(-1)}
              >
                <i className="bi bi-arrow-left me-1"></i> Back
              </button>
            </div>
          </div>

          <div className="card-body p-4">
            {/* Score Summary */}
            {submission && (
              <div className="card mb-4 border-0" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
                borderRadius: '10px'
              }}>
                <div className="card-body text-center">
                  <h5 className="text-white mb-3">Your Results</h5>
                  <div className="d-flex justify-content-around">
                    <div>
                      <h1 className="text-info">{score}/{totalQuestions}</h1>
                      <small className="text-white-50">Correct Answers</small>
                    </div>
                    <div>
                      <h1 className="text-info">{Math.round((score / totalQuestions) * 100)}%</h1>
                      <small className="text-white-50">Score</small>
                    </div>
                    <div>
                      <h1 className="text-info">
                        {score === totalQuestions ? '🎉' :
                          score >= totalQuestions * 0.7 ? '👍' : '😕'}
                      </h1>
                      <small className="text-white-50">Performance</small>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Questions List */}
            <h5 className="text-white mb-3">
              <i className="bi bi-question-circle me-2"></i>
              Questions
            </h5>

            {assessment.questions?.length > 0 ? (
              <div className="accordion" id="questionsAccordion">
                {assessment.questions.map((question, i) => {
                  const studentAnswer = submission?.answers?.find(
                    a => a.questionId.toString() === question._id.toString()
                  )?.selectedAnswer || 'Not answered';

                  const isCorrect = studentAnswer === question.correctAnswer;

                  return (
                    <div key={i} className="accordion-item mb-3 border-0" style={{
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '10px'
                    }}>
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed bg-transparent text-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#question-${i}`}
                          style={{ borderRadius: '10px' }}
                        >
                          <span className="me-2">Q{i + 1}.</span>
                          {question.questionText}
                          <span className={`ms-2 badge ${isCorrect ? 'bg-success' : 'bg-danger'}`}>
                            {isCorrect ? 'Correct' : 'Incorrect'}
                          </span>
                        </button>
                      </h2>
                      <div
                        id={`question-${i}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#questionsAccordion"
                      >
                        <div className="accordion-body">
                          <div className="mb-3">
                            <h6 className="text-info">
                              <i className="bi bi-check-circle me-2"></i>
                              Correct Answer
                            </h6>
                            <div className="p-3 bg-dark rounded text-white">
                              {question.correctAnswer}
                            </div>
                          </div>

                          <div className="mb-3">
                            <h6 className={isCorrect ? 'text-success' : 'text-danger'}>
                              <i className="bi bi-person-circle me-2"></i>
                              Your Answer
                            </h6>
                            <div className={`p-3 rounded ${isCorrect ? 'bg-success' : 'bg-danger'} bg-opacity-25`}>
                              {studentAnswer}
                            </div>
                          </div>

                          {question.questionType === 'mcq' && question.options?.length > 0 && (
                            <div>
                              <h6 className="text-white-50">
                                <i className="bi bi-list-ul me-2"></i>
                                Options
                              </h6>
                              <ul className="list-group">
                                {question.options.map((option, optIndex) => (
                                  <li
                                    key={optIndex}
                                    className={`list-group-item ${option === question.correctAnswer ? 'list-group-item-success' : ''}`}
                                  >
                                    {option}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-4 text-muted">
                <i className="bi bi-question-lg fs-1"></i>
                <p className="mt-3">No questions available for this assessment</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}