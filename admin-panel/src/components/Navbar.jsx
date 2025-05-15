import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/admin">
          <i className="bi bi-person-gear text-warning me-2 fs-4"></i>
          <span className="text-warning">Trainer Dashboard</span>
        </Link>
        
        <button 
          className="navbar-toggler border-warning" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasNavbar"
        >
          <i className="bi bi-list text-warning"></i>
        </button>
        
        <div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasNavbar">
          <div className="offcanvas-header border-bottom border-secondary">
            <h5 className="offcanvas-title text-warning" id="offcanvasNavbarLabel">
              <i className="bi bi-person-gear me-2"></i>Trainer Dashboard
            </h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item hover-effect">
                <Link className="nav-link text-white py-3 d-flex align-items-center" to="/admin">
                  <i className="bi bi-speedometer2 text-warning me-3 fs-5"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              
              <li className="nav-item hover-effect">
                <Link className="nav-link text-white py-3 d-flex align-items-center" to="/admin/add-student">
                  <i className="bi bi-person-plus text-warning me-3 fs-5"></i>
                  <span>Add Student</span>
                </Link>
              </li>
              
              <li className="nav-item hover-effect">
                <Link className="nav-link text-white py-3 d-flex align-items-center" to="/admin/students">
                  <i className="bi bi-people-fill text-warning me-3 fs-5"></i>
                  <span>Students</span>
                </Link>
              </li>
              
              <li className="nav-item hover-effect">
                <Link className="nav-link text-white py-3 d-flex align-items-center" to="/admin/addcourse">
                  <i className="bi bi-journal-plus text-warning me-3 fs-5"></i>
                  <span>Add Course Content</span>
                </Link>
              </li>
              
              <li className="nav-item hover-effect">
                <Link className="nav-link text-white py-3 d-flex align-items-center" to="/admin/add-syllabus">
                  <i className="bi bi-file-earmark-text text-warning me-3 fs-5"></i>
                  <span>Add Syllabus</span>
                </Link>
              </li>
              <li className="nav-item hover-effect">
                <Link className="nav-link text-white py-3 d-flex align-items-center" to="/admin/attendance">
                  <i className="bi bi-file-earmark-text text-warning me-3 fs-5"></i>
                  <span>Attendance</span>
                </Link>
              </li>
              
              <li className="nav-item hover-effect">
                <Link className="nav-link text-danger py-3 d-flex align-items-center" to="/admin/logout">
                  <i className="bi bi-box-arrow-right me-3 fs-5"></i>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CSS for hover effects */}
      <style jsx>{`
        .hover-effect {
          transition: all 0.3s ease;
          border-radius: 4px;
        }
        .hover-effect:hover {
          background-color: rgba(255, 193, 7, 0.1);
          transform: translateX(5px);
        }
        .nav-link:hover span {
          color: #ffc107 !important;
        }
        .offcanvas {
          width: 280px !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;