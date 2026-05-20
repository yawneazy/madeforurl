import React from 'react';
import '../styles/Why.css';

function Why() {
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
            // ["Custom Design", "✓", "Limited by templates"],
      ["Scalable Features", "✓", "Limited by platform rules"],
      ["Direct Support", "✓", "Platform support only"],
      ["Full customization", "✓", "Limited"],
      ["Unique Branding", "✓", "Harder to stand out"],
      ["Full Ownership & Flexibility", "✓", "Platform-dependent"],
      ];

    return (
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
        );
    }
    export default Why;