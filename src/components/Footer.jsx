import React from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaInstagram} from "react-icons/fa";
import mainLogo from '../images/madeforurl-01.png' 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
           {/* Main Logo */}
      <a href="#home" >
        <img
            className="main-logo"
            src={mainLogo}
            alt="main logo"
          />
      </a>
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
        <p>© {new Date().getFullYear()} MadeForURL Web Services | Privacy Policy | Terms of Use</p>
        <p className="built-by">
          Built by <a href="https://alyolson.com">Alyssa</a>
        </p>
      </div>
    </footer>
  );
}