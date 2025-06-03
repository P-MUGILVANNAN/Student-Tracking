import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [expandedStudent, setExpandedStudent] = useState(null);
  const [attendanceData, setAttendanceData] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('https://student-tracking-e3tk.onrender.com/api/admin/students', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setStudents(res.data);
      } catch (err) {
        console.error('Error fetching students:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const fetchAttendance = async (studentId) => {
    try {
      const res = await axios.get(`https://student-tracking-e3tk.onrender.com/api/attendance/student/${studentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setAttendanceData(prev => ({
        ...prev,
        [studentId]: res.data
      }));
    } catch (err) {
      console.error('Error fetching attendance:', err);
    }
  };

  const toggleStudentExpansion = (studentId) => {
    if (expandedStudent === studentId) {
      setExpandedStudent(null);
    } else {
      setExpandedStudent(studentId);
      if (!attendanceData[studentId]) {
        fetchAttendance(studentId);
      }
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase())
  );

  // Generate dates for current month and year
  const generateMonthDates = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const dates = [];
    
    for (let day = 1; day <= daysInMonth; day++) {
      dates.push(new Date(currentYear, currentMonth, day));
    }
    
    return dates;
  };

  const monthDates = generateMonthDates();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleCurrentMonth = () => {
    const now = new Date();
    setCurrentMonth(now.getMonth());
    setCurrentYear(now.getFullYear());
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

  return (
    <div className="students-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem 0'
    }}>
      <div className="container">
        {/* Header Section */}
        <div className="card border-0 shadow mb-5" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '15px',
          overflow: 'hidden'
        }}>
          <div className="card-body text-center py-4">
            <h1 className="text-white mb-0">
              <i className="bi bi-people-fill me-2"></i>
              Student Management
            </h1>
            <p className="text-white-50 mb-0">View and manage all registered students</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="card border-0 shadow mb-4">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-md-0">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search students by name or email..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ borderRadius: '0 8px 8px 0' }}
                  />
                </div>
              </div>
              <div className="col-md-4 text-md-end">
                <span className="badge bg-primary px-3 py-2">
                  <i className="bi bi-people me-1"></i>
                  {filteredStudents.length} {filteredStudents.length === 1 ? 'Student' : 'Students'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Students List */}
        {filteredStudents.length > 0 ? (
          <div className="row row-cols-1 g-4">
            {filteredStudents.map((student) => (
              <div key={student._id} className="col">
                {/* Student Card */}
                <div className="card border-0 shadow-sm" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  borderRadius: '12px',
                }}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="d-flex align-items-center mb-3">
                          <div className="rounded-circle bg-light p-3 me-3">
                            <i className="bi bi-person-circle fs-1"></i>
                          </div>
                          <div>
                            <h4 className="mb-1">{student.name}</h4>
                            <p className="mb-1">
                              <span className="badge bg-info me-2">ID: {student.studentId}</span>
                              <span className="badge bg-secondary">Phone: {student.phone || 'N/A'}</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <h6 className="text-dark">
                            <i className="bi bi-book text-primary me-2"></i>
                            Enrolled Courses
                          </h6>
                          {student.courses?.length > 0 ? (
                            <ul className="list-group list-group-flush">
                              {student.courses.map((course, i) => (
                                <li key={i} className="list-group-item bg-transparent px-0 py-2">
                                  <div className="d-flex justify-content-between">
                                    <span>{course.title}</span>
                                    <small className="text-muted">{course.duration}</small>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="alert alert-light py-2 mb-0">
                              <small className="text-muted">No courses enrolled</small>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="col-md-4 d-flex flex-column justify-content-between">
                        <div>
                          <p className="mb-1">
                            <i className="bi bi-envelope text-primary me-2"></i>
                            {student.email}
                          </p>
                          <p className="mb-1">
                            <i className="bi bi-person-badge text-primary me-2"></i>
                            Trainer: {student.trainerName || 'N/A'}
                          </p>
                          <p className="mb-3">
                            <i className="bi bi-building text-primary me-2"></i>
                            Institution: {student.institution?.name || 'N/A'}
                          </p>
                        </div>
                        
                        <div className="d-flex flex-column gap-2">
                          <button
                            className="btn btn-primary"
                            onClick={() => navigate(`/admin/student/${student._id}`)}
                          >
                            <i className="bi bi-eye me-2"></i>View Details
                          </button>
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => toggleStudentExpansion(student._id)}
                          >
                            <i className={`bi ${expandedStudent === student._id ? 'bi-chevron-up' : 'bi-chevron-down'} me-2`}></i>
                            {expandedStudent === student._id ? 'Hide' : 'Show'} Attendance
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attendance Card - Separate from Student Card */}
                {expandedStudent === student._id && (
                  <div className="card mt-3 border-0 shadow-sm">
                    <div className="card-header bg-light d-flex justify-content-between align-items-center">
                      <button 
                        className="btn btn-sm btn-outline-primary"
                        onClick={handlePrevMonth}
                      >
                        <i className="bi bi-chevron-left"></i>
                      </button>
                      <h5 className="mb-0">
                        <i className="bi bi-calendar-check me-2"></i>
                        Attendance Records - {monthNames[currentMonth]} {currentYear}
                        <button 
                          className="btn btn-sm btn-outline-info ms-2"
                          onClick={handleCurrentMonth}
                        >
                          Current Month
                        </button>
                      </h5>
                      <button 
                        className="btn btn-sm btn-outline-primary"
                        onClick={handleNextMonth}
                      >
                        <i className="bi bi-chevron-right"></i>
                      </button>
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table table-bordered mb-0">
                          <thead className="bg-light">
                            <tr className='text-center'>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Grooming</th>
                              <th>Remarks</th>
                            </tr>
                          </thead>
                          <tbody>
                            {monthDates.map((date, i) => {
                              const currentDate = new Date(date);
                              currentDate.setHours(0, 0, 0, 0);
                              
                              const attendanceRecord = attendanceData[student._id]?.find(record => {
                                const recordDate = new Date(record.date);
                                recordDate.setHours(0, 0, 0, 0);
                                return recordDate.getTime() === currentDate.getTime();
                              });
                              const status = attendanceRecord?.status || 'Not Marked';
                              const grooming = attendanceRecord?.groomingStatus || 'Not Marked';
                              const remarks = attendanceRecord?.remarks || '-';
                              
                              let statusClass = '';
                              switch (status.toLowerCase()) {
                                case 'present':
                                  statusClass = 'bg-success text-white';
                                  break;
                                case 'absent':
                                  statusClass = 'bg-danger text-white';
                                  break;
                                case 'late':
                                  statusClass = 'bg-warning text-dark';
                                  break;
                                case 'holiday':
                                  statusClass = 'bg-info text-white';
                                  break;
                                default:
                                  statusClass = 'bg-light text-dark';
                              }

                              let groomingClass = '';
                              switch (grooming.toLowerCase()) {
                                case 'present':
                                  groomingClass = 'bg-success text-white';
                                  break;
                                case 'absent':
                                  groomingClass = 'bg-danger text-white';
                                  break;
                                default:
                                  groomingClass = 'bg-light text-dark';
                              }

                              return (
                                <tr key={i}>
                                  <td className='text-center'>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</td>
                                  <td className={`text-center ${statusClass}`}>
                                    {status}
                                  </td>
                                  <td className={`text-center ${groomingClass}`}>
                                    {grooming}
                                  </td>
                                  <td className='text-center'>{remarks}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="card border-0 shadow">
            <div className="card-body text-center py-5">
              <i className="bi bi-people text-muted" style={{ fontSize: '3rem' }}></i>
              <h5 className="mt-3 text-muted">No students found</h5>
              {search && (
                <button 
                  className="btn btn-sm btn-outline-primary mt-2"
                  onClick={() => setSearch('')}
                >
                  Clear search
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}