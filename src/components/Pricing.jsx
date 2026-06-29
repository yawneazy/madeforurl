import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSeedling, FaChartLine, FaRocket} from "react-icons/fa";
import '../styles/Pricing.css';

function Pricing() {
  const navigate = useNavigate();

  const handleStartProject = (planName) => {
    navigate(`/contact?plan=${encodeURIComponent(planName)}`);
  };

  const plans = [
    {
      name: "Personal",
      icon: <FaUser />,
      setup: "$500",
      monthly: "$25/month",
      features: [
        "Clean custom design",
        "Portfolio or gallery",
        // "Contact form",
        "Domain + hosting included",
        "1–2 small edits/month",
      ],
      who: "Perfect for artists, creatives, and personal brands who need a clean online presence.",
    },
    {
      name: "Starter",
      icon: <FaSeedling />,
      setup: "$800",
      monthly: "$50/month",
      features: [
        "Clean custom design",
        "Simple business site",
        "Contact form",
        "Domain + hosting included",
        "SEO basics",
        "1–2 edits/month",
      ],
    },
    {
      name: "Growth",
      icon: <FaChartLine />,
      setup: "$1,000",
      monthly: "$100/month",
      features: [
        "Custom design",
        "Multi-section business site",
        "Contact form + integrations",
        "Domain + hosting included",
        "SEO basics",
        "Analytics setup",
        "5–8 edits/month",
      ],
    },
    {
      name: "Growth+",
      icon: <FaRocket />,
      setup: "$1500",
      monthly: "$150/month",
      popular: true,
      features: [
        "Premium custom design",
        "Full custom build",
        "Priority support",
        "Domain + hosting included",
        "SEO + analytics",
        "Ongoing improvements",
        "Unlimited edits (fair use)",
      ],
    },
  ];

    return (
      <section className="pricing" id="pricing">
  <h1 className="pricing-title">Pricing</h1>
  <p className="pricing-note">
    🌱 Founding Client Pricing — special rates for the first 10 clients
  </p>

  <div className="pricing-container">
    {plans.map((plan, index) => (
      <div key={index} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
        {plan.popular && <div className="badge">Best Value</div>}
        <div className="plan-icon">{plan.icon}</div>
        <h3 className="plan-name">{plan.name}</h3>
        <p className="setup-price">{plan.setup}</p>
        <p className="setup-label">one-time setup</p>
        <p className="monthly-price">{plan.monthly}</p>
        <ul className="features-list">
          {plan.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        {plan.who && <p className="who-text">{plan.who}</p>}
        <button className="start-button" onClick={() => handleStartProject(plan.name)}>
  Start a project
</button>
        {/* <button className="start-button">Start a project</button> */}
      </div>
    ))}
    {/* <p className="setup-only-note">
  Just need the site built? Ask about our <strong>Setup Only</strong> option — 
  one-time build with no monthly commitment. <a href="/contact?plan=Setup Only">Get a quote →</a>
</p> */}
  </div>

  {/* <div className="compare-wrapper">
  <button
    className="compare-plans-btn"
    onClick={() => setShowComparison(!showComparison)}
  >
    {showComparison ? "Hide Comparison ↑" : "Compare Plans ↓"}
  </button>
</div> */}

{/* {showComparison && (
  <div className="comparison-table-wrapper">
        <table className="pricing-comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Personal</th>
              <th>Starter</th>
              <th>Growth</th>
              <th className="popular-th">Growth+ ⭐</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Setup Fee</td><td>$500</td><td>$1,500</td><td>$2,500</td><td className="popular-col">$750</td></tr>
            <tr><td>Monthly</td><td>$25/mo</td><td>$50/mo</td><td>$120/mo</td><td className="popular-col">$200/mo</td></tr>
            <tr><td>Domain + Hosting</td><td>✓</td><td>✓</td><td>✓</td><td className="popular-col">✓</td></tr>
            <tr><td>Custom Design</td><td>Clean</td><td>Custom</td><td>Custom</td><td className="popular-col">Premium</td></tr>
            <tr><td>Portfolio / Gallery</td><td>✓</td><td>—</td><td>✓</td><td className="popular-col">✓</td></tr>
            <tr><td>Contact Form</td><td>—</td><td>✓</td><td>✓</td><td className="popular-col">✓</td></tr>
            <tr><td>Integrations</td><td>—</td><td>—</td><td>✓</td><td className="popular-col">✓</td></tr>
            <tr><td>SEO</td><td>—</td><td>Basic</td><td>Basic</td><td className="popular-col">Advanced</td></tr>
            <tr><td>Analytics</td><td>—</td><td>—</td><td>✓</td><td className="popular-col">✓</td></tr>
            <tr><td>Monthly Edits</td><td>1–2</td><td>1–2</td><td>5–8</td><td className="popular-col">Unlimited*</td></tr>
            <tr><td>Priority Support</td><td>—</td><td>—</td><td>—</td><td className="popular-col">✓</td></tr>
            <tr><td>Ongoing Improvements</td><td>—</td><td>—</td><td>—</td><td className="popular-col">✓</td></tr>
          </tbody>
        </table>
        <p className="table-note">* Unlimited edits subject to fair use policy</p>
      </div>
    // )} */}
</section>
);
}
export default Pricing;
