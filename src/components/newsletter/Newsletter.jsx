import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate a successful subscription
        setMessage('Thank you for subscribing!');
        setEmail('');
    };

    return (
        <div className="newsletter my-6 py-6">
            <h1>Newsletter</h1>
            <div className='newsletter-content max-w-7xl mx-auto'>
                <h2>Subscribe to our Newsletter</h2>
                <p>Get the latest updates and offers.</p>
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
                {message && <p className="message">{message}</p>}

            </div>

        </div>
    );
};

export default Newsletter;
