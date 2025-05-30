import React from 'react';

function Footer() {
  return (
    <footer className="text-white pt-4 pb-3 mt-5" style={{
      background: 'linear-gradient(135deg, #1a2a6c 0%, #2a5298 50%, #3a7bd5 100%)',
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <img 
                src="https://fiit.co.in/wp-content/uploads/2024/10/fiit-logo.png" 
                alt="FIIT Logo" 
                className="img-fluid me-2" 
                style={{
                  maxHeight: '30px',
                }}
              />
              <h5 className="mb-0" style={{ color: '#fff' }}>FIIT FORMACION PVT LTD</h5>
            </div>
            <p className="small mt-2 mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              The most promising training and placement institute of IT.
            </p>
          </div>
          
          <div className="col-md-6 text-md-end">
            <div className="social-icons mb-3">
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
            <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <i className="bi bi-code-slash me-1"></i>
              Designed by <span style={{ color: '#80d0ff' }}>Mugilvannan P</span>
            </p>
            <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <i className="bi bi-c-circle me-1"></i>
              Copyright 2025. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="row mt-3">
          <div className="col-12">
            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} className="mb-2" />
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="mb-2 mb-md-0">
                <a href="#" className="me-3" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>Privacy Policy</a>
                <a href="#" className="me-3" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>Terms of Service</a>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>Contact Us</a>
              </div>
              <div>
                <span className="badge" style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  fontWeight: '500'
                }}>
                  <i className="bi bi-lightning-charge-fill me-1"></i>
                  Version 1.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;