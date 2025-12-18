
// ============================================
// ENHANCED FOOTER COMPONENT
// ============================================
// File: src/components/Footer.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <span className='material-symbols-outlined'>restaurant</span>
              <h3>Foodies</h3>
            </div>
            <p className="footer-description">
              Experience the finest dining with our carefully crafted menu. 
              Fresh ingredients, expert chefs, and unforgettable flavors.
            </p>
            <div className="social-links">
              <a href="#" className="social-link facebook" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link twitter" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link instagram" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link whatsapp" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/menu">Menu</NavLink></li>
              <li><NavLink to="/service">Services</NavLink></li>
              <li><NavLink to="/reservation">Reservations</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/menu">Dine In</Link></li>
              <li><Link to="/menu">Takeaway</Link></li>
              <li><Link to="/menu">Home Delivery</Link></li>
              <li><Link to="/service">Catering</Link></li>
              <li><Link to="/service">Event Hosting</Link></li>
              <li><Link to="/service">Private Dining</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className='material-symbols-outlined'>location_on</span>
                <div>
                  <strong>Address</strong>
                  <p>XYZ Road, ABC Building<br/>Bangalore, Karnataka, IN</p>
                </div>
              </div>
              <div className="contact-item">
                <span className='material-symbols-outlined'>call</span>
                <div>
                  <strong>Phone</strong>
                  <p>+1 9876543210</p>
                </div>
              </div>
              <div className="contact-item">
                <span className='material-symbols-outlined'>mail</span>
                <div>
                  <strong>Email</strong>
                  <p>info@foodies.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className='material-symbols-outlined'>schedule</span>
                <div>
                  <strong>Hours</strong>
                  <p>Mon - Sun: 11 AM - 11 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Foodies. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms">Terms of Service</Link>
              <span>•</span>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
          <div className="payment-methods">
            <span>We Accept:</span>
            <div className="payment-icons">
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-amex"></i>
              <i className="fab fa-cc-paypal"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;