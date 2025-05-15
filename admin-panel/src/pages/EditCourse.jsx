import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({ title: '', duration: '' });

  useEffect(() => {
    axios.get(`https://student-tracking-e3tk.onrender.com/api/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => setCourse(res.data))
      .catch(err => {
        console.error('Failed to load course:', err);
        alert('Failed to load course data');
      });
  }, [id]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`https://student-tracking-e3tk.onrender.com/api/courses/${id}`, course, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(() => {
        alert('Course updated successfully!');
        navigate('/admin'); // or navigate(-1) to go back
      })
      .catch(err => {
        console.error('Error updating course:', err);
        alert('Failed to update course');
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4" style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)',
        color: 'white',
        borderRadius: '12px'
      }}>
        <h3 className="mb-4">✏️ Edit Course</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Course Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={course.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Duration</label>
            <input
              type="text"
              name="duration"
              className="form-control"
              value={course.duration}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-light">
              💾 Save Changes
            </button>
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => navigate(-1)}
            >
              🔙 Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
