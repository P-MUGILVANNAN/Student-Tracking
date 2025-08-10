import React from 'react';
import { Link } from 'react-router-dom';

function PythonCourseView() {
  const courses = [
    {
      id: 1,
      name: 'HTML',
      icon: 'bi-filetype-html',
      color: 'bg-danger',
      description: 'Learn the foundation of web development with HTML5',
      level: 'Beginner',
    },
    {
      id: 2,
      name: 'CSS',
      icon: 'bi-filetype-css',
      color: 'bg-primary',
      description: 'Style your websites beautifully using CSS3',
      level: 'Beginner',
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: 'bi-filetype-js',
      color: 'bg-warning',
      description: 'Add interactivity and logic to your web pages',
      level: 'Intermediate',
    },
    {
      id: 4,
      name: 'Bootstrap',
      icon: 'bi-bootstrap',
      color: 'bg-purple',
      description: 'Build responsive websites quickly with Bootstrap 5',
      level: 'Beginner',
    },
    {
      id: 5,
      name: 'React',
      icon: 'bi-filetype-jsx',
      color: 'bg-info',
      description: 'Create dynamic single-page applications with React.js',
      level: 'Intermediate',
    },
    {
      id: 6,
      name: 'Python',
      icon: 'bi-filetype-py',
      color: 'bg-success',
      description: 'Build scalable backend applications with Python',
      level: 'Intermediate',
    },
    {
      id: 7,
      name: 'Django',
      icon: 'bi-diagram-3',
      color: 'bg-secondary',
      description: 'Develop fast and minimal backend APIs with Django',
      level: 'Intermediate',
    },
    {
      id: 8,
      name: 'MySQL',
      icon: 'bi-database',
      color: 'bg-blue',
      description: 'Master database management with MySQL',
      level: 'Beginner',
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">Python Full Stack Courses</h1>
        <p className="lead text-muted">
          Master both frontend and backend technologies to become a job-ready Python Full Stack Developer
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <span className="badge bg-light text-dark p-2">
            <i className="bi bi-people-fill me-2"></i>4,000+ Students
          </span>
          <span className="badge bg-light text-dark p-2">
            <i className="bi bi-book-half me-2"></i>80+ Lessons
          </span>
          <span className="badge bg-light text-dark p-2">
            <i className="bi bi-award me-2"></i>Certified Courses
          </span>
        </div>
      </div>

      <div className="row g-4">
        {courses.map((course) => (
          <div key={course.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow-sm border-0 overflow-hidden">
              <div className={`${course.color} text-white py-4`}>
                <div className="text-center">
                  <i className={`bi ${course.icon} display-3`}></i>
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title fw-bold mb-3">{course.name}</h3>
                <p className="card-text text-muted mb-4">{course.description}</p>

                <div className="d-flex justify-content-between align-items-center">
                  <span className={`badge ${course.color} bg-opacity-10 text-${course.color.split('-')[1]} p-2`}>
                    {course.level}
                  </span>
                  <Link
                    to={`/courses/${course.name.toLowerCase().replace('.', '').replace(' ', '-')}`}
                    className="btn btn-outline-primary btn-sm stretched-link"
                  >
                    Explore <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5 pt-4">
        <h3 className="mb-4">Want to become a Full Stack Developer?</h3>
        <a href="https://wa.me/918940668116">
          <button className="btn btn-primary px-4 py-2">
            <i className="bi bi-chat-left-text me-2"></i> Contact Our Advisors
          </button>
        </a>
      </div>
    </div>
  );
}

export default PythonCourseView;
