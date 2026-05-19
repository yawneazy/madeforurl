import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import mainLogo from "../images/madeforurl-01.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // 🔥 scroll helper that always works
  const goToSection = (id) => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <NavLink to="/" className="brand" onClick={closeMenu}>
        <img className="main-logo" src={mainLogo} alt="logo" />
      </NavLink>

      {/* BURGER */}
      <div
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="burger-bar" />
        <div className="burger-bar" />
        <div className="burger-bar" />
      </div>

      {/* DESKTOP NAV */}
      <div className="nav-links desktop-nav">
        <button onClick={() => goToSection("how")}>Process</button>
        <button onClick={() => goToSection("why")}>Why Us</button>
        <button onClick={() => goToSection("pricing")}>Pricing</button>
        <button onClick={() => goToSection("about")}>About</button>

        <NavLink
          to="/contact"
          className="contact-form"
          onClick={closeMenu}
        >
          Request A Consultation
        </NavLink>
      </div>

      {/* MOBILE NAV */}
      <div className={`mobile-nav ${isMenuOpen ? "visible" : ""}`}>
        <button onClick={() => goToSection("how")}>Process</button>
        <button onClick={() => goToSection("why")}>Why Us</button>
        <button onClick={() => goToSection("pricing")}>Pricing</button>
        <button onClick={() => goToSection("about")}>About</button>

        <NavLink to="/contact" onClick={closeMenu}>
          Request A Consultation
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;