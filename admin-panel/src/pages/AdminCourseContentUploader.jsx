import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminCourseContentUploader() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('No file chosen');

  useEffect(() => {
    const fetchCoursesFromProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/courses', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setCourses(res.data || []);
      } catch (error) {
        console.error('Error fetching courses:', error);
        alert('Failed to fetch courses');
      }
    };
    fetchCoursesFromProfile();
  }, []);

  const getFileType = (filename) => {
    const ext = filename.split('.').pop().toLowerCase();
    return ['pdf', 'ppt', 'pptx'].includes(ext) ? ext : '';
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedCourse || !title || !file) return alert("All fields are required");

    const fileType = getFileType(file.name);
    if (!fileType) return alert("Only PDF, PPT, and PPTX files are supported");

    setLoading(true);

    const formData = new FormData();
    formData.append('courseId', selectedCourse);
    formData.append('title', title);
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/api/admin/course-content',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      alert("Content uploaded successfully");
      setTitle('');
      setFile(null);
      setFileName('No file chosen');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error uploading content");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-3" 
         style={{background: 'linear-gradient(135deg, #326a4c 0%, #8297bc 100%)'}}>
      <div className="card shadow-lg border-0" style={{width: '100%', maxWidth: '500px'}}>
        <div className="card-header bg-white border-0 pt-4">
          <h3 className="text-center text-dark fw-bold">Upload Course Content</h3>
          <div className="text-center">
            <div style={{
              height: '4px',
              width: '80px',
              background: 'linear-gradient(to right, #326a4c, #8297bc)',
              margin: '10px auto',
              borderRadius: '2px'
            }}></div>
          </div>
        </div>
        
        <div className="card-body p-4">
          <form onSubmit={handleUpload}>
            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary">Select Course</label>
              <select
                className="form-select py-2"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                style={{borderRadius: '8px', border: '1px solid #ced4da'}}
              >
                <option value="">-- Select a Course --</option>
                {courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.title || course._id}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary">Content Title</label>
              <input
                type="text"
                className="form-control py-2"
                placeholder="e.g., Introduction to React"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{borderRadius: '8px', border: '1px solid #ced4da'}}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary">Upload File</label>
              <div className="input-group">
                <input
                  type="file"
                  className="form-control py-2 d-none"
                  id="fileUpload"
                  accept=".pdf,.ppt,.pptx"
                  onChange={handleFileChange}
                />
                <label 
                  className="btn btn-outline-secondary w-100 text-start" 
                  htmlFor="fileUpload"
                  style={{borderRadius: '8px', border: '1px solid #ced4da'}}
                >
                  <i className="bi bi-upload me-2"></i>
                  {fileName}
                </label>
              </div>
              <small className="text-muted">Allowed formats: PDF, PPT, PPTX</small>
            </div>

            <button 
              type="submit" 
              className="btn w-100 py-2 text-white fw-bold border-0"
              disabled={loading}
              style={{
                borderRadius: '8px',
                background: 'linear-gradient(to right, #326a4c, #8297bc)',
                boxShadow: '0 4px 15px rgba(50, 106, 76, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.9'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Uploading...
                </>
              ) : (
                <>
                  <i className="bi bi-cloud-arrow-up me-2"></i>
                  Upload Content
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}