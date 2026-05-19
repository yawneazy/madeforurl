import React from 'react';
import '../styles/How.css';

function How() {
    return (

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
    );
}
export default How;