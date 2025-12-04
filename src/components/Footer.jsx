import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>Eassy Bites</h3>
                    <p>The future of drinking is edible.</p>
                </div>
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Eassy Bites. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
