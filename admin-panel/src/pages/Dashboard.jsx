import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [admin, setAdmin] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    Promise.all([
      axios.get('https://student-tracking-e3tk.onrender.com/api/admin/profile', {
        headers: { Authorization: `Bearer ${token}` }
      }),
      axios.get('https://student-tracking-e3tk.onrender.com/api/courses', {
        headers: { Authorization: `Bearer ${token}` }
      })
    ])
    .then(([adminRes, coursesRes]) => {
      setAdmin(adminRes.data);
      setCourses(coursesRes.data);
      setLoading(false);
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      setLoading(false);
    });
  }, []);

  const handleDeleteCourse = (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;

    axios.delete(`https://student-tracking-e3tk.onrender.com/api/courses/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(() => {
        setCourses(prev => prev.filter(course => course._id !== id));
      })
      .catch(err => {
        console.error('Failed to delete course:', err);
        alert('Failed to delete course');
      });
  };

  const handleUpdateClick = () => {
    navigate('/admin/profile/update');
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

  if (!admin) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ 
        height: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <div className="alert alert-danger">Failed to load trainer data</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem 0'
    }}>
      <div className="container py-4">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0 text-dark">Welcome, <span className="text-primary">{admin.name}</span> 👋</h2>
          <button 
            className="btn btn-outline-primary"
            onClick={handleUpdateClick}
          >
            <i className="bi bi-pencil-square me-2"></i>Update Profile
          </button>
        </div>

        {/* Admin Profile Card */}
        <div className="card border-0 shadow mb-5" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: '15px',
          overflow: 'hidden'
        }}>
          <div className="card-header border-0" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
            <h4 className="mb-0"><i className="bi bi-person-badge me-2"></i>Trainer Profile</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label" style={{ opacity: 0.8 }}>Email</label>
                  <p className="fw-bold">{admin.email}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ opacity: 0.8 }}>Institution</label>
                  <p className="fw-bold">{admin.institution?.name || 'N/A'}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label" style={{ opacity: 0.8 }}>Address</label>
                  <p className="fw-bold">{admin.institution?.address || 'N/A'}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ opacity: 0.8 }}>Trainer Name</label>
                  <p className="fw-bold">{admin.trainerName || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0 text-dark"><i className="bi bi-book me-2"></i>Courses Management</h3>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/admin/add-course')}
            style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              border: 'none',
              borderRadius: '8px'
            }}
          >
            <i className="bi bi-plus-circle me-2"></i>Add Course
          </button>
        </div>

        {courses.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {courses.map(course => (
              <div className="col" key={course._id}>
                <div className="card h-100 shadow-sm border-0" style={{
                  background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-5px)'
                  }
                }}>
                  <div className="card-header border-0" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                    <h5 className="card-title mb-0 text-dark">{course.title}</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text text-dark">
                      <i className="bi bi-clock text-muted me-2"></i>
                      <span className="text-muted">Duration:</span> {course.duration}
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => navigate(`/admin/edit-course/${course._id}`)}
                        style={{ borderRadius: '20px' }}
                      >
                        <i className="bi bi-pencil"></i> Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => navigate(`/admin/course/${course._id}`)}
                        style={{ borderRadius: '20px' }}
                      >
                        <i className="bi bi-eye"></i> View
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteCourse(course._id)}
                        style={{ borderRadius: '20px' }}
                      >
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card shadow-sm border-0" style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px'
          }}>
            <div className="card-body text-center py-5">
              <i className="bi bi-book text-muted" style={{ fontSize: '3rem' }}></i>
              <h5 className="mt-3 text-muted">No courses found</h5>
              <button 
                className="btn btn-primary mt-3"
                onClick={() => navigate('/admin/add-course')}
                style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  border: 'none',
                  borderRadius: '8px'
                }}
              >
                <i className="bi bi-plus-circle me-2"></i>Add Your First Course
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}