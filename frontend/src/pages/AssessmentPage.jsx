import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AssessmentPage = () => {
    const { assessmentId } = useParams();
    const navigate = useNavigate();

    const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
    const [assessment, setAssessment] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchAssessment = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/assessment/${assessmentId}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setAssessment(res.data);
            } catch (err) {
                console.error(err);
                alert("Failed to load assessment");
            }
        };

        if (assessmentId) {
            fetchAssessment();
        }

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    submitAssessment();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [assessmentId]);

    const formatTime = (sec) => {
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleAnswerSelect = (questionIndex, option) => {
        setAnswers((prev) => ({ ...prev, [questionIndex]: option }));
    };

    const goToNext = () => {
        if (currentQuestionIndex < assessment.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const goToPrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const submitAssessment = async () => {
        if (isSubmitting) return;
        setIsSubmitting(true);
    
        const transformedAnswers = {};
        assessment.questions.forEach((q, index) => {
            transformedAnswers[q._id] = answers[index] || "";
        });
    
        const token = localStorage.getItem('token');
        const decodedToken = token ? JSON.parse(atob(token.split('.')[1])) : null;
    
        if (!decodedToken || !decodedToken.id) {
            alert("Student ID is missing. Please log in again.");
            setIsSubmitting(false);
            return;
        }
    
        try {
            await axios.post(
                `http://localhost:5000/api/assessment/${assessmentId}/submit`,
                { answers: transformedAnswers },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert("Assessment submitted successfully!");
            navigate("/student/profile");
        } catch (err) {
            console.error(err);
            alert("Failed to submit assessment");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container-fluid min-vh-100" style={{ background: '#f8f9fa' }}>
            <div className="row g-0">
                {/* Sidebar */}
                <div className="col-md-3 p-4 bg-white shadow-sm" style={{ minHeight: '100vh' }}>
                    <div className="sticky-top pt-3">
                        <h4 className="text-primary mb-4 fw-bold">{assessment?.title || 'Assessment'}</h4>
                        
                        <div className="card mb-4 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <h6 className="card-subtitle mb-2 text-muted">Time Remaining</h6>
                                <div className="display-5 fw-bold" style={{ color: timeLeft < 300 ? '#dc3545' : '#28a745' }}>
                                    {formatTime(timeLeft)}
                                </div>
                            </div>
                        </div>

                        <h6 className="mb-3 text-secondary">Questions</h6>
                        <div className="d-flex flex-wrap gap-2 mb-4">
                            {assessment?.questions?.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`btn rounded-circle p-0 d-flex align-items-center justify-content-center 
                                        ${answers[idx] ? 'btn-success' : 'btn-outline-secondary'}
                                        ${currentQuestionIndex === idx ? 'border-2 border-primary' : ''}`}
                                    style={{ width: '40px', height: '40px' }}
                                    onClick={() => setCurrentQuestionIndex(idx)}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                        </div>

                        <button 
                            className="btn btn-primary w-100 py-2 fw-bold"
                            onClick={submitAssessment}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                    Submitting...
                                </>
                            ) : 'Submit Assessment'}
                        </button>
                    </div>
                </div>

                {/* Main content */}
                <div className="col-md-9 p-4">
                    {assessment?.questions?.length > 0 ? (
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h5 className="mb-0 text-primary">
                                        Question {currentQuestionIndex + 1} of {assessment.questions.length}
                                    </h5>
                                    <span className="badge bg-light text-dark">
                                        {answers[currentQuestionIndex] ? 'Answered' : 'Not Answered'}
                                    </span>
                                </div>

                                <div className="card mb-4 border-primary">
                                    <div className="card-body">
                                        <h5 className="card-title">{assessment.questions[currentQuestionIndex].questionText}</h5>
                                    </div>
                                </div>

                                <div className="list-group mb-4">
                                    {assessment.questions[currentQuestionIndex].options.map((opt, i) => (
                                        <button
                                            key={i}
                                            className={`list-group-item list-group-item-action text-start py-3 
                                                ${answers[currentQuestionIndex] === opt ? 'active bg-success border-success' : ''}
                                                ${currentQuestionIndex in answers && !answers[currentQuestionIndex] ? 'bg-light' : ''}`}
                                            onClick={() => handleAnswerSelect(currentQuestionIndex, opt)}
                                        >
                                            <div className="d-flex align-items-center">
                                                <span className="me-3 fw-bold">{String.fromCharCode(65 + i)}.</span>
                                                <span>{opt}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-outline-primary px-4"
                                        onClick={goToPrevious}
                                        disabled={currentQuestionIndex === 0}
                                    >
                                        ← Previous
                                    </button>
                                    <button
                                        className="btn btn-outline-primary px-4"
                                        onClick={goToNext}
                                        disabled={currentQuestionIndex === assessment.questions.length - 1}
                                    >
                                        Next →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AssessmentPage;