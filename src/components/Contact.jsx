import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        website: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className="contact-page">

            <h2>Get in touch</h2>

            <form id="consultation-form" onSubmit={handleSubmit}>

                <div className="name-row">

                    <div className="form-group">
                        <label>First Name *</label>
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name *</label>
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                </div>

                <div className="form-group">
                    <label>Email *</label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Website URL</label>
                    <input
                        name="website"
                        type="text"
                        value={formData.website}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Message *</label>
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="submit-btn">Submit</button>

            </form>
        </section>
    );
}

export default Contact;