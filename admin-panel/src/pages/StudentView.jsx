import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function StudentView() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [projectSubmissions, setProjectSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch student data
        const studentRes = await axios.get(`https://student-tracking-e3tk.onrender.com/api/admin/student/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        // Fetch project submissions separately
        const projectsRes = await axios.get(`https://student-tracking-e3tk.onrender.com/api/project-submissions/student/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        setStudent(studentRes.data);
        setProjectSubmissions(projectsRes.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="ms-3 text-light">Loading student details...</span>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <div className="text-center p-5 text-light">
          <i className="bi bi-exclamation-triangle fs-1 text-warning"></i>
          <h3 className="mt-3">Student not found</h3>
          <button className="btn btn-info mt-3" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      {selectedProject && (
        <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark text-light">
              <div className="modal-header border-secondary">
                <h5 className="modal-title">
                  <i className="bi bi-kanban me-2"></i>
                  {selectedProject.project?.title || selectedProject.title}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <h6 className="text-info">Category</h6>
                    <p>{selectedProject.project?.category ?
                      selectedProject.project.category.replace('-', ' ') :
                      'N/A'}</p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-info">Status</h6>
                    <span className={`badge bg-${selectedProject.status === 'graded' ? 'success' : 'warning'}`}>
                      {selectedProject.status || 'submitted'}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="text-info">Project Description</h6>
                  <p>{selectedProject.description || 'No description provided'}</p>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6">
                    <h6 className="text-info">GitHub Repository</h6>
                    {selectedProject.githubLink ? (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-info"
                      >
                        <i className="bi bi-github me-1"></i> View on GitHub
                      </a>
                    ) : (
                      <span className="text-muted">Not provided</span>
                    )}
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-info">Live Demo</h6>
                    {selectedProject.liveLink ? (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-success"
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i> View Live Demo
                      </a>
                    ) : (
                      <span className="text-muted">Not provided</span>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <h6 className="text-info">Submission Details</h6>
                  <div className="d-flex justify-content-between">
                    <span>Submitted: {new Date(selectedProject.submittedAt).toLocaleString()}</span>
                    <span>Last Updated: {new Date(selectedProject.updatedAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-secondary">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-lg-4">
          {/* Profile Card */}
          <div className="card border-0 shadow-sm mb-4 bg-dark text-light">
            <div className="card-body text-center">
              <div className="d-flex justify-content-center mb-3">
                <div
                  className="rounded-circle bg-info d-flex align-items-center justify-content-center"
                  style={{ width: '100px', height: '100px' }}
                >
                  <i className="bi bi-person-fill fs-1 text-white"></i>
                </div>
              </div>
              <h3 className="mb-1">{student.name}</h3>
              <p className="text-muted mb-3">{student.email}</p>

              <div className="d-flex justify-content-center gap-2 mb-3">
                <span className="badge bg-info px-3 py-2">
                  <i className="bi bi-book me-1"></i> {student.courses?.length || 0} Courses
                </span>
                <span className="badge bg-secondary px-3 py-2">
                  <i className="bi bi-file-text me-1"></i> {student.submissions?.length || 0} Submissions
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="card border-0 shadow-sm mb-4 bg-dark text-light">
            <div className="card-body">
              <h5 className="mb-3"><i className="bi bi-info-circle me-2 text-info"></i>Contact Information</h5>
              <div className="mb-2">
                <div className="text-info small">Email</div>
                <div>{student.email}</div>
              </div>
              <div className="mb-2">
                <div className="text-info small">Phone</div>
                <div>{student.phone || 'N/A'}</div>
              </div>
              <div className="mb-2">
                <div className="text-info small">Trainer</div>
                <div>{student.trainerName || 'Not assigned'}</div>
              </div>
              <hr />
              <div>
                <div className="text-info small">Institution</div>
                <div>{student.institution?.name || 'N/A'}</div>
                <div className="text-info small mt-1">Address</div>
                <div>{student.institution?.address || 'N/A'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          {/* Enrolled Courses */}
          <div className="card border-0 shadow-sm mb-4 bg-dark text-light">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0"><i className="bi bi-book me-2 text-info"></i>Enrolled Courses</h5>
                <span className="badge bg-dark px-3 py-2 border border-info">
                  {student.courses?.length || 0} courses
                </span>
              </div>

              {student.courses?.length > 0 ? (
                <div className="row">
                  {student.courses.map((course, i) => (
                    <div className="col-md-6 mb-3" key={i}>
                      <div className="p-3 bg-dark-light rounded">
                        <div className="d-flex justify-content-between">
                          <h6 className="mb-1">{course.title}</h6>
                          <span className="badge bg-info text-white">{course.duration}</span>
                        </div>
                        <div className="progress mt-2" style={{ height: '5px' }}>
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: `${Math.random() * 100}%` }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-muted">
                  <i className="bi bi-book fs-1"></i>
                  <p className="mt-2">No courses enrolled</p>
                </div>
              )}
            </div>
          </div>

          {/* Assessment Submissions */}
          <div className="card border-0 shadow-sm bg-dark text-light">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0"><i className="bi bi-file-text me-2 text-info"></i>Assessment Submissions</h5>
                <span className="badge bg-dark px-3 py-2 border border-info">
                  {student.submissions?.length || 0} submissions
                </span>
              </div>

              {student.submissions?.length > 0 ? (
                <div className="list-group">
                  {student.submissions.map((submission, idx) => {
                    const correctAnswers = submission.answers.filter(a => a.isCorrect).length;
                    const totalQuestions = submission.answers.length;
                    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

                    return (
                      <div key={idx} className="list-group-item bg-dark-light border-secondary mb-2 rounded">
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="mb-1">
                            {submission.assessmentId?.topic || 'Untitled Assessment'}
                          </h6>
                          <span className={`badge bg-${percentage >= 70 ? 'success' : percentage >= 50 ? 'warning' : 'danger'}`}>
                            {percentage}%
                          </span>
                        </div>
                        <div className="d-flex justify-content-between small text-muted mb-2">
                          <span>Submitted: {new Date(submission.submittedAt).toLocaleString()}</span>
                          <span>{correctAnswers}/{totalQuestions} correct</span>
                        </div>
                        <div className="progress mb-2">
                          <div
                            className={`progress-bar bg-${percentage >= 70 ? 'success' : percentage >= 50 ? 'warning' : 'danger'}`}
                            role="progressbar"
                            style={{ width: `${percentage}%` }}
                            aria-valuenow={percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <button
                          className="btn btn-sm btn-outline-info"
                          onClick={() => navigate(`/admin/assessment/${submission.assessmentId._id}/${id}`)}
                        >
                          <i className="bi bi-eye me-1"></i> View Assessment
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-4 text-muted">
                  <i className="bi bi-file-text fs-1"></i>
                  <p className="mt-2">No assessment submissions found</p>
                </div>
              )}
            </div>
          </div>

          {/* Project Submissions Card */}
          <div className="card border-0 shadow-sm mt-4 bg-dark text-light">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0"><i className="bi bi-kanban me-2 text-info"></i>Project Submissions</h5>
                <span className="badge bg-dark px-3 py-2 border border-info">
                  {projectSubmissions.length || 0} projects
                </span>
              </div>

              {projectSubmissions.length > 0 ? (
                <div className="list-group">
                  {projectSubmissions.map((submission, idx) => (
                    <div key={idx} className="list-group-item bg-dark-light border-secondary mb-2 rounded">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">
                            {submission.project?.title || submission.title || 'Untitled Project'}
                          </h6>
                          <small className="text-muted">
                            Category: {submission.project?.category || 'N/A'}
                          </small>
                        </div>
                        <span className={`badge bg-${submission.status === 'graded' ? 'success' : 'warning'}`}>
                          {submission.status || 'submitted'}
                        </span>
                      </div>
                      <div className="small text-muted mb-2">
                        Submitted: {new Date(submission.submittedAt).toLocaleString()}
                      </div>
                      <div className="d-flex gap-2 flex-wrap">
                        <button
                          className="btn btn-sm btn-outline-info"
                          onClick={() => handleViewProject(submission)}
                        >
                          <i className="bi bi-eye me-1"></i> View Details
                        </button>
                        {submission.githubLink && (
                          <a
                            href={submission.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            <i className="bi bi-github me-1"></i> GitHub
                          </a>
                        )}
                        {submission.liveLink && (
                          <a
                            href={submission.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-success"
                          >
                            <i className="bi bi-box-arrow-up-right me-1"></i> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-muted text-bg-secondary">
                  <i className="bi bi-kanban fs-1"></i>
                  <p className="mt-2">No project submissions found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}