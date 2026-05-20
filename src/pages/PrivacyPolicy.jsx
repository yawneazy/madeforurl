import React, { useState } from 'react';
import '../styles/PrivacyPolicy.css';

function PrivacyPolicy() {
    return (
        <div className="legal-page">
            <div className="privacy-right-side">
                <h1>Privacy Policy</h1>
                <p>Last updated: May 2026</p>
            </div>
            <div className="privacy-left-side">
                <h2>For Website Visitors</h2>
                <p>
                    This website may collect basic information about your device and browsing activity
                    when you visit, such as:
                </p>

                <ul>
                    <li>Browser type and device information</li>
                    <li>Pages visited on this website</li>
                    <li>Referring website or source (if applicable)</li>
                    <li>IP address</li>
                </ul>

                <p>
                    This information is used to help maintain the security, performance, and
                    basic analytics of the website. Any analytics data is reviewed in a
                    non-personally identifiable form where possible.
                </p>

                <h2>Analytics</h2>
                <p>
                    This website may use basic analytics tools to understand how visitors
                    interact with the site. This may include:
                </p>

                <ul>
                    <li>Pages visited</li>
                    <li>Clicks and navigation behavior</li>
                    <li>Scroll activity</li>
                    <li>Time spent on pages</li>
                    <li>General device and browser information</li>
                </ul>

                <p>
                    This data is used only to improve website performance and user experience.
                </p>

                <h2>Cookies</h2>
                <p>
                    This website may use cookies or similar technologies to improve functionality
                    and understand user behavior. Cookies are small files stored on your device.
                </p>

                <p>
                    Some cookies are necessary for the site to function properly, while others
                    (such as analytics cookies) may be used to improve performance.
                </p>

                <h2>Form Submissions</h2>
                <p>
                    When you submit information through the contact form, we collect the data
                    you provide, such as your name, email address, website URL (if provided),
                    and message.
                </p>

                <p>
                    This information is used solely to respond to your inquiry and communicate
                    about potential services. It is not sold or shared with third parties.
                </p>

                <h2>Data Retention</h2>
                <p>
                    We retain contact form submissions only for as long as necessary to
                    respond to inquiries and manage potential client relationships.
                </p>

                <h2>Fonts and External Resources</h2>
                <p>
                    This website serves font files from and renders fonts using Google Fonts and Adobe Fonts. To properly display this site, these third parties may receive:
                </p>
                <ul>
                    <li>Information about your browser, network, or device</li>
                    <li>Information about this site and the page you’re viewing on it</li>
                    <li>Your IP address</li>
                </ul>

            <h2>Contact</h2>
            <p>
                If you have any questions or concerns about the above Privacy Policy, please contact us at madeforurl@gmail.com.
            </p>
        </div>
        </div>
  );
};
export default PrivacyPolicy;