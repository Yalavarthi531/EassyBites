import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount } = useCart();
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
                <Link to="/" className="logo" onClick={closeMenu}>Eassy Bites</Link>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>Our Story</Link></li>
                    <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
                    <li><Link to="/contact" className="btn-primary" onClick={closeMenu}>Contact Us</Link></li>
                </ul>

                <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link to="/cart" className="cart-icon" style={{ position: 'relative', color: 'var(--color-primary-dark)' }}>
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

                    <button className="mobile-menu-btn" aria-label="Toggle Menu" onClick={toggleMenu} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                        {isMenuOpen ? <X size={24} color="var(--color-primary-dark)" /> : <Menu size={24} color="var(--color-primary-dark)" />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
