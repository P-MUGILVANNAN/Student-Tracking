import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function EnrolledCourses() {
  const [courses, setCourses] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        setCourses(res.data.courses || []);
        setProfile(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{
        height: '80vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="enrolled-courses-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem 0'
    }}>
      <div className="container">
        {/* Header Card */}
        <div className="card border-0 shadow-lg mb-5" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '15px',
          overflow: 'hidden'
        }}>
          <div className="card-body text-center py-4">
            <h2 className="mb-0 text-white">
              <i className="bi bi-book me-2"></i>
              My Enrolled Courses
            </h2>
            <p className="mb-0 opacity-75 text-white">
              {courses.length} {courses.length === 1 ? 'Course' : 'Courses'} Enrolled
            </p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <div key={index} className="col">
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                  <div className="card-header bg-white border-bottom-0 pb-0">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                        <i className="bi bi-book text-primary fs-4"></i>
                      </div>
                      <div>
                        <h5 className="card-title mb-0">{course.title}</h5>
                        <small className="text-muted">
                          {profile.trainerName || 'No instructor specified'}
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-clock-history text-muted me-2"></i>
                        <small className="text-muted">
                          {course.duration || 'Duration not specified'}
                        </small>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-calendar-check text-muted me-2"></i>
                        <small className="text-muted">
                          Start Date: {course.createdAt ? new Date(course.createdAt).toLocaleDateString() : 'No start date'}
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer bg-white border-top-0 pt-0">
                    <Link
                      to={`/student/course/${course._id}`}
                      className="btn btn-primary w-100"
                    >
                      <i className="bi bi-arrow-right-circle me-2"></i>
                      Continue Learning
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center py-5">
                  <div className="bg-light rounded-circle p-4 d-inline-block mb-3">
                    <i className="bi bi-book text-muted" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h4 className="text-muted mb-3">No Courses Enrolled</h4>
                  <p className="text-muted mb-4">
                    You haven't enrolled in any courses yet. Browse our catalog to find interesting courses.
                  </p>
                  <Link to="/student/courses" className="btn btn-primary px-4">
                    <i className="bi bi-search me-2"></i>
                    Browse Courses
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div >
  );
}