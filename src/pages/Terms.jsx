import React from 'react';
import '../styles/Terms.css';

function Terms() {
    return (
        <div className="terms-page">

            {/* LEFT SIDE (title) */}
            <div className="terms-right-side">
                <h1>Terms of Use</h1>
                <p>Last updated: May 2026</p>
            </div>

            {/* RIGHT SIDE (content) */}
            <div className="terms-left-side">

                <h2>1. Use of Website</h2>
                <p>
                    This website is intended to provide information about MadeForURL’s custom website design and development services.
                </p>

                <p>
                    By using this site, you agree to use it only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use of the website.
                </p>

                <p>You may not:</p>
                <ul>
                    <li>Copy, reproduce, or redistribute any content without permission</li>
                    <li>Use this site for spam, unsolicited promotions, or malicious activity</li>
                    <li>Attempt to gain unauthorized access to any systems or content</li>
                </ul>

                <h2>2. Intellectual Property</h2>
                <p>
                    Unless otherwise stated, all content on this website — including text, graphics, logos, layouts, and visuals — is the property of MadeForURL and is protected by copyright and intellectual property laws.
                </p>

                <p>
                    You may view and use content for personal, non-commercial purposes only. Any reproduction, modification, or distribution without written permission is not allowed.
                </p>

                <h2>3. No Guarantees</h2>
                <p>
                    While we aim to keep all information on this website accurate and up to date, we make no guarantees regarding completeness, reliability, or accuracy.
                </p>

                <p>
                    All content is provided for general informational purposes. Your use of this website is at your own risk.
                </p>

                <h2>4. External Links</h2>
                <p>
                    This website may contain links to third-party websites or tools. These are provided for convenience only. We are not responsible for the content, policies, or practices of any third-party sites.
                </p>

                <h2>5. Limitation of Liability</h2>
                <p>
                    To the fullest extent permitted by law, MadeForURL is not liable for any damages or losses arising from your use of this website, including indirect or incidental damages.
                </p>

                <h2>6. Privacy</h2>
                <p>
                    Your use of this website is also governed by our Privacy Policy, which explains how we collect and handle basic user information.
                </p>

                <h2>7. Governing Law</h2>
                <p>
                    These Terms are governed by the laws of the State of Arizona, United States. Any disputes will be handled in the appropriate courts within Arizona.
                </p>

                <h2>8. Updates to These Terms</h2>
                <p>
                    We may update these Terms of Use at any time. The “Last Updated” date will reflect the most recent version.
                </p>

                <p>
                    Continued use of the website after changes means you accept the updated Terms.
                </p>

            </div>
        </div>
    );
}

export default Terms;