import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Dashboard = () => {
  // State initialization
  const [attendanceData, setAttendanceData] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [assessmentData, setAssessmentData] = useState(null);
  const [loading, setLoading] = useState({
    attendance: true,
    projects: true,
    assessments: true
  });
  const [error, setError] = useState(null);

  const [monthData, setMonthData] = useState({
    presentDays: 0,
    absentDays: 0,
    groomingPresent: 0,
    groomingAbsent: 0,
    totalDays: 0
  });

  const [projectStats, setProjectStats] = useState({
    submitted: 0,
    pending: 0,
    total: 0
  });
  const [assessmentStats, setAssessmentStats] = useState({
    totalMarks: 0,
    assessmentsCount: 0
  });

  const [studentId, setStudentId] = useState(null);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setStudentId(decoded.id);
      } catch (err) {
        setError("Invalid token");
        setLoading({
          attendance: false,
          projects: false
        });
      }
    } else {
      setError("No token found, please login");
      setLoading({
        attendance: false,
        projects: false
      });
    }
  }, []);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Fetch attendance data
  useEffect(() => {
    if (!studentId) return;

    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(`https://student-tracking-e3tk.onrender.com/api/attendance/student/${studentId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const totalDaysInMonth = getDaysInMonth(currentYear, currentMonth);

        const monthlyRecords = response.data.filter(record => {
          const recordDate = new Date(record.date);
          return recordDate.getMonth() === currentMonth &&
            recordDate.getFullYear() === currentYear;
        });

        const summary = {
          presentDays: monthlyRecords.filter(r => r.status === 'present').length,
          absentDays: monthlyRecords.filter(r => r.status === 'absent').length,
          groomingPresent: monthlyRecords.filter(r => r.groomingStatus === 'present').length,
          groomingAbsent: monthlyRecords.filter(r => r.groomingStatus === 'absent').length,
          totalDays: totalDaysInMonth
        };

        setAttendanceData(response.data);
        setMonthData(summary);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.error || err.message);
      } finally {
        setLoading(prev => ({ ...prev, attendance: false }));
      }
    };

    fetchAttendanceData();
  }, [studentId]);

  // Fetch project data
  useEffect(() => {
    if (!studentId) return;

    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`https://student-tracking-e3tk.onrender.com/api/project-submissions/student/${studentId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        const submitted = response.data.data.filter(p => p.status === 'submitted').length;
        const pending = response.data.data.filter(p => p.status === 'pending').length;

        setProjectStats({
          submitted,
          pending,
          total: response.data.data.length
        });

        setProjectData(response.data.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.error || err.message);
      } finally {
        setLoading(prev => ({ ...prev, projects: false }));
      }
    };

    fetchProjectData();
  }, [studentId]);

  // Fetch assessment data
  useEffect(() => {
    if (!studentId) return;

    const fetchAssessmentData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/submissions/student/${studentId}`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          }
        );

        const data = response.data;

        if (data.length > 0) {
          const processedAssessments = data.map(assessment => {
            const correctAnswers = assessment.answers.filter(a => a.isCorrect).length;
            const totalQuestions = assessment.answers.length;
            return {
              ...assessment,
              marks: correctAnswers,
              totalMarks: totalQuestions,
              percentage: Math.round((correctAnswers / totalQuestions) * 100),
              topic: assessment.assessmentId?.topic || 'Assessment'
            };
          });

          const totalMarks = processedAssessments.reduce((sum, a) => sum + a.marks, 0);
          const totalPossible = processedAssessments.reduce((sum, a) => sum + a.totalMarks, 0);
          const averageScore = totalPossible > 0 ? Math.round((totalMarks / totalPossible) * 100) : 0;

          setAssessmentStats({
            totalMarks,
            totalPossible,
            averageScore,
            assessmentsCount: data.length,
            assessments: processedAssessments
          });

          setAssessmentData(processedAssessments);
        }

        setError(null);
      } catch (err) {
        console.error('Assessment Error:', err.response?.data?.error || err.message);
      } finally {
        setLoading(prev => ({ ...prev, assessments: false }));
      }
    };

    fetchAssessmentData();
  }, [studentId]);

  const calculatePercentage = (value, total) => {
    return total > 0 ? Math.round((value / total) * 100) : 0;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No date available';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleShowProject = (project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="card text-white mb-4" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="card-body text-center py-3">
          <h1 className="card-title mb-1">
            <i className="bi bi-speedometer2 me-2"></i>
            Student Dashboard
          </h1>
          <p className="card-text opacity-75 mb-0">Track your academic progress</p>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="alert alert-danger mb-4">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {error}
        </div>
      )}

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        {/* Attendance Card */}
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-header bg-info text-white">
              <h5 className="card-title mb-0">
                <i className="bi bi-calendar-check me-2"></i>
                Attendance
              </h5>
            </div>
            <div className="card-body">
              {loading.attendance ? (
                <div className="text-center py-4">
                  <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : attendanceData ? (
                <>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="mb-0">
                      {monthData.presentDays}<small className="text-muted fs-6">/{monthData.totalDays}</small>
                    </h2>
                    <span className="badge bg-info">
                      {calculatePercentage(monthData.presentDays, monthData.totalDays)}%
                    </span>
                  </div>

                  <div className="progress mb-3" style={{ height: '10px' }}>
                    <div
                      className="progress-bar bg-info"
                      style={{ width: `${calculatePercentage(monthData.presentDays, monthData.totalDays)}%` }}>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Present: {monthData.presentDays}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Grooming: {monthData.groomingPresent}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-x-circle-fill text-danger me-2"></i>
                        <span>Absent: {monthData.absentDays}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-x-circle-fill text-danger me-2"></i>
                        <span>Grooming: {monthData.groomingAbsent}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-muted small">
                    <i className="bi bi-calendar me-1"></i>
                    {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </div>
                </>
              ) : (
                <div className="text-center text-muted py-3">
                  <i className="bi bi-calendar-x fs-1"></i>
                  <p className="mt-2">No attendance data</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Projects Card */}
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-header bg-success text-white">
              <h5 className="card-title mb-0">
                <i className="bi bi-file-earmark-check me-2"></i>
                Projects
              </h5>
            </div>
            <div className="card-body">
              {loading.projects ? (
                <div className="text-center py-4">
                  <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : projectData ? (
                <>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="mb-0">
                      {projectStats.submitted}<small className="text-muted fs-6">/{projectStats.total}</small>
                    </h2>
                    <span className="badge bg-success">
                      {calculatePercentage(projectStats.submitted, projectStats.total)}%
                    </span>
                  </div>

                  <div className="progress mb-3" style={{ height: '10px' }}>
                    <div
                      className="progress-bar bg-success"
                      style={{ width: `${calculatePercentage(projectStats.submitted, projectStats.total)}%` }}>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Submitted: {projectStats.submitted}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-clock-fill text-warning me-2"></i>
                        <span>Pending: {projectStats.pending}</span>
                      </div>
                    </div>
                  </div>

                  {projectData.length > 0 && (
                    <div className="mb-3">
                      <h6 className="text-muted mb-2">Recent Project:</h6>
                      <div className="card bg-light">
                        <div className="card-body p-3">
                          <h6 className="card-title mb-1">{projectData[0].title || 'Untitled Project'}</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className={`badge ${projectData[0].status === 'submitted' ? 'bg-success' : 'bg-warning'}`}>
                              {projectData[0].status}
                            </span>
                            <small className="text-muted">
                              {formatDate(projectData[0].submittedAt)}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    className="btn btn-outline-success w-100"
                    onClick={() => setShowProjectModal(true)}
                  >
                    View All Projects
                  </button>
                </>
              ) : (
                <div className="text-center text-muted py-3">
                  <i className="bi bi-file-earmark-x fs-1"></i>
                  <p className="mt-2">No project data</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Assessments Card */}
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-header bg-warning text-dark">
              <h5 className="card-title mb-0">
                <i className="bi bi-journal-check me-2"></i>
                Assessments
              </h5>
            </div>
            <div className="card-body">
              {loading.assessments ? (
                <div className="text-center py-4">
                  <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : assessmentData ? (
                <>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="mb-0">
                      {assessmentStats.averageScore}<small className="text-muted fs-6">%</small>
                    </h2>
                    <span className="badge bg-warning text-dark">
                      {assessmentStats.totalMarks}/{assessmentStats.totalPossible}
                    </span>
                  </div>

                  <div className="progress mb-3" style={{ height: '10px' }}>
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: `${assessmentStats.averageScore}%` }}>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h6 className="text-muted mb-2">Recent Assessments:</h6>
                    <div className="list-group">
                      {assessmentData.slice(0, 2).map((assessment, index) => (
                        <div key={index} className="list-group-item list-group-item-action">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-1">{assessment.topic}</h6>
                            <span className="badge bg-warning text-dark">
                              {assessment.marks}/{assessment.totalMarks}
                            </span>
                          </div>
                          <div className="d-flex justify-content-between small">
                            <span>{assessment.percentage}%</span>
                            <span className="text-muted">{formatDate(assessment.submittedAt)}</span>
                          </div>
                          <div className="progress mt-2" style={{ height: '5px' }}>
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: `${assessment.percentage}%` }}>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className="btn btn-outline-warning w-100"
                    onClick={() => setShowAssessmentModal(true)}
                  >
                    View All Assessments
                  </button>
                </>
              ) : (
                <div className="text-center text-muted py-3">
                  <i className="bi bi-journal-x fs-1"></i>
                  <p className="mt-2">No assessment data</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {projectData && (
        <div className={`modal ${showProjectModal ? 'show d-block' : 'd-none'}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">
                  <i className="bi bi-file-earmark-text me-2"></i>
                  Project Details
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowProjectModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {projectData.map((project, index) => (
                  <div key={index} className="mb-4 pb-3 border-bottom">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h4>{project.title || 'Untitled Project'}</h4>
                        <span className={`badge ${project.status === 'submitted' ? 'bg-success' : 'bg-warning'} mb-2`}>
                          {project.status}
                        </span>
                      </div>
                      <small className="text-muted">
                        {formatDate(project.submittedAt)}
                      </small>
                    </div>

                    <div className="mb-3">
                      <h6>Description</h6>
                      <p className="text-muted">
                        {project.description || 'No description provided'}
                      </p>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <h6 className="card-title">
                              <i className="bi bi-github me-2"></i>
                              GitHub Repository
                            </h6>
                            {project.githubLink ? (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-dark btn-sm mt-2"
                              >
                                View Repository
                              </a>
                            ) : (
                              <p className="text-muted mb-0">Not provided</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <h6 className="card-title">
                              <i className="bi bi-link-45deg me-2"></i>
                              Live Demo
                            </h6>
                            {project.liveLink ? (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-primary btn-sm mt-2"
                              >
                                View Live Demo
                              </a>
                            ) : (
                              <p className="text-muted mb-0">Not provided</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {project.feedback && (
                      <div className="card bg-light">
                        <div className="card-body">
                          <h6 className="card-title">
                            <i className="bi bi-chat-left-text me-2"></i>
                            Instructor Feedback
                          </h6>
                          <p className="mb-0">{project.feedback}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowProjectModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Assessment Details Modal */}
      {assessmentData && (
        <div className={`modal ${showAssessmentModal ? 'show d-block' : 'd-none'}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-warning text-dark">
                <h5 className="modal-title">
                  <i className="bi bi-journal-text me-2"></i>
                  Assessment Results
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowAssessmentModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card mb-4">
                      <div className="card-body text-center">
                        <h5 className="card-title">Overall Performance</h5>
                        <div className="display-4 text-warning mb-2">
                          {assessmentStats.averageScore}%
                        </div>
                        <div className="progress mb-3" style={{ height: '10px' }}>
                          <div
                            className="progress-bar bg-warning"
                            style={{ width: `${assessmentStats.averageScore}%` }}>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <h6 className="text-success">
                              <i className="bi bi-check-circle-fill me-1"></i>
                              {assessmentStats.totalMarks}
                            </h6>
                            <small className="text-muted">Correct</small>
                          </div>
                          <div>
                            <h6 className="text-secondary">
                              <i className="bi bi-question-circle-fill me-1"></i>
                              {assessmentStats.totalPossible}
                            </h6>
                            <small className="text-muted">Total</small>
                          </div>
                          <div>
                            <h6>
                              <i className="bi bi-collection-fill me-1"></i>
                              {assessmentStats.assessmentsCount}
                            </h6>
                            <small className="text-muted">Assessments</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5 className="mb-3">Detailed Results</h5>
                    <div className="list-group">
                      {assessmentData.map((assessment, index) => (
                        <div key={index} className="list-group-item mb-2">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="mb-0">{assessment.topic}</h6>
                            <span className="badge bg-warning text-dark">
                              {assessment.marks}/{assessment.totalMarks}
                            </span>
                          </div>
                          <div className="d-flex justify-content-between small mb-2">
                            <span>{assessment.percentage}%</span>
                            <span className="text-muted">{formatDate(assessment.submittedAt)}</span>
                          </div>
                          <div className="progress" style={{ height: '8px' }}>
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: `${assessment.percentage}%` }}>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowAssessmentModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;