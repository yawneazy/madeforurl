import React from 'react';
import '../styles/Pricing.css';

function Pricing() {
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
        <section className="pricing" id="pricing">
        <h1 className="pricing-title">Pricing</h1>
        <p className="pricing-note">
        Founding Client Pricing - I’m offering a special for the first 25 clients.
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
        <button className="start-button">
                Start a project
              </button>
      </div>
    ))}
  </div>
        </section>
    );
}
export default Pricing;