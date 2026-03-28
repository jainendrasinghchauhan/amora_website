import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Premium quality products with sustainable practices for a better tomorrow.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a onClick={() => scrollToSection('banner')}>Home</a></li>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📞 Phone: <a href="tel:+919891235060">+91-9891235060</a></p>
            <p>📧 Email: <a href="mailto:info@premiumproducts.com">info@premiumproducts.com</a></p>
            <p>📍 Address: Industrial Area, Delhi-110039</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-icon" title="Facebook">f</a>
              <a href="#" className="social-icon" title="LinkedIn">in</a>
              <a href="#" className="social-icon" title="Twitter">tw</a>
              <a href="#" className="social-icon" title="Instagram">ig</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Amoura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
