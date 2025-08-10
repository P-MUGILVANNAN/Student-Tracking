import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/course-view">
          <img 
            src="https://fiit.co.in/wp-content/uploads/2024/10/fiit-logo.png" 
            alt="FIIT Logo" 
            height="40"
            className="d-inline-block align-top"
          />
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className="nav-link d-flex align-items-center px-3 fw-medium" 
                to="/course-view"
              >
                <i className="bi bi-collection-play me-2"></i>
                Courses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;