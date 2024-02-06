// Footer.js or Footer.tsx if using TypeScript
import React from "react";
import "./Footer.css"; // Ensure to create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-heading">Services</h4>
          <a href="#" className="footer-link">
            Web Development
          </a>
          <a href="#" className="footer-link">
            Mobile Development
          </a>
          <a href="#" className="footer-link">
            Design
          </a>
          <a href="#" className="footer-link">
            Marketing
          </a>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Company</h4>
          <a href="#" className="footer-link">
            About Us
          </a>
          <a href="#" className="footer-link">
            Our Team
          </a>
          <a href="#" className="footer-link">
            Careers
          </a>
          <a href="#" className="footer-link">
            Contact
          </a>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
            <a href="#" className="social-link">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <p>© 2024 Your Company. All rights reserved.</p>
        <a href="#" className="legal-link">
          Privacy Policy
        </a>
        <a href="#" className="legal-link">
          Terms of Use
        </a>
      </div>
    </footer>
  );
};

export default Footer;
