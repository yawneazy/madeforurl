import React from 'react';
import alyHeadShot from '../images/homepic.jpg';
import '../styles/About.css';

function About() {
    return (
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
                <br />
                <p>
                    I started MadeForURL because I wanted businesses and creators to have websites that actually reflect their vision — not feel locked into templates or limitations.

                    I build custom websites that are clean, fast, and designed to grow with your brand, so your online presence feels intentional from day one.
                </p>
            </div>
        </section>
    );
}
export default About;