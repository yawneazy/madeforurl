import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Connect.css';
function Connect() {
  return (
    <section className="connect-section">
      <h2>Ready to start?</h2>
      <p>Let’s connect and build something for your business.</p>

      <NavLink to="/contact" className="connect-button">
        Connect
      </NavLink>
    </section>
  );
}

export default Connect;