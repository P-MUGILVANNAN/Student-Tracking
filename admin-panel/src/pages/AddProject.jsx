import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AddProject = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '', // Changed from deadline to duration
    maxGroupSize: 1,
    resources: '',
    requirements: '',
    category: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`http://localhost:5000/api/projects`, {
        ...formData,
        course: courseId
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Project added successfully!');
      navigate(`/admin/course/${courseId}`);
    } catch (error) {
      console.error('Error adding project:', error);
      alert(error.response?.data?.message || 'Failed to add project');
    } finally {
      setLoading(false);
    }
  };

  // Project categories
  const projectCategories = [
    { value: 'html-css', label: 'HTML & CSS' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'bootstrap', label: 'Bootstrap' },
    { value: 'react-angular', label: 'React / Angular' },
    { value: 'final-project', label: 'Final Project' }
  ];

  // Duration options
  const durationOptions = [
    { value: '1-week', label: '1 Week' },
    { value: '2-weeks', label: '2 Weeks' },
    { value: '3-weeks', label: '3 Weeks' },
    { value: '4-weeks', label: '4 Weeks' },
    { value: '5-weeks', label: '5 Weeks' },
    { value: '6-weeks', label: '6 Weeks' },
    { value: 'semester-long', label: 'Semester Long' }
  ];

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-3" 
         style={{background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)'}}>
      <div className="card shadow-lg border-0" style={{width: '100%', maxWidth: '600px'}}>
        <div className="card-header bg-white border-0 pt-4">
          <h3 className="text-center text-dark fw-bold">Add New Project</h3>
          <div className="text-center">
            <div style={{
              height: '4px',
              width: '80px',
              background: 'linear-gradient(to right, #3a7bd5, #00d2ff)',
              margin: '10px auto',
              borderRadius: '2px'
            }}></div>
          </div>
        </div>
        
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary">Project Title</label>
              <input
                type="text"
                className="form-control py-2"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter project title"
                required
                style={{borderRadius: '8px', border: '1px solid #ced4da'}}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary">Project Category</label>
              <select
                className="form-select py-2"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                style={{borderRadius: '8px', border: '1px solid #ced4da'}}
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
              <label className="form-label fw-semibold text-secondary">Description</label>
              <textarea
                className="form-control py-2"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Enter project description"
                required
                style={{borderRadius: '8px', border: '1px solid #ced4da'}}
              />
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold text-secondary">Duration</label>
                <select
                  className="form-select py-2"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  style={{borderRadius: '8px', border: '1px solid #ced4da'}}
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
                <label className="form-label fw-semibold text-secondary">Max Group Size</label>
                <input
                  type="number"
                  className="form-control py-2"
                  name="maxGroupSize"
                  min="1"
                  value={formData.maxGroupSize}
                  onChange={handleChange}
                  required
                  style={{borderRadius: '8px', border: '1px solid #ced4da'}}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary">Resources (Optional)</label>
              <textarea
                className="form-control py-2"
                name="resources"
                value={formData.resources}
                onChange={handleChange}
                rows="2"
                placeholder="Enter any resources or links"
                style={{borderRadius: '8px', border: '1px solid #ced4da'}}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary">Requirements</label>
              <textarea
                className="form-control py-2"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows="3"
                placeholder="Enter project requirements"
                required
                style={{borderRadius: '8px', border: '1px solid #ced4da'}}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                onClick={() => navigate(`/admin/course/${courseId}`)}
                style={{borderRadius: '8px'}}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn text-white px-4 fw-bold border-0"
                disabled={loading}
                style={{
                  borderRadius: '8px',
                  background: 'linear-gradient(to right, #3a7bd5, #00d2ff)',
                  boxShadow: '0 4px 15px rgba(58, 123, 213, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.opacity = '0.9'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Adding...
                  </>
                ) : 'Add Project'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;