import React from 'react';
import '../styles/MissionStatement.css';

function MissionStatement() {
    const handleExplore = () => {
        const next = document.getElementById('process');
        if (next) next.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="mission-statement" id="mission-statement">
            <div className="statement-text">
                <h2>My Mission</h2>
                <p>
                    <span className="statement-quote open">&ldquo;</span>
                    To help small businesses and freelancers show up online with confidence — through custom-built websites that are uniquely theirs, priced fairly, and maintained by a real person who actually cares.
                    <span className="statement-quote close">&rdquo;</span>
                </p>
            </div>

            {/* <button className="explore-bar" onClick={handleExplore} aria-label="Explore services">
                <span className="explore-label">Explore Services</span>
                <span className="explore-arrow">↓</span>
            </button> */}
        </section>
    );
}

export default MissionStatement;