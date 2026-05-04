import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import alyHeadShot from './images/homepic.jpg';
import './App.css';

function App() {

  const plans = [
    {
      name: "Starter",
      setup: "$1,500",
      monthly: "$50/month",
      features: [
        "1–3 pages",
        "Portfolio / personal site",
        "Contact form",
        "1–2 edits/month",
      ],
      // who: "",
    },
    {
      name: "Growth",
      setup: "$2,500",
      monthly: "$120/month",
      features: [
        "5–10 pages",
        "Custom design",
        "SEO basics",
        "Integrations",
        "5–8 edits/month",
      ],
      // who: "",
    }, {
      name: "Pro",
      setup: "$750",
      monthly: "$200/month",
      features: [
        "Full site build",
        "Priority support",
        "Ongoing improvements",
        "Analytics help",
        "Unlimited edits (fair use)",
      ],
      // who: "",
    },
    {
      name: "Personal",
      setup: "$500",
      monthly: "$15/month",
      features: [
        "1–3 pages",
        "clean custom design",
        "portfolio/gallery",
        "contact form", 
        "1-2 edits/month"
      ],
      who: "Perfect for individuals who need a simple, clean online presence. Ideal for portfolios, artists, and personal brands looking to showcase their work without the complexity of a full business website.",
    },
  ]
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

      {/* ================= HOW IT WORKS ================= */}
      <section className="how" id="home">
        <div className="how-content">
          <h1 className="how-title">
           How it works
          </h1>

          <p className="how-subtext">
            A simple, guided process from your idea, to launch - no stress, no confusion.
          </p>

          <div className="how-actions">
           <h3>1. Let's Meet!</h3>
           <p>Let's get to know each other with a quick call. This will help me understand your goals, brand and vision. 
           We’ll review your current website (if you have one), domain setup, and talk through design preferences like style, colors, and functionality. </p>

           <h3>2. Design Mockup</h3>
           <p>   I create a custom design in Figma based on your input. 
      You’ll be able to see the layout, structure, and overall direction before anything is built.
 </p>

 <h3>3. Feedback & Approval</h3>
 <p>
      You review the design and request any changes. 
      Once you're happy with the direction, we lock in the design and move into development.
    </p>

    <h3>4. Build & Development</h3>
 <p>
 I turn the approved design into a fully functional website. 
      This includes mobile optimization, forms, and all necessary integrations.
</p>

<div>
    <h3>5. Launch</h3>
    <p>
      After final review, your site goes live. 
      I handle the setup so everything runs smoothly on your domain.
    </p>
  </div>
  <div>
    <h3>6. Ongoing Support</h3>
    <p>
      Need updates or changes? I’ve got you covered. 
      Depending on your plan, I’ll continue to help maintain and improve your site.
    </p>
  </div>


            {/* <button className="cta-button">
              Start a Project
            </button> */}

            {/* <a href="#next-steps" className="secondary-link">
              Learn More ↓
            </a> */}
          </div>
        </div>
      </section>

       {/* ================= PRICING ================= */}
       {/* <section className="pricing" id="home"> */}
        {/* <div className="pricing-content">
          <h1 className="pricing-title">
            Pricing
          </h1>

          <p className="pricing-subtext">
            Packages
          </p> */}

          {/* <div className="pricing-actions">
            <div> */}
                {/* <h3> Starter Package </h3>
                <p></p>
            </div> */}

            <section className="pricing" id="home">
      <h2>Pricing</h2>
      <div className="pricing-container">
  {plans.map((plan, index) => (
    <div
      key={index}
      className={`pricing-card ${plan.popular ? "popular" : ""}`}
    >
      {plan.popular && (
        <div className="badge">Most Popular</div>
      )}

      <h3 className="plan-name">{plan.name}</h3>

      <p className="setup-price">{plan.setup} setup</p>
      <p className="monthly-price">{plan.monthly}</p>

      <ul className="features-list">
        {plan.features.map((feature, i) => (
          <li key={i}>✓ {feature}</li>
        ))}
      </ul>

      <button className="pricing-button">
        Get Started
      </button>
    </div>
  ))}
</div>
    {/* </section> */}
            {/* <button className="cta-button">
              Start a Project
            </button> */}

            {/* <a href="#next-steps" className="secondary-link">
              Learn More ↓
            </a> */}
          {/* </div>
        </div> */}
      </section>

       {/* ================= ABOUT ================= */}
     <section className="bio-content" id="about">
          <img
            className="home-bio-photo"
            src={alyHeadShot}
            alt="Aly headshot"
          />

          <div className="bio-text">
            <h2>Who I Am</h2>

            <p>
              I'm Alyssa! I'm a Frontend Developer with a B.S. degree in Computer Science
              from the University of Arizona and an M.S. in User Experience.  
            </p>
          </div>
        </section>

      {/* ================= NEXT STEPS ================= */}
      <section id="next-steps" className="content-section">
        <div id="docs">
          {/* <h2>Documentation</h2>
          <p>Your questions, answered</p> */}
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true"></svg>
          <h2>Connect with me</h2>
          <p>Join the community</p>

          {/* <ul>
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
          </ul> */}
        </div>
      </section>



      <div className="ticks"></div>

      <section id="spacer"></section>

      <Footer />
    </Router>
  );
}

export default App;