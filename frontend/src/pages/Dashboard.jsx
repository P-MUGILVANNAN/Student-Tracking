import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Dashboard = () => {
  // State initialization
  const [attendanceData, setAttendanceData] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState({
    attendance: true,
    projects: true
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

  const [studentId, setStudentId] = useState(null);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // console.log(decoded);
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
        const response = await axios.get(`http://localhost:5000/api/attendance/student/${studentId}`, {
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
        const response = await axios.get(`http://localhost:5000/api/project-submissions/student/${studentId}`, {
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

  const calculatePercentage = (value, total) => {
    return total > 0 ? Math.round((value / total) * 100) : 0;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No upcoming deadlines';
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleShowProject = (project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  return (
    <div className="dashboard-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem 0'
    }}>
      <div className="container">
        {/* Header */}
        <div className="card border-0 shadow-lg mb-5" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '15px',
          overflow: 'hidden'
        }}>
          <div className="card-body text-center py-4">
            <h2 className="text-white mb-0">
              <i className="bi bi-speedometer2 me-2"></i>
              Student Progress Dashboard
            </h2>
            <p className="text-white-50 mb-0">Track your learning journey</p>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="alert alert-danger mb-4">
            <i className="bi bi-exclamation-triangle me-2"></i>
            {error}
          </div>
        )}

        {/* Progress Cards */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Attendance Tracking */}
          <div className="col">
            <div className="card border-0 shadow-sm h-100" style={{
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
            }}>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-info bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-calendar-check text-info fs-4"></i>
                  </div>
                  <h5 className="card-title mb-0 text-dark">Attendance Tracking</h5>
                </div>

                {loading.attendance ? (
                  <div className="text-center py-3">
                    <div className="spinner-border text-info" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : attendanceData ? (
                  <>
                    <h2 className="text-info mb-3">
                      {monthData.presentDays}/{monthData.totalDays}
                      <small className="text-muted fs-6 ms-2">
                        ({calculatePercentage(monthData.presentDays, monthData.totalDays)}%)
                      </small>
                    </h2>
                    <div className="progress mb-3" style={{ height: '8px' }}>
                      <div
                        className="progress-bar bg-info"
                        style={{
                          width: `${calculatePercentage(monthData.presentDays, monthData.totalDays)}%`
                        }}
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <small className="text-muted">
                        <i className="bi bi-check-circle-fill text-success me-1"></i>
                        {monthData.presentDays} present
                      </small>
                      <small className="text-muted">
                        <i className="bi bi-x-circle-fill text-danger me-1"></i>
                        {monthData.absentDays} absent
                      </small>
                    </div>
                    <div className="mb-2">
                      <span className="badge bg-success bg-opacity-10 text-success me-2">
                        <i className="bi bi-person-check me-1"></i>
                        Grooming Present: {monthData.groomingPresent}
                      </span>
                      <span className="badge bg-danger bg-opacity-10 text-danger">
                        <i className="bi bi-person-x me-1"></i>
                        Grooming Absent: {monthData.groomingAbsent}
                      </span>
                    </div>
                    <small className="text-muted d-block">
                      <i className="bi bi-calendar me-2"></i>
                      Current month: {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </small>
                  </>
                ) : (
                  <div className="text-muted">No attendance data available</div>
                )}
              </div>
            </div>
          </div>

          {/* Project Submission */}
          <div className="col">
            <div className="card border-0 shadow-sm h-100" style={{
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
            }}>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-file-earmark-check text-success fs-4"></i>
                  </div>
                  <h5 className="card-title mb-0 text-dark">Project Submission</h5>
                </div>

                {loading.projects ? (
                  <div className="text-center py-3">
                    <div className="spinner-border text-success" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : projectData ? (
                  <>
                    <h2 className="text-success mb-3">
                      {projectStats.submitted}/{projectStats.total}
                      <small className="text-muted fs-6 ms-2">
                        ({calculatePercentage(projectStats.submitted, projectStats.total)}%)
                      </small>
                    </h2>
                    <div className="progress mb-3" style={{ height: '8px' }}>
                      <div
                        className="progress-bar bg-success"
                        style={{ width: `${calculatePercentage(projectStats.submitted, projectStats.total)}%` }}
                      ></div>
                    </div>
                    <div className="mb-2">
                      <span className="badge bg-success bg-opacity-10 text-success me-2">
                        <i className="bi bi-check-circle me-1"></i>
                        {projectStats.submitted} submitted
                      </span>
                      <span className="badge bg-warning bg-opacity-10 text-warning">
                        <i className="bi bi-clock me-1"></i>
                        {projectStats.pending} pending
                      </span>
                    </div>
                    <div>
                      <button
                        className="btn btn-success btn-sm mt-3"
                        onClick={() => handleShowProject(projectData[0])} // Show first project by default
                      >
                        View Projects
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-muted">No project data available</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Modal */}
        {projectData && (
          <div className={`modal fade ${showProjectModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: showProjectModal ? 'rgba(0,0,0,0.5)' : '' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content border-0 shadow">
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
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-success">{project.title || 'Untitled Project'}</h4>
                        <span className={`badge ${project.status === 'submitted' ? 'bg-success' : 'bg-warning'}`}>
                          {project.status === 'submitted' ? (
                            <i className="bi bi-check-circle-fill me-1"></i>
                          ) : (
                            <i className="bi bi-clock-fill me-1"></i>
                          )}
                          {project.status}
                        </span>
                      </div>

                      <p className="text-muted mb-3">
                        <i className="bi bi-calendar me-2"></i>
                        Submitted on: {formatDate(project.submittedAt)}
                      </p>

                      <div className="mb-3">
                        <h6 className="text-dark">Description:</h6>
                        <p className="text-muted">
                          {project.description || 'No description provided'}
                        </p>
                      </div>

                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="card bg-light border-0 h-100">
                            <div className="card-body">
                              <h6 className="card-title text-dark">
                                <i className="bi bi-github me-2"></i>
                                GitHub Repository
                              </h6>
                              {project.githubLink ? (
                                <a
                                  href={project.githubLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-outline-dark btn-sm"
                                >
                                  View on GitHub
                                </a>
                              ) : (
                                <p className="text-muted mb-0">Not provided</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card bg-light border-0 h-100">
                            <div className="card-body">
                              <h6 className="card-title text-dark">
                                <i className="bi bi-link-45deg me-2"></i>
                                Live Demo
                              </h6>
                              {project.liveLink ? (
                                <a
                                  href={project.liveLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-outline-primary btn-sm"
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
                        <div className="mt-3 p-3 bg-light rounded">
                          <h6 className="text-dark">
                            <i className="bi bi-chat-left-text me-2"></i>
                            Instructor Feedback
                          </h6>
                          <p className="mb-0">{project.feedback}</p>
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
      </div>
    </div>
  );
};

export default Dashboard;