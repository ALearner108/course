// Footer.js

import React from "react";
import "../Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
        <div className="footer-section">
          <h2>Links</h2>
          <p>Home</p>
          <p>Courses</p>
          <p>About Us</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 CourseAn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
