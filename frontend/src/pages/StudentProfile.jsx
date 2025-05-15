import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function StudentProfile() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [editErrors, setEditErrors] = useState({});
  const [editMessage, setEditMessage] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    axios.get('https://student-tracking-e3tk.onrender.com/api/auth/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        setProfile(res.data);
        setLoading(false);
        // Initialize edit form with current profile data
        setEditFormData({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone || '',
        });
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
    // Clear error when user types
    if (editErrors[name]) {
      setEditErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateEditForm = () => {
    const errors = {};

    if (!editFormData.name.trim()) errors.name = 'Name is required';
    if (!editFormData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editFormData.email)) {
      errors.email = 'Invalid email format';
    }

    setEditErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    if (!validateEditForm()) return;

    try {
      setEditMessage('');
      const response = await axios.put(
        'https://student-tracking-e3tk.onrender.com/api/auth/profile',
        {
          name: editFormData.name,
          email: editFormData.email,
          phone: editFormData.phone
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      setEditMessage('Profile updated successfully!');
      // Update the profile in state
      setProfile(prev => ({
        ...prev,
        name: editFormData.name,
        email: editFormData.email,
        phone: editFormData.phone
      }));

      // Close modal after 1.5 seconds
      setTimeout(() => {
        setShowEditModal(false);
      }, 1500);
    } catch (err) {
      console.error(err);
      setEditMessage(err.response?.data?.message || 'Failed to update profile');
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-center">
          <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light">
      {/* Header */}
      <header className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2 d-flex justify-content-center">
              <div className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                style={{ width: '100px', height: '100px' }}>
                <i className="bi bi-person-fill text-primary fs-1"></i>
              </div>
            </div>
            <div className="col-md-10 mt-3 mt-md-0">
              <h1 className="display-5 fw-bold">{profile.name}</h1>
              <p className="lead mb-1">
                <i className="bi bi-envelope-fill me-2"></i>
                {profile.email}
              </p>
              <p className="mb-0">
                <i className="bi bi-telephone-fill me-2"></i>
                {profile.phone || 'Phone not provided'}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Left Sidebar - Profile Info */}
          <div className="col-lg-4">
            <div className="card shadow-sm h-100">
              <div className="card-header bg-white border-bottom-0 pb-0">
                <h3 className="card-title">
                  <i className="bi bi-person-lines-fill text-primary me-2"></i>
                  Profile Details
                </h3>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>
                      <i className="bi bi-person-badge-fill text-muted me-2"></i>
                      Student ID
                    </span>
                    <span className="fw-bold">{profile.studentId || 'N/A'}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>
                      <i className="bi bi-calendar-event-fill text-muted me-2"></i>
                      Joined
                    </span>
                    <span className="fw-bold">{new Date(profile.joiningDate).toLocaleDateString()}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>
                      <i className="bi bi-mortarboard-fill text-muted me-2"></i>
                      Institution
                    </span>
                    <span className="fw-bold text-end">
                      {profile?.institution?.name || 'N/A'}
                      <br />
                      <small className="text-muted">{profile?.institution?.address}</small>
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>
                      <i className="bi bi-person-workspace text-muted me-2"></i>
                      Trainer
                    </span>
                    <span className="fw-bold">{profile.trainerName || 'Not assigned'}</span>
                  </li>
                </ul>
              </div>
              <div className="card-footer bg-white border-top-0 pt-0">
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => setShowEditModal(true)}
                >
                  <i className="bi bi-pencil-fill me-2"></i>
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Progress Card */}
            <div className="card shadow-sm mt-4">
              <div className="card-header bg-white">
                <h3 className="card-title">
                  <i className="bi bi-graph-up-arrow text-success me-2"></i>
                  Learning Progress
                </h3>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <h6 className="d-flex justify-content-between">
                    <span>Courses Completed</span>
                    <span className="badge bg-success rounded-pill">3/10</span>
                  </h6>
                  <div className="progress" style={{ height: '10px' }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: '30%' }}
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="d-flex justify-content-between">
                    <span>Certificates Earned</span>
                    <span className="badge bg-info rounded-pill">2</span>
                  </h6>
                </div>
                <div className="mb-0">
                  <h6 className="d-flex justify-content-between">
                    <span>Learning Streak</span>
                    <span className="badge bg-warning text-dark rounded-pill">5 days</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Courses & Activity */}
          <div className="col-lg-8">
            {/* Enrolled Courses */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <h3 className="mb-0">
                  <i className="bi bi-book-half text-primary me-2"></i>
                  Enrolled Courses
                </h3>
              </div>
              <div className="card-body">
                {profile?.courses?.length > 0 ? (
                  <div className="row row-cols-1 row-cols-md-2 g-4">
                    {profile.courses.map((course, idx) => (
                      <div key={idx} className="col">
                        <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                          <div className="card-body">
                            <div className="d-flex align-items-start mb-3">
                              <div className="bg-primary bg-opacity-10 p-3 rounded me-3">
                                <i className="bi bi-book text-primary fs-4"></i>
                              </div>
                              <div>
                                <h5 className="card-title mb-1">{course.title}</h5>
                                <p className="text-muted small mb-2">
                                  <i className="bi bi-person-fill me-1"></i>
                                  Instructor: {profile.trainerName || 'Instructor not specified'}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <span className="badge bg-light text-dark">
                                <i className="bi bi-clock-history me-1"></i>
                                {course.duration || 'N/A'}
                              </span>
                            </div>
                            <div className="progress mb-3" style={{ height: '6px' }}>
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${course.progress || 0}%` }}
                                aria-valuenow={course.progress || 0}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <small className="text-muted">
                                {course.progress || 0}% completed
                              </small>
                              <Link
                                to={`/student/course/${course._id}`}
                                className="btn btn-sm btn-primary"
                              >
                                <i className="bi bi-arrow-right me-1"></i> Continue
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-5">
                    <i className="bi bi-book text-muted" style={{ fontSize: '3rem', opacity: 0.5 }}></i>
                    <h4 className="mt-3 text-muted">No courses enrolled yet</h4>
                    <p className="text-muted mb-4">Start your learning journey by browsing our courses</p>
                    <Link to="/student/courses" className="btn btn-primary px-4">
                      <i className="bi bi-search me-2"></i> Find Courses
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card shadow-sm">
              <div className="card-header bg-white">
                <h3 className="mb-0">
                  <i className="bi bi-activity text-primary me-2"></i>
                  Recent Activity
                </h3>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item border-0 py-3">
                    <div className="d-flex">
                      <div className="bg-success bg-opacity-10 text-success p-2 rounded me-3">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Completed "Introduction to React"</h6>
                        <small className="text-muted">2 hours ago</small>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item border-0 py-3">
                    <div className="d-flex">
                      <div className="bg-info bg-opacity-10 text-info p-2 rounded me-3">
                        <i className="bi bi-chat-square-text-fill"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Posted a question in "Advanced JavaScript"</h6>
                        <small className="text-muted">1 day ago</small>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item border-0 py-3">
                    <div className="d-flex">
                      <div className="bg-warning bg-opacity-10 text-warning p-2 rounded me-3">
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Earned a badge: "Fast Learner"</h6>
                        <small className="text-muted">3 days ago</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="bi bi-arrow-down me-1"></i> Load More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <div className={`modal fade ${showEditModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: showEditModal ? 'rgba(0,0,0,0.5)' : '' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">
                <i className="bi bi-pencil-square me-2"></i>
                Edit Profile
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => {
                  setShowEditModal(false);
                  setEditErrors({});
                  setEditMessage('');
                }}
              ></button>
            </div>
            <div className="modal-body">
              {editMessage && (
                <div className={`alert ${editMessage.includes('success') ? 'alert-success' : 'alert-danger'}`}>
                  <i className={`bi ${editMessage.includes('success') ? 'bi-check-circle' : 'bi-exclamation-triangle'} me-2`}></i>
                  {editMessage}
                </div>
              )}

              <form onSubmit={handleEditSubmit}>
                <div className="mb-3">
                  <label htmlFor="editName" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className={`form-control ${editErrors.name ? 'is-invalid' : ''}`}
                    id="editName"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditChange}
                  />
                  {editErrors.name && <div className="invalid-feedback">{editErrors.name}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="editEmail" className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${editErrors.email ? 'is-invalid' : ''}`}
                    id="editEmail"
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditChange}
                  />
                  {editErrors.email && <div className="invalid-feedback">{editErrors.email}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="editPhone" className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editPhone"
                    name="phone"
                    value={editFormData.phone}
                    onChange={handleEditChange}
                  />
                </div>

                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2"
                    onClick={() => {
                      setShowEditModal(false);
                      setEditErrors({});
                      setEditMessage('');
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-save me-2"></i>
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}