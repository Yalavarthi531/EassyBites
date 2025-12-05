import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const { user } = useAuth();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header id="main-header">
            <nav className="container">
                {/* Left: Logo */}
                <Link to="/" className="logo" onClick={closeMenu}>Eassy Bites</Link>

                {/* Center: Navigation Links */}
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>Our Story</Link></li>
                    <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
                    {/* Show Contact Us in mobile menu since button is hidden */}
                    <li className="mobile-only"><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
                </ul>

                {/* Right: Actions */}
                <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>

                    {/* Login/Profile Icon */}
                    {user ? (
                        <Link to="/profile" style={{ color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center' }} title="My Profile">
                            <div style={{
                                width: '32px',
                                height: '32px',
                                background: 'var(--color-accent)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                {user.email ? user.email[0].toUpperCase() : 'U'}
                            </div>
                        </Link>
                    ) : (
                        <Link to="/auth" style={{ color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center' }} title="Login">
                            <User size={24} />
                        </Link>
                    )}

                    {/* Cart Icon */}
                    <Link to="/cart" className="cart-icon" style={{ position: 'relative', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center' }}>
                        <ShoppingCart size={24} />
                        {cartCount > 0 && (
                            <span className="cart-badge" style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-8px',
                                background: 'var(--color-accent)',
                                color: 'white',
                                borderRadius: '50%',
                                width: '18px',
                                height: '18px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.7rem',
                                fontWeight: 'bold'
                            }}>{cartCount}</span>
                        )}
                    </Link>

                    {/* Contact Button */}
                    <Link to="/contact" className="btn-primary" onClick={closeMenu} style={{ padding: '10px 24px', fontSize: '0.9rem', display: 'none' }}>Contact Us</Link>
                    {/* Mobile Menu Toggle */}
                    <button className="mobile-menu-btn" aria-label="Toggle Menu" onClick={toggleMenu} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                        {isMenuOpen ? <X size={24} color="var(--color-primary-dark)" /> : <Menu size={24} color="var(--color-primary-dark)" />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
