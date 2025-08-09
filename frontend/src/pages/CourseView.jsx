import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function CourseView() {
  const { courseId } = useParams();
  const [syllabus, setSyllabus] = useState(null);
  const [courseContent, setCourseContent] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    syllabus: true,
    materials: true,
    assessments: true,
    projects: true
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [syllabusRes, contentRes, assessmentsRes, projectsRes] = await Promise.all([
          axios.get(`https://student-tracking-e3tk.onrender.com/api/syllabus/${courseId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          }),
          axios.get(`https://student-tracking-e3tk.onrender.com/api/admin/course-content/${courseId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          }),
          axios.get(`https://student-tracking-e3tk.onrender.com/api/assessments/${courseId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          }),
          axios.get(`https://student-tracking-e3tk.onrender.com/api/projects/course/${courseId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          })
        ]);

        setSyllabus(syllabusRes.data);
        setCourseContent(contentRes.data || []);
        setAssessments(assessmentsRes.data || []);
        setProjects(projectsRes.data || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    if (courseId) fetchData();
  }, [courseId]);

  const handleAssessmentClick = (assessmentId) => {
    navigate(`/student/assessment/${assessmentId}`);
  };

  const handleProjectClick = (projectId) => {
    navigate(`/student/project/${projectId}`);
  };

  const handleContentClick = (fileUrl) => {
    window.open(`https://docs.google.com/viewer?url=${encodeURIComponent(fileUrl)}`, '_blank');
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getFileIcon = (fileType) => {
    switch(fileType) {
      case 'pdf': return 'bi-file-earmark-pdf text-danger';
      case 'video': return 'bi-file-earmark-play-fill text-primary';
      case 'zip': return 'bi-file-earmark-zip-fill text-secondary';
      case 'image': return 'bi-file-image text-success';
      default: return 'bi-file-earmark-text text-info';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category.toLowerCase()) {
      case 'html-css': return 'bi-filetype-html text-orange';
      case 'javascript': return 'bi-filetype-js text-warning';
      case 'react': return 'bi-filetype-jsx text-info';
      case 'node': return 'bi-filetype-json text-success';
      case 'python': return 'bi-filetype-py text-primary';
      case 'database': return 'bi-database text-secondary';
      default: return 'bi-file-earmark-code';
    }
  };

  const getCategoryBackground = (category) => {
    switch(category.toLowerCase()) {
      case 'html-css': return 'bg-orange-light';
      case 'javascript': return 'bg-warning-light';
      case 'react': return 'bg-info-light';
      case 'node': return 'bg-success-light';
      case 'python': return 'bg-primary-light';
      case 'database': return 'bg-secondary-light';
      default: return 'bg-light';
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-gradient-primary">
        <div className="text-center text-white">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading course materials...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="course-view-container">
      {/* Hero Section */}
      <div className="hero-section bg-gradient-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-5 fw-bold mb-3">
                <i className="bi bi-journal-bookmark-fill me-3"></i>
                Course Materials
              </h1>
              <p className="lead mb-0">Explore all learning resources, assessments, and projects for your course</p>
            </div>
            <div className="col-md-4 text-md-end">
              <div className="hero-icon">
                <i className="bi bi-book-half"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            {/* Syllabus Section */}
            <div className="card shadow-lg mb-4 border-0">
              <div 
                className="card-header bg-white d-flex justify-content-between align-items-center cursor-pointer section-header"
                onClick={() => toggleSection('syllabus')}
              >
                <h5 className="mb-0 d-flex align-items-center">
                  <i className="bi bi-file-earmark-text me-3 text-primary"></i>
                  Syllabus
                </h5>
                <i className={`bi fs-4 transition-all ${expandedSections.syllabus ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
              </div>
              {expandedSections.syllabus && (
                <div className="card-body bg-light-gradient">
                  {syllabus ? (
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-hover-scale text-start py-3"
                        onClick={() => handleContentClick(syllabus.fileUrl)}
                      >
                        <i className="bi bi-file-earmark-pdf me-2 fs-4"></i>
                        <span className="fw-bold">{syllabus.title || 'Course Syllabus'}</span>
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-4 text-muted empty-state">
                      <i className="bi bi-file-earmark-x fs-1"></i>
                      <p className="mt-2">No syllabus available</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Course Content Section */}
            <div className="card shadow-lg mb-4 border-0">
              <div 
                className="card-header bg-white d-flex justify-content-between align-items-center cursor-pointer section-header"
                onClick={() => toggleSection('materials')}
              >
                <h5 className="mb-0 d-flex align-items-center">
                  <i className="bi bi-collection-play-fill me-3 text-primary"></i>
                  Learning Materials
                </h5>
                <i className={`bi fs-4 transition-all ${expandedSections.materials ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
              </div>
              {expandedSections.materials && (
                <div className="card-body bg-light-gradient">
                  {courseContent.length > 0 ? (
                    <div className="row g-4">
                      {courseContent.map(content => (
                        <div key={content._id} className="col-md-6 col-lg-4">
                          <div 
                            className="card h-100 cursor-pointer hover-scale shadow-sm border-0"
                            onClick={() => handleContentClick(content.fileUrl)}
                          >
                            <div className="card-body">
                              <div className="d-flex align-items-start">
                                <i className={`bi ${getFileIcon(content.fileType)} fs-2 me-3`}></i>
                                <div>
                                  <h6 className="card-title mb-1 fw-bold">{content.title}</h6>
                                  <span className={`badge bg-secondary`}>
                                    {content.fileType.toUpperCase()}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-5 text-muted empty-state">
                      <i className="bi bi-folder-x fs-1"></i>
                      <p className="mt-2">No course content found</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Assessments Section */}
            <div className="card shadow-lg mb-4 border-0">
              <div 
                className="card-header bg-white d-flex justify-content-between align-items-center cursor-pointer section-header"
                onClick={() => toggleSection('assessments')}
              >
                <h5 className="mb-0 d-flex align-items-center">
                  <i className="bi bi-clipboard-check-fill me-3 text-primary"></i>
                  Assessments
                </h5>
                <i className={`bi fs-4 transition-all ${expandedSections.assessments ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
              </div>
              {expandedSections.assessments && (
                <div className="card-body bg-light-gradient">
                  {assessments.length > 0 ? (
                    <div className="row g-4">
                      {assessments.map(assessment => (
                        <div key={assessment._id} className="col-md-6 col-lg-4">
                          <div 
                            className="card h-100 cursor-pointer hover-scale shadow-sm border-0"
                            onClick={() => handleAssessmentClick(assessment._id)}
                          >
                            <div className="card-body">
                              <div className="d-flex align-items-start">
                                <i className="bi bi-file-earmark-text text-success fs-2 me-3"></i>
                                <div>
                                  <h6 className="card-title mb-1 fw-bold">{assessment.topic}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-5 text-muted empty-state">
                      <i className="bi bi-clipboard-x fs-1"></i>
                      <p className="mt-2">No assessments available</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Projects Section */}
            <div className="card shadow-lg mb-4 border-0">
              <div 
                className="card-header bg-white d-flex justify-content-between align-items-center cursor-pointer section-header"
                onClick={() => toggleSection('projects')}
              >
                <h5 className="mb-0 d-flex align-items-center">
                  <i className="bi bi-kanban-fill me-3 text-primary"></i>
                  Projects
                </h5>
                <i className={`bi fs-4 transition-all ${expandedSections.projects ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
              </div>
              {expandedSections.projects && (
                <div className="card-body bg-light-gradient">
                  {projects.length > 0 ? (
                    <div className="row g-4">
                      {Array.from(new Set(projects.map(p => p.category))).map(category => (
                        <div key={category} className="col-12">
                          <div className="mb-4">
                            <div className={`p-3 rounded ${getCategoryBackground(category)} mb-3`}>
                              <h6 className="mb-0 d-flex align-items-center">
                                <i className={`bi ${getCategoryIcon(category)} me-2 fs-4`}></i>
                                {category}
                              </h6>
                            </div>
                            <div className="row g-4">
                              {projects.filter(p => p.category === category).map(project => (
                                <div key={project._id} className="col-md-6 col-lg-4">
                                  <div 
                                    className="card h-100 cursor-pointer hover-scale shadow-sm border-0"
                                    onClick={() => handleProjectClick(project._id)}
                                  >
                                    <div className="card-body">
                                      <div className="d-flex align-items-start">
                                        <i className="bi bi-file-earmark-code text-info fs-2 me-3"></i>
                                        <div>
                                          <h6 className="card-title mb-1 fw-bold">{project.title}</h6>
                                          <p className="card-text small text-muted">
                                            <span className="badge bg-primary-light text-primary">
                                              Due: {project.duration}
                                            </span>
                                          </p>
                                          <div className="d-flex flex-wrap gap-2 mt-2">
                                            {project.tags && project.tags.map(tag => (
                                              <span key={tag} className="badge bg-light text-dark">
                                                {tag}
                                              </span>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-5 text-muted empty-state">
                      <i className="bi bi-kanban fs-1"></i>
                      <p className="mt-2">No projects available</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .course-view-container {
          background-color: #f8f9fa;
          min-height: 100vh;
        }
        
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin-bottom: 2rem;
          border-radius: 0 0 20px 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .hero-icon {
          font-size: 5rem;
          opacity: 0.2;
          transition: all 0.3s ease;
        }
        
        .hero-icon:hover {
          opacity: 0.4;
          transform: scale(1.05);
        }
        
        .section-header {
          transition: all 0.3s ease;
          border-radius: 10px !important;
        }
        
        .section-header:hover {
          background-color: #f8f9fa !important;
        }
        
        .hover-scale {
          transition: all 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        
        .btn-hover-scale {
          transition: all 0.3s ease;
        }
        
        .btn-hover-scale:hover {
          transform: scale(1.02);
        }
        
        .empty-state {
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .empty-state:hover {
          opacity: 1;
        }
        
        .bg-orange-light {
          background-color: rgba(253, 126, 20, 0.1);
        }
        
        .text-orange {
          color: #fd7e14;
        }
        
        .bg-primary-light {
          background-color: rgba(13, 110, 253, 0.1);
        }
        
        .bg-warning-light {
          background-color: rgba(255, 193, 7, 0.1);
        }
        
        .bg-info-light {
          background-color: rgba(13, 202, 240, 0.1);
        }
        
        .bg-success-light {
          background-color: rgba(25, 135, 84, 0.1);
        }
        
        .bg-secondary-light {
          background-color: rgba(108, 117, 125, 0.1);
        }
        
        .bg-danger-light {
          background-color: rgba(220, 53, 69, 0.1);
        }
        
        .bg-light-gradient {
          background: linear-gradient(to bottom, #ffffff, #f8f9fa);
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}