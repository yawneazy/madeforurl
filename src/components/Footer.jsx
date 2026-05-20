import React from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaInstagram} from "react-icons/fa";
import mainLogo from '../images/madeforurl-01.png' 
import { NavLink } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

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
      {/* Built for your brand. Made for your URL. */}
          <p>Custom websites made for your URL.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#how">Process</a>
          <a href="#why">Why</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>

        <div className="footer-contact">
          <a href="mailto:madeforurl@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="social-link">
            <IoIosMail className="social-icon"/>
            madeforurl@gmail.com
      </a>

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
        <p>© {new Date().getFullYear()} MadeForURL Web Services | {" "}
    <NavLink to="/privacypolicy">Privacy Policy</NavLink> |{" "} 
    <NavLink to="/terms">Terms of Use</NavLink> </p>
        <p className="built-by">
          Built by <a href="https://alyolson.com">Alyssa</a>
        </p>
      </div>
    </footer>
  );
}