import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function CourseView() {
  const { courseId } = useParams();
  const [syllabus, setSyllabus] = useState(null);
  const [courseContent, setCourseContent] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedProjectCategories, setExpandedProjectCategories] = useState({});
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

  const toggleProjectCategory = (category) => {
    setExpandedProjectCategories(prev => ({
      ...prev,
      [category]: !prev[category]
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
      default: return 'bi-file-earmark-code';
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading course materials...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100">
      <div className="container-fluid">
        <div className="row g-0">
          {/* Sidebar */}
          <div className="col-lg-3 p-3 bg-white border-end">
            <div className="sticky-top pt-3" style={{ top: '1rem' }}>
              <h4 className="mb-4 d-flex align-items-center">
                <i className="bi bi-journal-bookmark-fill text-primary me-2"></i>
                Course Materials
              </h4>
              
              {/* Syllabus Section */}
              {syllabus && (
                <div className="mb-4">
                  <h6 className="d-flex align-items-center text-uppercase small fw-bold text-muted mb-3">
                    <i className="bi bi-file-earmark-text me-2"></i>
                    Syllabus
                  </h6>
                  <button
                    className={`btn w-100 text-start rounded-pill ${selectedItem?.type === 'syllabus' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setSelectedItem({ type: 'syllabus', data: syllabus })}
                  >
                    <i className="bi bi-file-earmark-pdf me-2"></i>
                    Course Syllabus
                  </button>
                </div>
              )}

              {/* Course Content Section */}
              <div className="mb-4">
                <h6 className="d-flex align-items-center text-uppercase small fw-bold text-muted mb-3">
                  <i className="bi bi-collection-play-fill me-2"></i>
                  Learning Materials
                </h6>
                {courseContent.length > 0 ? (
                  <div className="list-group list-group-flush">
                    {courseContent.map(content => (
                      <button
                        key={content._id}
                        className={`list-group-item list-group-item-action border-0 rounded mb-2 ${selectedItem?._id === content._id ? 'bg-primary text-white' : 'bg-light'}`}
                        onClick={() => setSelectedItem({ type: 'content', data: content })}
                      >
                        <div className="d-flex align-items-center">
                          <i className={`bi ${getFileIcon(content.fileType)} me-2`}></i>
                          <div>
                            <div className="fw-bold">{content.title}</div>
                            {content.day && <small className="text-muted">Day {content.day}</small>}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-muted bg-light rounded">
                    <i className="bi bi-folder-x fs-1"></i>
                    <p className="mt-2">No course content found</p>
                  </div>
                )}
              </div>

              {/* Assessments Section */}
              <div className="mb-4">
                <h6 className="d-flex align-items-center text-uppercase small fw-bold text-muted mb-3">
                  <i className="bi bi-clipboard-check-fill me-2"></i>
                  Assessments
                </h6>
                {assessments.length > 0 ? (
                  <div className="list-group list-group-flush">
                    {assessments.map(assessment => (
                      <button
                        key={assessment._id}
                        className="list-group-item list-group-item-action border-0 rounded mb-2 bg-light"
                        onClick={() => handleAssessmentClick(assessment._id)}
                      >
                        <div className="d-flex align-items-center">
                          <i className="bi bi-file-earmark-text text-success me-2"></i>
                          <div>
                            <div className="fw-bold">{assessment.topic}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-3 text-muted bg-light rounded">
                    <i className="bi bi-clipboard-x fs-4"></i>
                    <p className="mt-2 small">No assessments available</p>
                  </div>
                )}
              </div>

              {/* Projects Section */}
              <div className="mb-4">
                <h6 className="d-flex align-items-center text-uppercase small fw-bold text-muted mb-3">
                  <i className="bi bi-kanban-fill me-2"></i>
                  Projects
                </h6>
                {projects.length > 0 ? (
                  <div className="accordion" id="projectsAccordion">
                    {Array.from(new Set(projects.map(p => p.category))).map(category => (
                      <div key={category} className="accordion-item border-0 mb-2">
                        <h2 className="accordion-header">
                          <button 
                            className={`accordion-button ${expandedProjectCategories[category] ? '' : 'collapsed'} bg-light`} 
                            type="button"
                            onClick={() => toggleProjectCategory(category)}
                          >
                            <i className={`bi ${getCategoryIcon(category)} me-2`}></i>
                            {category}
                          </button>
                        </h2>
                        <div 
                          id={`collapse-${category}`} 
                          className={`accordion-collapse collapse ${expandedProjectCategories[category] ? 'show' : ''}`}
                        >
                          <div className="accordion-body p-1">
                            {projects.filter(p => p.category === category).map(project => (
                              <button
                                key={project._id}
                                className="btn btn-sm btn-outline-secondary w-100 text-start mb-2"
                                onClick={() => handleProjectClick(project._id)}
                              >
                                <i className="bi bi-file-earmark-code me-2"></i>
                                {project.title}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-3 text-muted bg-light rounded">
                    <i className="bi bi-kanban fs-4"></i>
                    <p className="mt-2 small">No projects available</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Viewer */}
          <div className="col-lg-9 p-4">
            {selectedItem ? (
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-white border-bottom">
                  <h5 className="mb-0 d-flex align-items-center">
                    <i className={`bi ${selectedItem.type === 'syllabus' ? 'bi-file-earmark-text' : 'bi-journal-text'} me-2 text-primary`}></i>
                    {selectedItem.type === 'syllabus' ? 'Course Syllabus' : selectedItem.data.title}
                  </h5>
                </div>
                <div className="card-body">
                  {selectedItem.data.fileType === 'pdf' ? (
                    <div style={{ height: '75vh', width: '100%' }}>
                      <iframe
                        src={`https://docs.google.com/viewer?url=${encodeURIComponent(selectedItem.data.fileUrl)}&embedded=true`}
                        style={{
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          borderRadius: '0.25rem'
                        }}
                        title="PDF Viewer"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="d-flex flex-column align-items-center justify-content-center py-5" style={{ minHeight: '70vh' }}>
                      <i className={`bi ${getFileIcon(selectedItem.data.fileType)} fs-1 mb-3`}></i>
                      <h5 className="mb-3">{selectedItem.data.title}</h5>
                      <p className="text-muted mb-4">
                        This content is a {selectedItem.data.fileType.toUpperCase()} file
                      </p>
                      <a
                        href={selectedItem.data.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                      >
                        <i className="bi bi-download me-2"></i>Download File
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="card border-0 shadow-sm h-100 bg-light">
                <div className="card-body d-flex flex-column align-items-center justify-content-center py-5">
                  <i className="bi bi-journal-text display-4 text-muted mb-3"></i>
                  <h4 className="text-muted mb-3">Welcome to Your Course</h4>
                  <p className="text-muted text-center mb-4">
                    Select an item from the sidebar to view content.<br />
                    Browse through syllabus, course materials, assessments, and projects.
                  </p>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => setSelectedItem({ type: 'syllabus', data: syllabus })}
                  >
                    <i className="bi bi-file-earmark-text me-2"></i>
                    View Syllabus
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}