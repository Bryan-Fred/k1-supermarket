import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="k1-footer">
      <div className="k1-footer-container">
        <div className="k1-footer-section">
          <h4>About Us</h4>
          <p>K1 Supermarket is your one-stop shop for all your daily needs. We offer a wide range of products from fresh produce to household essentials, all at unbeatable prices.</p>
        </div>
        <div className="k1-footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@k1supermarket.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Market Street, City, Country</p>
        </div>
        <div className="k1-footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="k1-footer-section">
          <h4>Follow Us</h4>
          <div className="k1-footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="k1-footer-bottom">
        <p>&copy; 2024 K1 Supermarket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
