import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <Link to="/" className="d-flex align-items-center mb-3 text-decoration-none">
              <img
                src="https://fiit.co.in/wp-content/uploads/2024/10/fiit-logo.png"
                alt="FIIT Logo"
                height="40"
                className="me-2"
              />
              <span className="fs-5 fw-bold text-white">FIIT</span>
            </Link>
            <p className="text-light">
              Empowering learners with quality education and cutting-edge technology courses.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/fiit.co.in" target='_blank' className="text-white me-3" style={{ fontSize: '1.2rem' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://fiit.co.in/" target='_blank' className="text-white me-3" style={{ fontSize: '1.2rem' }}>
                <i class="bi bi-browser-chrome"></i>
              </a>
              <a href="https://www.linkedin.com/company/fiit-formacion/" target='_blank' className="text-white me-3" style={{ fontSize: '1.2rem' }}>
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/fiit.co.in/" target='_blank' className="text-white" style={{ fontSize: '1.2rem' }}>
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Courses */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Popular Courses</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/courses/html" className="text-light text-decoration-none">HTML</Link></li>
              <li className="mb-2"><Link to="/courses/css" className="text-light text-decoration-none">CSS</Link></li>
              <li className="mb-2"><Link to="/courses/javascript" className="text-light text-decoration-none">JavaScript</Link></li>
              <li className="mb-2"><Link to="/courses/react" className="text-light text-decoration-none">React JS</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled text-light">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                NO.1/100, Poonamallee Main Road, Iyyappanthangal
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone-fill me-2 text-primary"></i>
                +91 9361602101
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope-fill me-2 text-primary"></i>
                fiit.iyyappanthangal@gmail.com
              </li>
              <li>
                <i className="bi bi-clock-fill me-2 text-primary"></i>
                Mon-Sat: 9AM - 9PM
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 bg-secondary" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-light">
              &copy; {new Date().getFullYear()} FIIT. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="/course-view" className="text-light text-decoration-none me-3">Privacy Policy</Link>
            <Link to="/course-view" className="text-light text-decoration-none me-3">Terms of Service</Link>
            <Link to="/course-view" className="text-light text-decoration-none">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;