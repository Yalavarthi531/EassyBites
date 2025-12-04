import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container" style={{ padding: '120px 0', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
                <h1>Your Cart is Empty</h1>
                <p>Looks like you haven't added any delicious cups yet.</p>
                <Link to="/shop" className="btn-primary" style={{ marginTop: '2rem' }}>Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '120px 0' }}>
            <h1>Your Cart</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', marginTop: '2rem' }}>
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', background: 'white', borderRadius: '12px', marginBottom: '1rem', boxShadow: 'var(--shadow-sm)', alignItems: 'center' }}>
                            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{item.name}</h3>
                                <p style={{ margin: 0, color: 'var(--color-primary)' }}>${item.price}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-bg)', padding: '0.25rem', borderRadius: '20px' }}>
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0.25rem' }}><Minus size={16} /></button>
                                <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0.25rem' }}><Plus size={16} /></button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#ff4444' }}>
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary" style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)', height: 'fit-content' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Order Summary</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '1rem 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        Proceed to Checkout <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
