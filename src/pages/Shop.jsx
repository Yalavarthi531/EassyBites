import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';
import productImg from '../assets/images/product.png';

const PRODUCTS = [
    {
        id: 1,
        name: 'Classic Edible Cup (110ml)',
        price: 12.99,
        description: 'Perfect for espresso and macchiato. Crunchy vanilla flavor.',
        image: productImg
    },
    {
        id: 2,
        name: 'Large Edible Cup (220ml)',
        price: 15.99,
        description: 'Ideal for cappuccino and latte. Stays crispy for 40 mins.',
        image: productImg
    },
    {
        id: 3,
        name: 'Chocolate Dipped Cup',
        price: 18.99,
        description: 'Lined with premium dark chocolate. A dessert and drink in one.',
        image: productImg
    }
];

const Shop = () => {
    const { addToCart } = useCart();

    return (
        <div className="container" style={{ padding: '120px 0' }}>
            <div className="section-header">
                <h1>Shop Our Collection</h1>
                <p>Choose your sustainable sip.</p>
            </div>

            <div className="feature-grid">
                {PRODUCTS.map(product => (
                    <div key={product.id} className="feature-card" style={{ textAlign: 'left' }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary-dark)' }}>${product.price}</span>
                            <button
                                className="btn-primary"
                                onClick={() => addToCart(product)}
                                style={{ padding: '8px 20px', fontSize: '0.9rem' }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
