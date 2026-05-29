import React, { useEffect } from 'react';
import '../styles/Hero.css';

function Hero() {
    useEffect(() => {
        const a1 = document.getElementById('accent1');
        const a2 = document.getElementById('accent2');
        setTimeout(() => a1?.classList.add('visible'), 500);
        setTimeout(() => a2?.classList.add('visible'), 700);
      }, []);

    return (
        <section className="hero" id="home">
        <div className="hero-content">
        <h1 className="hero-title">
            Custom websites,   
            <span className="accent" id="accent1"> Made For</span> your <span className="accent" id="accent2">URL</span>
        {/* I build websites made for your <span className="accent">URL</span> */}
            {/* Made for your <span className="accent">URL</span> */}
            {/* , because it deserves to stand out. */}
            {/* Made for your URL, made to grow your business. */}

            {/* Your URL deserves something made for it.  */}
        </h1>

        <p className="hero-subtext">
        Custom-built, clean, and designed to actually fit your business — 
        <br />
        not a template you’ve seen a hundred times.
        {/* Because it deserves to stand out. */}
            {/* Because your URL is your business. */}
            {/* Because it deserves something better. */}
        {/* I design and build custom websites that actually fit your brand. */}
        </p>

        <div className="hero-actions">
            <a href="#pricing" className="start-button">
            Get Started
            </a>

            <a href="#why" className="secondary-link">
            Learn More ↓
            </a>
        </div>
        </div>
        </section> 
            );
    }
    export default Hero;