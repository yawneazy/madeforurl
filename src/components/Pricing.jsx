import React, {useState} from 'react';
import { FaUser, FaSeedling, FaChartLine, FaRocket} from "react-icons/fa";
import '../styles/Pricing.css';

function Pricing() {
    const plans = [
        {
          name: "Starter",
          icon: <FaSeedling/>,
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
          icon: <FaChartLine/>,
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
          name: "Growth +",
          icon: <FaRocket/>,
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
          icon: <FaUser/>,
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

      const [showComparison, setShowComparison] = useState(false);

    return (
        <section className="pricing" id="pricing">
        <h1 className="pricing-title">Pricing</h1>
        <p className="pricing-note">
        Founding Client Pricing - I’m offering a special for the first 10 clients.
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
        
        <h3 className="plan-icon">{plan.icon}</h3>
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
  <div className="compare-wrapper">
  {/* <button
    className="compare-plans-btn"
    onClick={() => setShowComparison(!showComparison)}
  >
    {showComparison ? "Hide Compare Table" : "Compare Plans"}


    {showComparison && (
        <div className="comparison-table-wrapper">
          <table className="pricing-comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th>Growth</th>
                <th>Growth +</th>
                <th>Personal</th>
              </tr>
            </thead>
      
            <tbody>
              <tr>
                <td>Pages</td>
                <td>1–3</td>
                <td>5–10</td>
                <td>Unlimited</td>
                <td>1–3</td>
              </tr>
      
              <tr>
                <td>Custom Design</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
      
              <tr>
                <td>SEO</td>
                <td>—</td>
                <td>Basic</td>
                <td>Advanced</td>
                <td>—</td>
              </tr>
      
              <tr>
                <td>Support</td>
                <td>Basic</td>
                <td>Priority</td>
                <td>Priority+</td>
                <td>Basic</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

  </button> */}
  </div>

        </section>
    );
}
export default Pricing;