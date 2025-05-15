import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendancePage = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [attendanceStatus, setAttendanceStatus] = useState('present');
  const [groomingStatus, setGroomingStatus] = useState('present');
  const [remarks, setRemarks] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/students', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setStudents(response.data);
        if (response.data.length > 0) {
          setSelectedStudent(response.data[0]);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const navigateDate = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  const handleAttendanceChange = (status) => {
    setAttendanceStatus(status);
  };

  const handleGroomingChange = (status) => {
    setGroomingStatus(status);
  };

  const handleRemarksChange = (e) => {
    setRemarks(e.target.value);
  };

  const submitAttendance = async () => {
    if (!selectedStudent) {
      alert('Please select a student');
      return;
    }

    setSubmitting(true);

    try {
      const attendanceData = {
        studentId: selectedStudent._id,
        date: currentDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
        courseId: selectedStudent.courses[0]?._id, // Assuming first course for simplicity
        status: attendanceStatus,
        groomingStatus: groomingStatus,
        remarks: remarks
      };

      const response = await axios.post(
        'http://localhost:5000/api/attendance',
        attendanceData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      alert('Attendance submitted successfully!');
      console.log('Attendance submitted:', response.data);

      // Reset form after successful submission
      setRemarks('');
      setAttendanceStatus('present');
      setGroomingStatus('present');

    } catch (error) {
      console.error('Error submitting attendance:', error);
      alert(error.response?.data?.message || 'Failed to submit attendance');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-3">
        Error loading students: {error}
      </div>
    );
  }

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="bi bi-people-fill me-2"></i>
                  Student List
                </h5>
                <span className="badge bg-light text-dark">
                  {students.length} students
                </span>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {students.map((student) => (
                  <button
                    key={student._id}
                    className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${selectedStudent?._id === student._id ? 'active' : ''}`}
                    onClick={() => setSelectedStudent(student)}
                  >
                    <div>
                      <i className="bi bi-person-circle me-2"></i>
                      {student.name}
                    </div>
                    <span className="badge bg-secondary rounded-pill">
                      {student.studentId}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">
                <i className="bi bi-calendar-check me-2"></i>
                Mark Attendance
              </h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => navigateDate(-1)}
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <div className="mx-3 text-center">
                  <h4 className="mb-0">{formatDate(currentDate)}</h4>
                </div>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => navigateDate(1)}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>

              {selectedStudent && (
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle bg-light p-3 me-3">
                      <i className="bi bi-person-circle fs-1"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">{selectedStudent.name}</h4>
                      <p className="mb-1">
                        <span className="badge bg-info me-2">Roll: {selectedStudent.studentId}</span>
                        {selectedStudent.courses.map((course, i) => (
                          <span key={i} className="badge bg-secondary me-1">Course: {course.title}</span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="mb-3">
                      <i className="bi bi-check-circle me-2"></i>
                      Attendance Status
                    </h5>
                    <div className="d-flex flex-wrap gap-3">
                      <button
                        className={`btn ${attendanceStatus === 'present' ? 'btn-success' : 'btn-outline-success'} rounded-pill`}
                        onClick={() => handleAttendanceChange('present')}
                      >
                        <i className="bi bi-check-circle me-1"></i> Present
                      </button>
                      <button
                        className={`btn ${attendanceStatus === 'absent' ? 'btn-danger' : 'btn-outline-danger'} rounded-pill`}
                        onClick={() => handleAttendanceChange('absent')}
                      >
                        <i className="bi bi-x-circle me-1"></i> Absent
                      </button>
                      <button
                        className={`btn ${attendanceStatus === 'late' ? 'btn-warning' : 'btn-outline-warning'} rounded-pill`}
                        onClick={() => handleAttendanceChange('late')}
                      >
                        <i className="bi bi-clock me-1"></i> Late
                      </button>
                      <button
                        className={`btn ${attendanceStatus === 'holiday' ? 'btn-info' : 'btn-outline-info'} rounded-pill`}
                        onClick={() => handleAttendanceChange('holiday')}
                      >
                        <i className="bi bi-umbrella me-1"></i> Holiday
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="mb-3">
                      <i className="bi bi-person-check me-2"></i>
                      Grooming Check
                    </h5>
                    <div className="d-flex flex-wrap gap-3">
                      <button
                        className={`btn ${groomingStatus === 'present' ? 'btn-success' : 'btn-outline-success'} rounded-pill`}
                        onClick={() => handleGroomingChange('present')}
                      >
                        <i className="bi bi-check-circle me-1"></i> Present
                      </button>
                      <button
                        className={`btn ${groomingStatus === 'absent' ? 'btn-danger' : 'btn-outline-danger'} rounded-pill`}
                        onClick={() => handleGroomingChange('absent')}
                      >
                        <i className="bi bi-x-circle me-1"></i> Absent
                      </button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="remarks" className="form-label">
                      <i className="bi bi-chat-left-text me-2"></i>
                      Remarks
                    </label>
                    <textarea
                      className="form-control"
                      id="remarks"
                      rows="3"
                      placeholder="Add any remarks here..."
                      value={remarks}
                      onChange={handleRemarksChange}
                    ></textarea>
                  </div>

                  <button
                    className="btn btn-primary w-100 mt-3"
                    onClick={submitAttendance}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-save me-2"></i>
                        Save Attendance
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;