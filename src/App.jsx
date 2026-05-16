import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import alyHeadShot from './images/homepic.jpg';
import './App.css';

function App() {
  const features = [
    {
      title: "Custom-Tailored Design",
      description:
        "Your website is built around your business, brand, and audience — not a one-size-fits-all template.",
    },
    {
      title: "Faster, Modern Technology",
      description:
        "Built with modern web technologies for better performance, responsiveness, and scalability.",
    },
    {
      title: "Easier To Expand",
      description:
        "Need booking systems, custom forms, integrations, or advanced functionality later? MadeforURL gives you room to grow without rebuilding your website.",
    },
    {
      title: "More Personal Support",
      description:
        "Work directly with someone who understands your business and goals instead of relying on forums or automated support.",
    },
    {
      title: "Better Brand Identity",
      description:
        "Your website should feel unique and professional — not like thousands of other template-based sites.",
    },
  ];

  const comparisonRows = [
    ["Built around your brand", "✓", "Limited by templates"],
  ["Easy to grow later", "✓", "Often restrictive"],
  ["You talk directly to me", "✓", "Platform support only"],
  ["Full customization", "✓", "Limited"],
  ["Actually unique design", "✓", "Harder to stand out"],
  ["You fully own it", "✓", "Platform-dependent"],
    // ["Custom Design", "✅", "Limited by templates"],
    // ["Scalable Features", "✅", "Limited by platform rules"],
    // ["Direct Support", "✅", "Platform support only"],
    // ["Advanced Customization", "✅", "Limited"],
    // ["Unique Branding", "✅", "Harder to stand out"],
    // ["Full Ownership & Flexibility", "✅", "Platform-dependent"],
  ];

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
    },
    {
      name: "Personal",
      setup: "$500",
      monthly: "$5/month",
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
          I build websites made for your <span className="accent">URL</span>
            {/* Made for your <span className="accent">URL</span> */}
            {/* , because it deserves to stand out. */}
            {/* Made for your URL, made to grow your business. */}

            {/* Your URL deserves something made for it.  */}
          </h1>

          <p className="hero-subtext">
          Custom-built, clean, and designed to actually fit your business — not a template you’ve seen a hundred times.
          {/* Because it deserves to stand out. */}
            {/* Because your URL is your business. */}
            {/* Because it deserves something better. */}
          {/* I design and build custom websites that actually fit your brand. */}
          </p>

          <div className="hero-actions">
            <button className="start-button">
              Start a Project
            </button>

            <a href="#next-steps" className="secondary-link">
              Learn More ↓
            </a>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="how" id="how">
        <div className="how-content">
          <h1 className="how-title">
           How it works
          </h1>

          <p className="how-subtext">
            A simple, guided process from your idea, to launch - no stress, no confusion.
          </p>

          <div className="how-actions">
            <div className="how-card">
           <h3>1. Let's Talk</h3>
           <p>We’ll start with a quick call so I can understand your business, your goals, and the kind of site you actually need.
We’ll also go over any ideas you already have for design, style, or functionality.</p>
           </div>
           <div className="how-card">
           <h3>2. Design Mockup</h3>
           <p> I'll design your site in Figma so you can see exactly how everything will look
            before any development starts.
 </p>
</div>
<div className="how-card">
 <h3>3. Feedback & Approval</h3>
 <p>
      You review the design and request any changes. 
      Once you're happy with the direction, we lock in the design and move into development.
    </p>
</div>
<div className="how-card">
    <h3>4. Build & Development</h3>
 <p> I take the approved design and turn it into a real, responsive website — optimized for mobile, speed, and usability. 
</p>
</div>
<div className="how-card">
    <h3>5. Launch</h3>
    <p>
      After final review, your site goes live! 
      I handle the setup so everything runs smoothly on your domain.
    </p>
  </div>
  <div className="how-card">
    <h3>6. Ongoing Support</h3>
    <p> If you need updates or changes, I’m available depending on your plan. You’re not left on your own after launch.
    </p>
  </div>
          </div>
        </div>
      </section>

       {/* ================= WHY CHOOSE ================= */}
       <section className="why" id="why">
  <div className="why-container">
    <div className="why-header">
      <h2 className="why-title">
        Why Choose MadeforURL?
      </h2>

      <p className="why-subtext">
      Most website builders are great for getting started, but they can feel limiting once your business starts to grow or you want something more specific.

I build custom websites that give you more control over design, performance, and how your site actually works — without forcing you into a template.
      </p>
    </div>

    <div className="why-grid">
      {features.map((feature, index) => (
        <div
          key={index}
          className="why-card"
        >
          <h3>{feature.title}</h3>

          <p>
            {feature.description}
          </p>
        </div>
      ))}
    </div>

    <div className="comparison-wrapper">
    <p className="comparison-intro">
  Here’s how I approach websites compared to template builders.
  It’s not that tools like Wix are bad — they just aren’t built for flexibility once you start growing.
</p>
      <div className="comparison-header">
        {/* <h3>
          MadeforURL vs Template Builders
        </h3> */}
        <h3>Why I don’t use template builders for client sites</h3>
      </div>

      <div className="comparison-scroll">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>MadeforURL</th>
              <th>Wix / Squarespace</th>
            </tr>
          </thead>

          <tbody>
            {comparisonRows.map((row, index) => (
              <tr key={index}>
                <td className="feature-title">
                  {row[0]}
                </td>

                <td className="feature-good">
                  {row[1]}
                </td>

                <td className="feature-bad">
                  {row[2]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="why-bottom">
      <h3>
        Perfect For Businesses That Want To Grow
      </h3>

      <p>
        MadeforURL is ideal for businesses that want a more
        professional online presence, custom functionality,
        better performance, and a website that can scale over time.
      </p>

      <div className="why-tags">
        {[
          "Professional Branding",
          "Custom Features",
          "Scalable Growth",
          "Direct Support",
          "Modern Performance",
        ].map((item, index) => (
          <span
            key={index}
            className="why-tag"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

{/* ================= PRICING ================= */}

            <section className="pricing" id="pricing">
      <h3>Pricing</h3>
      <p className="pricing-note">
      Founding Client Pricing - I’m offering a discounted setup fee for the first 25 clients while I build out my portfolio.
</p>
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
    </div>
  ))}
</div>
      </section>

       {/* ================= ABOUT ================= */}
     <section className="bio" id="about">
          <img
            className="home-bio-photo"
            src={alyHeadShot}
            alt="Aly headshot"
          />

          <div className="bio-text">
            <h2>About Me</h2>

            <p>
            I'm Alyssa — a Frontend Developer with a B.S. in Computer Science from the University of Arizona and an M.S. in User Experience from Arizona State University.  
</p>
<br/>
<p>
I started MadeForURL because I wanted businesses and creators to have websites that actually reflect their vision — not feel locked into templates or limitations.

I build custom websites that are clean, fast, and designed to grow with your brand, so your online presence feels intentional from day one.
            </p>
          </div>
        </section>

      {/* ================= NEXT STEPS ================= */}
      {/* <section id="next-steps" className="content-section">

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true"></svg>
          {/* <h2>Connect with me</h2> */}
          {/* <p>Join the community</p> */}


      <Footer />
    </Router>
  );
}

export default App;