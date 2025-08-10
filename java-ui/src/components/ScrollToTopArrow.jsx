import React, { useState, useEffect } from 'react';

const ScrollToTopArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style>
        {`
          .scroll-to-top-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #0d6efd;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            opacity: ${showArrow ? '1' : '0'};
            visibility: ${showArrow ? 'visible' : 'hidden'};
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          }
          
          .scroll-to-top-btn:hover {
            background: #0b5ed7;
          }
          
          .bounce-animation {
            animation: bounce 1s infinite;
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          
          /* Mobile responsiveness */
          @media (max-width: 576px) {
            .scroll-to-top-btn {
              width: 45px;
              height: 45px;
              bottom: 15px;
              right: 15px;
            }
          }
        `}
      </style>

      <div 
        className="scroll-to-top-btn"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up bounce-animation fs-5"></i>
      </div>
    </>
  );
};

export default ScrollToTopArrow;