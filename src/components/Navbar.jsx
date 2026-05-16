import React, { useState } from "react";
import "../styles/Navbar.css";

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

      {/* Brand */}
      <a href="#home" className="brand">
        Made For Url
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
        <a href="#why">Why</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <a href="#contact" className="cta-link">
          Contact
        </a>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${isMenuOpen ? "visible" : "hidden"}`}>
      <a href="#how" onClick={handleLinkClick}>Process</a>
        <a href="#why" onClick={handleLinkClick}>Why</a>
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
