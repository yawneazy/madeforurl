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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch(
                "https://madeforurl.onrender.com/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );
    
            const text = await response.text();
    
            console.log("Raw response:", text);
    
            const result = JSON.parse(text);
    
            console.log(result);
    
        } catch (error) {
            console.error("FETCH ERROR:", error);
        }
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //         const response = await fetch(
    //             "http://localhost:5000/api/contact",
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify(formData)
    //             }
    //         );
    
    //         const result = await response.json();
    
    //         if (result.success) {
    //             alert("Message sent!");
    
    //             setFormData({
    //                 firstName: "",
    //                 lastName: "",
    //                 email: "",
    //                 website: "",
    //                 message: ""
    //             });
    
    //         } else {
    //             alert("Something went wrong.");
    //         }
    
    //     } catch (error) {
    //         console.error(error);
    //         alert("Error sending message");
    //     }
    // };

    return (
        <section className="contact-page">

            <h2>Get in touch</h2>

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
        </section>
    );
}

export default Contact;