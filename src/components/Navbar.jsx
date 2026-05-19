import React, { useState } from "react";
import "../styles/Navbar.css";
import mainLogo from '../images/madeforurl-01.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Main Logo */}
      <a href="#home" className="brand">
        <img
            className="main-logo"
            src={mainLogo}
            alt="main logo"
          />
      </a>

      {/* Burger */}
      <div
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>

      {/* Desktop Links */}
      <div className="nav-links desktop-nav">
        <a href="#how">Process</a>
        <a href="#why">Why Us</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <a href="#contact" className="cta-link">
          Contact
        </a>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${isMenuOpen ? "visible" : "hidden"}`}>
      <a href="#how" onClick={handleLinkClick}>Process</a>
        <a href="#why" onClick={handleLinkClick}>Why Us</a>
        <a href="#pricing" onClick={handleLinkClick}>Pricing</a>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#contact" onClick={handleLinkClick} className="cta-link">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
