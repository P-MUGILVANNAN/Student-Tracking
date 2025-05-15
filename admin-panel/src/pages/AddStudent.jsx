import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    studentId: '',
    joiningDate: format(new Date(), 'yyyy-MM-dd'),
    trainerName: '',
    institution: {
      name: '',
      address: ''
    },
    courseId: '',
  });

  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/courses', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourses(res.data || []);
      } catch (err) {
        console.error('Failed to fetch courses:', err);
      }
    };

    fetchCourses();
  }, [token]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.studentId.trim()) newErrors.studentId = 'Student ID is required';
    if (!formData.trainerName.trim()) newErrors.trainerName = 'Trainer name is required';
    if (!formData.courseId) newErrors.courseId = 'Course selection is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'institutionName' || name === 'institutionAddress') {
      setFormData({
        ...formData,
        institution: {
          ...formData.institution,
          [name === 'institutionName' ? 'name' : 'address']: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setMessage('');

    try {
      // 1. Create student
      const createRes = await axios.post('http://localhost:5000/api/auth/signup', {
        ...formData,
        role: 'student',
      });

      const studentId = createRes.data.user.id;

      // 2. Enroll student in selected course
      await axios.post('http://localhost:5000/api/admin/enroll', {
        studentId,
        courseId: formData.courseId,
        daysData: [],
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage('Student created and enrolled successfully!');
      // Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        studentId: '',
        joiningDate: format(new Date(), 'yyyy-MM-dd'),
        trainerName: '',
        institution: {
          name: '',
          address: ''
        },
        courseId: '',
      });
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white py-3">
              <div className="d-flex align-items-center">
                <i className="bi bi-person-plus fs-3 me-3"></i>
                <div>
                  <h2 className="mb-0">Add New Student</h2>
                  <p className="mb-0 opacity-75">Fill in the student details below</p>
                </div>
              </div>
            </div>
            
            <div className="card-body p-4">
              {message && (
                <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'}`}>
                  <i className={`bi ${message.includes('success') ? 'bi-check-circle' : 'bi-exclamation-triangle'} me-2`}></i>
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <h5 className="mb-3 text-primary">
                  <i className="bi bi-person-lines-fill me-2"></i>
                  Personal Information
                </h5>
                
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <label htmlFor="name">Full Name *</label>
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label htmlFor="email">Email *</label>
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <label htmlFor="password">Password *</label>
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${errors.studentId ? 'is-invalid' : ''}`}
                        id="studentId"
                        name="studentId"
                        placeholder="Student ID"
                        value={formData.studentId}
                        onChange={handleChange}
                      />
                      <label htmlFor="studentId">Student ID *</label>
                      {errors.studentId && <div className="invalid-feedback">{errors.studentId}</div>}
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="date"
                        className="form-control"
                        id="joiningDate"
                        name="joiningDate"
                        value={formData.joiningDate}
                        onChange={handleChange}
                      />
                      <label htmlFor="joiningDate">Joining Date</label>
                    </div>
                  </div>
                </div>

                <h5 className="mb-3 text-primary">
                  <i className="bi bi-building me-2"></i>
                  Institution Information
                </h5>
                
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="institutionName"
                        name="institutionName"
                        placeholder="Institution Name"
                        value={formData.institution.name}
                        onChange={handleChange}
                      />
                      <label htmlFor="institutionName">Institution Name</label>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="institutionAddress"
                        name="institutionAddress"
                        placeholder="Institution Address"
                        value={formData.institution.address}
                        onChange={handleChange}
                      />
                      <label htmlFor="institutionAddress">Institution Address</label>
                    </div>
                  </div>
                </div>

                <h5 className="mb-3 text-primary">
                  <i className="bi bi-mortarboard me-2"></i>
                  Training Information
                </h5>
                
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${errors.trainerName ? 'is-invalid' : ''}`}
                        id="trainerName"
                        name="trainerName"
                        placeholder="Trainer Name"
                        value={formData.trainerName}
                        onChange={handleChange}
                      />
                      <label htmlFor="trainerName">Trainer Name *</label>
                      {errors.trainerName && <div className="invalid-feedback">{errors.trainerName}</div>}
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className={`form-select ${errors.courseId ? 'is-invalid' : ''}`}
                        id="courseId"
                        name="courseId"
                        value={formData.courseId}
                        onChange={handleChange}
                      >
                        <option value="">Select Course</option>
                        {courses.map((course) => (
                          <option key={course._id} value={course._id}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="courseId">Select Course *</label>
                      {errors.courseId && <div className="invalid-feedback">{errors.courseId}</div>}
                    </div>
                  </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-md-2"
                    onClick={() => {
                      setFormData({
                        name: '',
                        email: '',
                        password: '',
                        phone: '',
                        studentId: '',
                        joiningDate: format(new Date(), 'yyyy-MM-dd'),
                        trainerName: '',
                        institution: {
                          name: '',
                          address: ''
                        },
                        courseId: '',
                      });
                      setMessage('');
                      setErrors({});
                    }}
                  >
                    <i className="bi bi-x-circle me-2"></i>
                    Reset Form
                  </button>
                  
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-person-plus me-2"></i>
                        Add Student
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;