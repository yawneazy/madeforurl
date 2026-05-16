import React from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>MadeForURL</h3>
          <p>Custom websites built for real growth.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#how">Process</a>
          <a href="#why">Why</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>

        <div className="footer-contact">
          {/* <a href="mailto:madeforurl@gmail.com"></a> */}
          <a href="https://www.linkedin.com/in/alyssayanezolson/"
  target="_blank"
  rel="noreferrer"
  className="social-link">
      <FaLinkedin className="social-icon" />
      </a>
          <a href="https://www.instagram.com/madeforurl"
  target="_blank"
  rel="noreferrer"
  className="social-link">

  <FaInstagram className="social-icon" />
</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MadeForURL. All rights reserved.</p>

        <p className="built-by">
          Built by <a href="https://yourportfolio.com">Alyssa</a>
        </p>
      </div>
    </footer>
  );
}