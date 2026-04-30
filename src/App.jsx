import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">
            Websites made from scratch — no templates.
            <br />
            <b>Made just for you.</b>
          </h1>

          <p className="hero-subtext">
            Modern, custom-built web experiences designed to fit your brand,
            your goals, and your audience.
          </p>

          <div className="hero-actions">
            <button className="cta-button">
              Start a Project
            </button>

            <a href="#next-steps" className="secondary-link">
              Learn More ↓
            </a>
          </div>
        </div>
      </section>

      {/* ================= NEXT STEPS ================= */}
      <section id="next-steps" className="content-section">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true"></svg>
          <h2>Connect with us</h2>
          <p>Join the community</p>

          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                X.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer"></section>

      <Footer />
    </Router>
  );
}

export default App;