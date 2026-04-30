import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} MadeForURL. All rights reserved.</p>
      </div>
    </footer>
  );
}