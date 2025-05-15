import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AddAssessment = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [assessmentTitle, setAssessmentTitle] = useState('');
  const [questions, setQuestions] = useState([
    { questionText: '', questionType: 'mcq', options: ['', '', '', ''], answer: '' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleTitleChange = (e) => setAssessmentTitle(e.target.value);

  const handleQuestionChange = (index, e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].questionText = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleQuestionTypeChange = (index, e) => {
    const updatedQuestions = [...questions];
    const selectedType = e.target.value;
    updatedQuestions[index].questionType = selectedType;

    if (selectedType === 'shortAnswer') {
      updatedQuestions[index].options = [];
    } else {
      updatedQuestions[index].options = ['', '', '', ''];
    }

    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (index, optionIndex, e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options[optionIndex] = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (index, e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].answer = e.target.value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { questionText: '', questionType: 'mcq', options: ['', '', '', ''], answer: '' }
    ]);
  };

  const removeQuestion = (index) => {
    if (questions.length > 1) {
      const updatedQuestions = [...questions];
      updatedQuestions.splice(index, 1);
      setQuestions(updatedQuestions);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formattedQuestions = questions.map(q => ({
      questionText: q.questionText,
      questionType: q.questionType,
      options: q.questionType === 'mcq' ? q.options : [],
      correctAnswer: q.answer
    }));

    const assessmentData = {
      courseId,
      topic: assessmentTitle,
      questions: formattedQuestions
    };

    try {
      await axios.post('http://localhost:5000/api/assessments', assessmentData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      navigate(`/admin/course/${courseId}`, { state: { message: 'Assessment created successfully!' } });
    } catch (error) {
      console.error(error);
      alert('Failed to add assessment: ' + (error.response?.data?.message || 'Server error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-assessment-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem 0'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
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
                <h3 className="text-center mb-0 text-white">
                  <i className="bi bi-clipboard-plus me-2"></i>
                  Create New Assessment
                </h3>
              </div>
              
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent text-white"
                        id="assessmentTitle"
                        name="assessmentTitle"
                        placeholder="Assessment Title"
                        value={assessmentTitle}
                        onChange={handleTitleChange}
                        required
                        style={{ borderRadius: '10px', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                      />
                      <label htmlFor="assessmentTitle" className="text-white-50">Assessment Title</label>
                    </div>
                  </div>

                  <h5 className="text-white mb-3">
                    <i className="bi bi-question-circle me-2"></i>
                    Questions
                  </h5>

                  {questions.map((question, index) => (
                    <div key={index} className="mb-4 p-3 rounded" style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px'
                    }}>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="mb-0 text-white">Question {index + 1}</h6>
                        {questions.length > 1 && (
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => removeQuestion(index)}
                            style={{ borderRadius: '20px' }}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        )}
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control bg-transparent text-white"
                          id={`question-${index}`}
                          value={question.questionText}
                          onChange={(e) => handleQuestionChange(index, e)}
                          placeholder="Enter question"
                          required
                          style={{ borderRadius: '10px', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                        />
                        <label htmlFor={`question-${index}`} className="text-white-50">Question Text</label>
                      </div>

                      <div className="form-floating mb-3">
                        <select
                          className="form-select bg-transparent text-white"
                          id={`type-${index}`}
                          value={question.questionType}
                          onChange={(e) => handleQuestionTypeChange(index, e)}
                          required
                          style={{ borderRadius: '10px', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                        >
                          <option value="mcq" className="text-dark">Multiple Choice (MCQ)</option>
                          <option value="shortAnswer" className="text-dark">Short Answer</option>
                        </select>
                        <label htmlFor={`type-${index}`} className="text-white-50">Question Type</label>
                      </div>

                      {question.questionType === 'mcq' && (
                        <div className="mb-3">
                          <h6 className="text-white mb-3">
                            <i className="bi bi-list-ul me-2"></i>
                            Options
                          </h6>
                          {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="form-floating mb-2">
                              <input
                                type="text"
                                className="form-control bg-transparent text-white"
                                id={`option-${index}-${optionIndex}`}
                                value={option}
                                onChange={(e) => handleOptionChange(index, optionIndex, e)}
                                placeholder={`Option ${optionIndex + 1}`}
                                required
                                style={{ borderRadius: '10px', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                              />
                              <label htmlFor={`option-${index}-${optionIndex}`} className="text-white-50">
                                Option {optionIndex + 1}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent text-white"
                          id={`answer-${index}`}
                          value={question.answer}
                          onChange={(e) => handleAnswerChange(index, e)}
                          placeholder="Enter the correct answer"
                          required
                          style={{ borderRadius: '10px', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                        />
                        <label htmlFor={`answer-${index}`} className="text-white-50">Correct Answer</label>
                      </div>
                    </div>
                  ))}

                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={addQuestion}
                      style={{
                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '10px 20px'
                      }}
                    >
                      <i className="bi bi-plus-circle me-2"></i>
                      Add Question
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '10px 20px'
                      }}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Saving...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-save me-2"></i>
                          Save Assessment
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={() => navigate(-1)}
                      style={{ borderRadius: '10px', padding: '10px 20px' }}
                    >
                      <i className="bi bi-x-circle me-2"></i>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAssessment;