import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';

const ProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submission, setSubmission] = useState({
    title: '',
    githubLink: '',
    liveLink: '',
    description: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/projects/${projectId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setProject(response.data);
        setSubmission(prev => ({ ...prev, title: response.data.title }));
        setLoading(false);
      } catch (err) {
        console.error(err);
        navigate('/student/dashboard');
      }
    };

    fetchProject();
  }, [projectId, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmission(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!submission.githubLink) newErrors.githubLink = 'GitHub link is required';
    if (!submission.description) newErrors.description = 'Description is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post(`http://localhost:5000/api/project-submissions`, {
        projectId, // Add projectId to the request body
        githubLink: submission.githubLink,
        liveLink: submission.liveLink,
        description: submission.description
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Project submitted successfully!');
      navigate('/student/profile');
    } catch (err) {
      console.error(err);
      alert('Failed to submit project. Please try again.');
    }
  };

  if (loading || !project) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Project Details Section */}
      <div className="card shadow-sm mb-5">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">
            <i className="bi bi-kanban me-2"></i>
            {project.title}
          </h2>
        </div>
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-tag-fill text-primary me-2 fs-5"></i>
                <div>
                  <h6 className="mb-0 text-muted">Category</h6>
                  <p className="mb-0 fw-bold">{project.category || 'General'}</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-calendar-check-fill text-primary me-2 fs-5"></i>
                <div>
                  <h6 className="mb-0 text-muted">Due Date</h6>
                  <p className="mb-0 fw-bold">
                    {project.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="text-primary">
              <i className="bi bi-journal-text me-2"></i>
              Project Description
            </h5>
            <div className="border rounded p-3 bg-light">
              {project.description || 'No description provided.'}
            </div>
          </div>

          {project.requirements && (
            <div className="mb-4">
              <h5 className="text-primary">
                <i className="bi bi-list-check me-2"></i>
                Requirements
              </h5>
              <ul className="list-group">
                {project.requirements.split('\n').map((req, index) => (
                  <li key={index} className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Project Submission Form */}
      <div className="card shadow-sm">
        <div className="card-header bg-success text-white">
          <h3 className="mb-0">
            <i className="bi bi-cloud-upload me-2"></i>
            Submit Your Project
          </h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                <i className="bi bi-card-heading me-2"></i>
                Project Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={submission.title}
                onChange={handleChange}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label htmlFor="githubLink" className="form-label">
                <i className="bi bi-github me-2"></i>
                GitHub Repository Link <span className="text-danger">*</span>
              </label>
              <input
                type="url"
                className={`form-control ${errors.githubLink ? 'is-invalid' : ''}`}
                id="githubLink"
                name="githubLink"
                value={submission.githubLink}
                onChange={handleChange}
                placeholder="https://github.com/username/repository"
                required
              />
              {errors.githubLink && (
                <div className="invalid-feedback">{errors.githubLink}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="liveLink" className="form-label">
                <i className="bi bi-link-45deg me-2"></i>
                Live Demo Link (Optional)
              </label>
              <input
                type="url"
                className="form-control"
                id="liveLink"
                name="liveLink"
                value={submission.liveLink}
                onChange={handleChange}
                placeholder="https://your-project-demo.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="form-label">
                <i className="bi bi-chat-square-text me-2"></i>
                Project Description <span className="text-danger">*</span>
              </label>
              <textarea
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                id="description"
                name="description"
                rows="5"
                value={submission.description}
                onChange={handleChange}
                placeholder="Describe your project implementation, features, and any challenges you faced..."
                required
              ></textarea>
              {errors.description && (
                <div className="invalid-feedback">{errors.description}</div>
              )}
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-md-2"
                onClick={() => navigate(-1)}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Back
              </button>
              <button
                type="submit"
                className="btn btn-success"
              >
                <i className="bi bi-cloud-arrow-up me-2"></i>
                Submit Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;