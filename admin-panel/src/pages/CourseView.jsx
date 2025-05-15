import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CourseView = () => {
    const { courseId } = useParams();
    const [syllabus, setSyllabus] = useState(null);
    const [courseContent, setCourseContent] = useState([]);
    const [assessments, setAssessments] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [editFormData, setEditFormData] = useState({
        title: '',
        description: '',
        duration: '',
        maxGroupSize: 1,
        resources: '',
        requirements: '',
        category: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (!courseId) {
            alert('Course ID is missing');
            return;
        }

        const fetchData = async () => {
            try {
                const [syllabusRes, contentRes, assessmentRes, projectsRes] = await Promise.all([
                    axios.get(`https://student-tracking-e3tk.onrender.com/api/syllabus/${courseId}`, {
                        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                    }),
                    axios.get(`https://student-tracking-e3tk.onrender.com/api/admin/course-content/${courseId}`, {
                        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                    }),
                    axios.get(`https://student-tracking-e3tk.onrender.com/api/assessments/${courseId}`, {
                        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                    }),
                    axios.get(`https://student-tracking-e3tk.onrender.com/api/projects/course/${courseId}`, {
                        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                    })
                ]);
                setSyllabus(syllabusRes.data);
                setCourseContent(contentRes.data);
                setAssessments(assessmentRes.data);
                setProjects(projectsRes.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [courseId]);

    const handleViewProject = (project) => {
        setSelectedProject(project);
        setShowViewModal(true);
    };

    const handleEditProject = (project) => {
        setSelectedProject(project);
        setEditFormData({
            title: project.title,
            description: project.description,
            duration: project.duration,
            maxGroupSize: project.maxGroupSize,
            resources: project.resources,
            requirements: project.requirements,
            category: project.category
        });
        setShowEditModal(true);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdateProject = async () => {
        try {
            const updatedProject = await axios.put(
                `https://student-tracking-e3tk.onrender.com/api/projects/${selectedProject._id}`,
                editFormData,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                }
            );

            // Update the projects list
            setProjects(projects.map(project =>
                project._id === selectedProject._id ? updatedProject.data : project
            ));

            setShowEditModal(false);
            alert('Project updated successfully');
        } catch (error) {
            console.error('Error updating project:', error);
            alert(error.response?.data?.message || 'Failed to update project');
        }
    };

    // Project categories (same as in AddProject)
    const projectCategories = [
        { value: 'html-css', label: 'HTML & CSS' },
        { value: 'javascript', label: 'JavaScript' },
        { value: 'bootstrap', label: 'Bootstrap' },
        { value: 'react-angular', label: 'React / Angular' },
        { value: 'final-project', label: 'Final Project' }
    ];

    // Duration options (same as in AddProject)
    const durationOptions = [
        { value: '1-week', label: '1 Week' },
        { value: '2-weeks', label: '2 Weeks' },
        { value: '3-weeks', label: '3 Weeks' },
        { value: '4-weeks', label: '4 Weeks' },
        { value: '5-weeks', label: '5 Weeks' },
        { value: '6-weeks', label: '6 Weeks' },
        { value: 'semester-long', label: 'Semester Long' }
    ];

    const handleAddAssessment = () => {
        navigate(`/admin/add-assessment/${courseId}`);
    };

    const handleAddProject = () => {
        navigate(`/admin/add-project/${courseId}`);
    };

    const handleDeleteSyllabus = async () => {
        if (!window.confirm('Are you sure you want to delete this syllabus?')) {
            return;
        }

        setDeleting(true);
        try {
            await axios.delete(`https://student-tracking-e3tk.onrender.com/api/syllabus/${syllabus._id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setSyllabus(null);
            alert('Syllabus deleted successfully');
        } catch (error) {
            console.error('Error deleting syllabus:', error);
            alert('Failed to delete syllabus');
        } finally {
            setDeleting(false);
        }
    };

    const handleDeleteProject = async (projectId) => {
        if (!window.confirm('Are you sure you want to delete this project?')) {
            return;
        }

        try {
            await axios.delete(`https://student-tracking-e3tk.onrender.com/api/projects/${projectId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });

            // Remove the deleted project from state
            setProjects(projects.filter(project => project._id !== projectId));
            alert('Project deleted successfully');
        } catch (error) {
            console.error('Error deleting project:', error);
            alert(error.response?.data?.message || 'Failed to delete project');
        }
    };

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

    return (
        <div className="course-view-container" style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            padding: '2rem 0'
        }}>
            <div className="container">
                {/* Header Section */}
                <div className="card border-0 shadow mb-4" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '15px',
                    overflow: 'hidden'
                }}>
                    <div className="card-body text-center py-3">
                        <h1 className="text-white mb-0">Course Dashboard</h1>
                        <p className="text-white-50 mb-0">Manage your course content, assessments and projects</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="row">
                    {/* Left Column - Syllabus and Course Content */}
                    <div className="col-lg-8">
                        <div className="card border-0 shadow mb-4">
                            <div className="card-header bg-white">
                                <h4 className="mb-0">
                                    <i className="bi bi-collection-play me-2 text-primary"></i>
                                    Course Materials
                                </h4>
                            </div>
                            <div className="card-body">
                                {/* Syllabus Card */}
                                {syllabus && (
                                    <div className="mb-4">
                                        <div className="card border-0 shadow-sm" style={{
                                            background: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
                                            borderRadius: '12px'
                                        }}>
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h5 className="mb-0">
                                                        <i className="bi bi-file-earmark-text me-2"></i>
                                                        Syllabus
                                                    </h5>
                                                    <div>
                                                        <button
                                                            onClick={handleDeleteSyllabus}
                                                            className="btn btn-sm btn-danger me-2"
                                                            style={{ borderRadius: '20px' }}
                                                            disabled={deleting}
                                                        >
                                                            {deleting ? (
                                                                <span className="spinner-border spinner-border-sm" role="status"></span>
                                                            ) : (
                                                                <>
                                                                    <i className="bi bi-trash me-1"></i> Delete
                                                                </>
                                                            )}
                                                        </button>
                                                        <a
                                                            href={syllabus.fileUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-sm btn-primary"
                                                            style={{ borderRadius: '20px' }}
                                                        >
                                                            <i className="bi bi-download me-1"></i> Download
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="d-flex text-muted small mb-3">
                                                    <span className="me-3">
                                                        <i className="bi bi-filetype-pdf me-1"></i>
                                                        {syllabus.fileType.toUpperCase()}
                                                    </span>
                                                    <span>
                                                        <i className="bi bi-hdd me-1"></i>
                                                        {(syllabus.fileSize / (1024 * 1024)).toFixed(2)} MB
                                                    </span>
                                                </div>
                                                <div className="ratio ratio-16x9">
                                                    <iframe
                                                        src={syllabus.fileUrl}
                                                        title="Course Syllabus"
                                                        style={{ borderRadius: '8px' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Course Content */}
                                <h5 className="mt-4 mb-3">
                                    <i className="bi bi-stack me-2"></i>
                                    Learning Materials
                                </h5>
                                {courseContent.length > 0 ? (
                                    <div className="row row-cols-1 row-cols-md-2 g-4">
                                        {courseContent.map((content, index) => (
                                            <div key={index} className="col">
                                                <div className="card h-100 border-0 shadow-sm" style={{
                                                    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                                                    borderRadius: '12px'
                                                }}>
                                                    <div className="card-body">
                                                        <h6 className="card-title">{content.title}</h6>
                                                        {content.fileType === 'pdf' ? (
                                                            <div className="ratio ratio-16x9 mb-3">
                                                                <iframe
                                                                    src={content.fileUrl}
                                                                    title={content.title}
                                                                    style={{ borderRadius: '8px' }}
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="d-flex flex-column align-items-center">
                                                                <i className="bi bi-file-earmark-text fs-1 text-muted mb-2"></i>
                                                                <p className="text-muted small">This content is a {content.fileType.toUpperCase()} file</p>
                                                                <a
                                                                    href={content.fileUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="btn btn-sm btn-primary"
                                                                    style={{ borderRadius: '20px' }}
                                                                >
                                                                    <i className="bi bi-download me-1"></i> Download
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-4">
                                        <i className="bi bi-folder-x fs-1 text-muted"></i>
                                        <p className="mt-3 text-muted">No course content available</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Assessments */}
                    <div className="col-lg-4">
                        <div className="card border-0 shadow mb-4">
                            <div className="card-header bg-white d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">
                                    <i className="bi bi-clipboard-check me-2 text-primary"></i>
                                    Assessments
                                </h4>
                                <button
                                    className="btn btn-sm btn-success"
                                    onClick={handleAddAssessment}
                                    style={{
                                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                        border: 'none',
                                        borderRadius: '20px'
                                    }}
                                >
                                    <i className="bi bi-plus-circle me-1"></i> Add
                                </button>
                            </div>
                            <div className="card-body" style={{ overflowY: 'auto', maxHeight: '500px' }}>
                                {assessments.length > 0 ? (
                                    <div className="list-group">
                                        {assessments.map((assessment, index) => (
                                            <div key={index} className="list-group-item border-0 mb-2 shadow-sm" style={{
                                                background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
                                                borderRadius: '10px'
                                            }}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h6 className="mb-0">{assessment.topic}</h6>
                                                    <div className="dropdown">
                                                        <button className="btn btn-sm btn-link text-dark" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                                            <i className="bi bi-three-dots-vertical"></i>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <button className="dropdown-item">
                                                                    <i className="bi bi-eye me-2"></i>View
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button className="dropdown-item">
                                                                    <i className="bi bi-pencil me-2"></i>Edit
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button className="dropdown-item text-danger">
                                                                    <i className="bi bi-trash me-2"></i>Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <span className="badge bg-info me-2">
                                                        {assessment.questions?.length || 0} Questions
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-5">
                                        <i className="bi bi-clipboard-x fs-1 text-muted"></i>
                                        <p className="mt-3 text-muted">No assessments yet</p>
                                        <button
                                            className="btn btn-primary mt-2"
                                            onClick={handleAddAssessment}
                                            style={{
                                                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                                border: 'none',
                                                borderRadius: '20px'
                                            }}
                                        >
                                            <i className="bi bi-plus-circle me-1"></i> Create Assessment
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Projects Section */}
                        <div className="card border-0 shadow">
                            <div className="card-header bg-white d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">
                                    <i className="bi bi-kanban me-2 text-primary"></i>
                                    Projects by Category
                                </h4>
                                <button
                                    className="btn btn-sm btn-success"
                                    onClick={handleAddProject}
                                    style={{
                                        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                                        border: 'none',
                                        borderRadius: '20px'
                                    }}
                                >
                                    <i className="bi bi-plus-circle me-1"></i> Add
                                </button>
                            </div>
                            <div className="card-body" style={{ overflowY: 'auto', maxHeight: '500px' }}>
                                {projects.length > 0 ? (
                                    <div>
                                        {/* Group projects by category */}
                                        {Array.from(new Set(projects.map(p => p.category))).map(category => {
                                            const categoryProjects = projects.filter(p => p.category === category);
                                            const categoryLabel = projectCategories.find(c => c.value === category)?.label || category;

                                            return (
                                                <div key={category} className="mb-4">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <h5 className="mb-0">
                                                            <i className="bi bi-tag-fill me-2" style={{
                                                                color: getCategoryColor(category)
                                                            }}></i>
                                                            {categoryLabel}
                                                        </h5>
                                                    </div>

                                                    <div className="list-group">
                                                        {categoryProjects.map((project, index) => (
                                                            <div key={index} className="list-group-item border-0 mb-2 shadow-sm" style={{
                                                                background: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
                                                                borderRadius: '10px'
                                                            }}>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">{project.title}</h6>
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-sm btn-link text-dark" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                                                            <i className="bi bi-three-dots-vertical"></i>
                                                                        </button>
                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <button
                                                                                    className="dropdown-item"
                                                                                    onClick={() => handleViewProject(project)}
                                                                                >
                                                                                    <i className="bi bi-eye me-2"></i>View
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button
                                                                                    className="dropdown-item"
                                                                                    onClick={() => handleEditProject(project)}
                                                                                >
                                                                                    <i className="bi bi-pencil me-2"></i>Edit
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button
                                                                                    className="dropdown-item text-danger"
                                                                                    onClick={() => handleDeleteProject(project._id)}
                                                                                >
                                                                                    <i className="bi bi-trash me-2"></i>Delete
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <p className="small text-muted mt-2 mb-1">{project.description.substring(0, 80)}...</p>
                                                                <div className="mt-2">
                                                                    <span className="badge bg-warning text-dark me-2">
                                                                        <i className="bi bi-calendar me-1"></i>
                                                                        {project.duration}
                                                                    </span>
                                                                    <span className="badge bg-light text-dark">
                                                                        <i className="bi bi-person me-1"></i>
                                                                        {project.maxGroupSize || 1} members
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div className="text-center py-5">
                                        <i className="bi bi-kanban fs-1 text-muted"></i>
                                        <p className="mt-3 text-muted">No projects yet</p>
                                        <button
                                            className="btn btn-success mt-2"
                                            onClick={handleAddProject}
                                            style={{
                                                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                                                border: 'none',
                                                borderRadius: '20px'
                                            }}
                                        >
                                            <i className="bi bi-plus-circle me-1"></i> Create Project
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* View Project Modal */}
                <div className={`modal fade ${showViewModal ? 'show' : ''}`} style={{ display: showViewModal ? 'block' : 'none' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content border-0" style={{
                            background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
                            borderRadius: '15px'
                        }}>
                            <div className="modal-header border-0" style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                borderTopLeftRadius: '15px',
                                borderTopRightRadius: '15px'
                            }}>
                                <h5 className="modal-title d-flex align-items-center">
                                    <i className="bi bi-kanban-fill me-2" style={{ fontSize: '1.5rem' }}></i>
                                    Project Details
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    onClick={() => setShowViewModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                {selectedProject && (
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <h4 className="mb-0">
                                                <i className="bi bi-file-earmark-text me-2 text-primary"></i>
                                                {selectedProject.title}
                                            </h4>
                                            <div>
                                                <span className="badge me-2" style={{
                                                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                                    color: 'white'
                                                }}>
                                                    <i className="bi bi-tag-fill me-1"></i>
                                                    {selectedProject.category}
                                                </span>
                                                <span className="badge" style={{
                                                    background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
                                                    color: 'black'
                                                }}>
                                                    <i className="bi bi-calendar-check me-1"></i>
                                                    {selectedProject.duration}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="card mb-4 border-0 shadow-sm" style={{
                                            background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
                                            borderRadius: '12px'
                                        }}>
                                            <div className="card-body">
                                                <h5 className="d-flex align-items-center">
                                                    <i className="bi bi-card-text me-2 text-info"></i>
                                                    Description
                                                </h5>
                                                <p className="mb-0">{selectedProject.description}</p>
                                            </div>
                                        </div>

                                        <div className="card mb-4 border-0 shadow-sm" style={{
                                            background: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
                                            borderRadius: '12px'
                                        }}>
                                            <div className="card-body">
                                                <h5 className="d-flex align-items-center">
                                                    <i className="bi bi-list-check me-2 text-danger"></i>
                                                    Requirements
                                                </h5>
                                                <p className="mb-0">{selectedProject.requirements}</p>
                                            </div>
                                        </div>

                                        {selectedProject.resources && (
                                            <div className="card mb-4 border-0 shadow-sm" style={{
                                                background: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
                                                borderRadius: '12px'
                                            }}>
                                                <div className="card-body">
                                                    <h5 className="d-flex align-items-center">
                                                        <i className="bi bi-link-45deg me-2 text-success"></i>
                                                        Resources
                                                    </h5>
                                                    <p className="mb-0">{selectedProject.resources}</p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-people-fill me-2 text-muted" style={{ fontSize: '1.2rem' }}></i>
                                                <span className="fw-bold">Max Group Size:</span>
                                                <span className="ms-2 badge bg-light text-dark" style={{ fontSize: '1rem' }}>
                                                    {selectedProject.maxGroupSize}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer border-0">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowViewModal(false)}
                                    style={{
                                        background: 'linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: 'white'
                                    }}
                                >
                                    <i className="bi bi-x-circle me-1"></i> Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {showViewModal && <div className="modal-backdrop fade show"></div>}

                {/* Edit Project Modal */}
                <div className={`modal fade ${showEditModal ? 'show' : ''}`} style={{ display: showEditModal ? 'block' : 'none' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content border-0" style={{
                            background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
                            borderRadius: '15px'
                        }}>
                            <div className="modal-header border-0" style={{
                                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                                color: 'white',
                                borderTopLeftRadius: '15px',
                                borderTopRightRadius: '15px'
                            }}>
                                <h5 className="modal-title d-flex align-items-center">
                                    <i className="bi bi-pencil-square me-2" style={{ fontSize: '1.5rem' }}></i>
                                    Edit Project
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    onClick={() => setShowEditModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-4">
                                    <label className="form-label d-flex align-items-center">
                                        <i className="bi bi-card-heading me-2 text-primary"></i>
                                        Project Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control py-2"
                                        name="title"
                                        value={editFormData.title}
                                        onChange={handleEditChange}
                                        required
                                        style={{ borderRadius: '8px', border: '1px solid #ced4da' }}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label d-flex align-items-center">
                                        <i className="bi bi-tag me-2 text-info"></i>
                                        Project Category
                                    </label>
                                    <select
                                        className="form-select py-2"
                                        name="category"
                                        value={editFormData.category}
                                        onChange={handleEditChange}
                                        required
                                        style={{ borderRadius: '8px', border: '1px solid #ced4da' }}
                                    >
                                        <option value="">-- Select a category --</option>
                                        {projectCategories.map((category, index) => (
                                            <option key={index} value={category.value}>
                                                {category.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label d-flex align-items-center">
                                        <i className="bi bi-card-text me-2 text-success"></i>
                                        Description
                                    </label>
                                    <textarea
                                        className="form-control py-2"
                                        name="description"
                                        value={editFormData.description}
                                        onChange={handleEditChange}
                                        rows="4"
                                        required
                                        style={{ borderRadius: '8px', border: '1px solid #ced4da' }}
                                    />
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label className="form-label d-flex align-items-center">
                                            <i className="bi bi-calendar-week me-2 text-warning"></i>
                                            Duration
                                        </label>
                                        <select
                                            className="form-select py-2"
                                            name="duration"
                                            value={editFormData.duration}
                                            onChange={handleEditChange}
                                            required
                                            style={{ borderRadius: '8px', border: '1px solid #ced4da' }}
                                        >
                                            <option value="">-- Select duration --</option>
                                            {durationOptions.map((duration, index) => (
                                                <option key={index} value={duration.value}>
                                                    {duration.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label d-flex align-items-center">
                                            <i className="bi bi-people me-2 text-danger"></i>
                                            Max Group Size
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control py-2"
                                            name="maxGroupSize"
                                            min="1"
                                            value={editFormData.maxGroupSize}
                                            onChange={handleEditChange}
                                            required
                                            style={{ borderRadius: '8px', border: '1px solid #ced4da' }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label d-flex align-items-center">
                                        <i className="bi bi-link-45deg me-2 text-secondary"></i>
                                        Resources (Optional)
                                    </label>
                                    <textarea
                                        className="form-control py-2"
                                        name="resources"
                                        value={editFormData.resources}
                                        onChange={handleEditChange}
                                        rows="2"
                                        style={{ borderRadius: '8px', border: '1px solid #ced4da' }}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label d-flex align-items-center">
                                        <i className="bi bi-list-check me-2 text-primary"></i>
                                        Requirements
                                    </label>
                                    <textarea
                                        className="form-control py-2"
                                        name="requirements"
                                        value={editFormData.requirements}
                                        onChange={handleEditChange}
                                        rows="3"
                                        required
                                        style={{ borderRadius: '8px', border: '1px solid #ced4da' }}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer border-0">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowEditModal(false)}
                                    style={{
                                        background: 'linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: 'white'
                                    }}
                                >
                                    <i className="bi bi-x-circle me-1"></i> Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleUpdateProject}
                                    style={{
                                        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: 'white',
                                        boxShadow: '0 4px 15px rgba(67, 233, 123, 0.3)'
                                    }}
                                >
                                    <i className="bi bi-check-circle me-1"></i> Update Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {showEditModal && <div className="modal-backdrop fade show"></div>}
            </div>
        </div>
    );
};

function getCategoryColor(category) {
    const colors = {
        'html-css': '#e34c26', // HTML/CSS color
        'javascript': '#f0db4f', // JS color
        'bootstrap': '#563d7c', // Bootstrap color
        'react-angular': '#61dbfb', // React color
        'final-project': '#ff6b6b' // Final project color
    };
    return colors[category] || '#6c757d'; // Default to bootstrap secondary
}

export default CourseView;