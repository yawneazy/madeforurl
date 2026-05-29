import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/Contact.css';
import { FaLinkedin, FaInstagram} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Contact() {
    // forces page to the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [searchParams] = useSearchParams();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        website: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    // set loading state
    // const [loading, setLoading] = useState(false);
    const [failed, setFailed] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch(
                "/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );
    
            const result = await response.json();
    
            // console.log(result);
    
            if (result.success) {
                // alert("Message sent!");
    
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    website: "",
                    message: ""
                });
                setSubmitted(true);
            } else {
                setFailed(true);
            }
    
        } catch (error) {
            console.error("FETCH ERROR:", error);
            setFailed(true);
        }
    };
 
    return (
        <section className="contact-page">

            <h2>Get in touch</h2>

            {submitted ? (
                <div className="thank-you">
                    <div className="thank-you-icon"></div>
                    <h1>Thank you for reaching out!</h1>
                    <p>I'll get back to you as soon as possible!</p>
                    <a href="/" className="home-btn">Back to home</a>
            
                    {/* <h3>Let's Connect</h3> */}
                    <div className="thank-you-divider" />

<p className="connect-label">Let's connect</p>
<div className="thank-you-socials">
    <a href="mailto:madeforurl@gmail.com" target="_blank" rel="noreferrer" className="social-link">
        <IoIosMail className="social-icon" />
        madeforurl@gmail.com
    </a>
    <a href="https://www.linkedin.com/in/alyssayanezolson/" target="_blank" rel="noreferrer" className="social-link">
        <FaLinkedin className="social-icon" />
        LinkedIn
    </a>
    <a href="https://www.instagram.com/madeforurl" target="_blank" rel="noreferrer" className="social-link">
        <FaInstagram className="social-icon" />
        Instagram
    </a>
</div>
                    </div>
            ) : ( 
            <form id="consultation-form" onSubmit={handleSubmit}>
                <div className="name-row">

                    <div className="form-group">
                        <label>First Name *</label>
                        <input
                        required
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name *</label>
                        <input
                        required
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                </div>

                <div className="form-group">
                    <label>Email *</label>
                    <input
                    required
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Website URL *</label>
                    <input
                    required
                        name="website"
                        type="text"
                        value={formData.website}
                        onChange={handleChange}
                    />
                </div>

                {/* <div className="form-group">
                <label>Package Interest</label>
                <select className="plan-picker"
                    name="packageInterest"
                    value={formData.packageInterest}
                    onChange={handleChange}
                >
                    <option value="">Select a plan...</option>
                    <option value="Personal">Personal — $500 setup + $25/mo</option>
                    <option value="Starter">Starter — $1,500 setup + $50/mo</option>
                    <option value="Growth">Growth — $2,500 setup + $120/mo</option>
                    <option value="Growth+">Growth+ — $750 setup + $200/mo</option>
                    <option value="Setup Only">Setup Only (no maintenance)</option>
                    <option value="Not sure">Not sure yet</option>
                </select>
                </div> */}

                <div className="form-group">
                    <label>Message *</label>
                    <textarea
                        required
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="submit-btn">Submit</button>

            </form>
            )}
        </section>
    );
}

export default Contact;