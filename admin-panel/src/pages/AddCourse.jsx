import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddCourse() {
  const [course, setCourse] = useState({
    title: '',
    duration: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCourse(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post('https://student-tracking-e3tk.onrender.com/api/courses', course, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(() => {
      navigate('/admin', { state: { message: 'Course added successfully!' } });
    })
    .catch(err => {
      console.error(err);
      alert('Failed to add course: ' + (err.response?.data?.message || 'Server error'));
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="add-course-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem 0'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
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
                  <i className="bi bi-plus-circle me-2"></i>
                  Create New Course
                </h3>
              </div>
              
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent text-white"
                        id="title"
                        name="title"
                        placeholder="Course Title"
                        value={course.title}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '10px', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                      />
                      <label htmlFor="title" className="text-white-50">Course Title</label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent text-white"
                        id="duration"
                        name="duration"
                        placeholder="Duration"
                        value={course.duration}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '10px', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                      />
                      <label htmlFor="duration" className="text-white-50">Duration (e.g., 4 weeks)</label>
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={loading}
                      style={{
                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '12px',
                        fontWeight: '600'
                      }}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Creating...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-save me-2"></i>
                          Create Course
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-light btn-lg"
                      onClick={() => navigate(-1)}
                      style={{ borderRadius: '10px', padding: '12px' }}
                    >
                      <i className="bi bi-arrow-left me-2"></i>
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
}