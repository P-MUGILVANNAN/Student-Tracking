import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddSyllabus = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [syllabusFile, setSyllabusFile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    // Fetch courses from backend API
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setCourses(response.data || []);
                setIsLoading(false);
            } catch (err) {
                setError('Failed to fetch courses');
                setIsLoading(false);
                console.error('Error fetching courses:', err);
            }
        };

        fetchCourses();
    }, []);

    const handleFileChange = (e) => {
        setSyllabusFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!selectedCourse || !syllabusFile) {
          setError('Please select a course and upload a file');
          return;
        }
      
        setIsSubmitting(true);
        setError('');
      
        try {
          const formData = new FormData();
          formData.append('courseId', selectedCourse);
          formData.append('syllabus', syllabusFile);
      
          await axios.post('http://localhost:5000/api/syllabus', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
      
          alert('Syllabus added successfully!');
          navigate('/admin');
        } catch (err) {
          setError(err.message || 'Failed to upload syllabus');
          console.error('Error uploading syllabus:', err);
        } finally {
          setIsSubmitting(false);
        }
      };

    return (
        <div className="container py-4" style={{
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            minHeight: '100vh'
        }}>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-lg border-0" style={{
                        borderRadius: '15px',
                        overflow: 'hidden',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <div className="card-header py-3" style={{
                            background: 'linear-gradient(to right, #4b6cb7, #182848)',
                            color: 'white'
                        }}>
                            <h4 className="mb-0 d-flex align-items-center">
                                <i className="bi bi-file-earmark-plus me-2"></i>
                                Add Syllabus
                            </h4>
                        </div>

                        <div className="card-body p-4">
                            {error && (
                                <div className="alert alert-danger alert-dismissible fade show">
                                    {error}
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setError('')}
                                    ></button>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                {/* Course Selection */}
                                <div className="mb-4">
                                    <label htmlFor="courseSelect" className="form-label fw-bold">
                                        Select Course <span className="text-danger">*</span>
                                    </label>
                                    {isLoading ? (
                                        <div className="d-flex align-items-center">
                                            <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                                            <span>Loading courses...</span>
                                        </div>
                                    ) : (
                                        <select
                                            id="courseSelect"
                                            className="form-select form-select-lg"
                                            style={{
                                                border: '1px solid #ced4da',
                                                borderRadius: '8px',
                                                background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)'
                                            }}
                                            value={selectedCourse}
                                            onChange={(e) => setSelectedCourse(e.target.value)}
                                            required
                                        >
                                            <option value="">-- Select a Course --</option>
                                            {courses.map((course) => (
                                                <option key={course._id} value={course._id}>
                                                    {course.title}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </div>

                                {/* File Upload */}
                                <div className="mb-4">
                                    <label htmlFor="syllabusFile" className="form-label fw-bold">
                                        Upload Syllabus File <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type="file"
                                            id="syllabusFile"
                                            className="form-control form-control-lg"
                                            style={{
                                                border: '1px solid #ced4da',
                                                borderRadius: '8px',
                                                background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)'
                                            }}
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-text text-muted">
                                        Accepted formats: PDF, DOC, DOCX (Max 5MB)
                                    </div>
                                    {syllabusFile && (
                                        <div className="mt-2">
                                            <span className="badge bg-success p-2" style={{
                                                borderRadius: '8px',
                                                background: 'linear-gradient(to right, #4CAF50, #2E7D32)'
                                            }}>
                                                <i className="bi bi-file-earmark-check me-2"></i>
                                                {syllabusFile.name}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Form Actions */}
                                <div className="d-flex justify-content-end gap-3 mt-4 pt-3 border-top">
                                    <button
                                        type="button"
                                        className="btn px-4 py-2"
                                        style={{
                                            borderRadius: '8px',
                                            background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
                                            border: '1px solid #ced4da',
                                            fontWeight: '600'
                                        }}
                                        onClick={() => navigate('/admin')}
                                        disabled={isSubmitting}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn px-4 py-2 fw-bold"
                                        style={{
                                            borderRadius: '8px',
                                            background: 'linear-gradient(to right, #4b6cb7, #182848)',
                                            color: 'white',
                                            border: 'none'
                                        }}
                                        disabled={isSubmitting || isLoading}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                                Uploading...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-upload me-2"></i>
                                                Add Syllabus
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

export default AddSyllabus;