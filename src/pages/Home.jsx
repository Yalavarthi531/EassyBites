import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/hero.png';
import productImg from '../assets/images/product.png';
import ingredientsImg from '../assets/images/ingredients.png';

const Home = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <section className="hero">
                <div className="container">
                    <div className="hero-content animate-on-scroll">
                        <h1>Sip, Snack, Sustain.</h1>
                        <p className="hero-subtitle">The coffee cup you can eat. 100% Natural, 100% Delicious, 0% Waste.</p>
                        <div className="hero-actions">
                            <Link to="/shop" className="btn-primary">Discover the Cup</Link>
                            <a href="#features" className="btn-secondary">Why Eassy Bites?</a>
                        </div>
                    </div>
                    <div className="hero-image-container animate-on-scroll">
                        <img src={heroImg} alt="Edible Cup in Nature" className="hero-img" />
                    </div>
                </div>
            </section>

            <section id="features" className="features">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <h2>Why Choose Eassy Bites?</h2>
                        <p>Good for you, good for the planet.</p>
                    </div>
                    <div className="feature-grid">
                        <div className="feature-card animate-on-scroll">
                            <div className="icon">🌱</div>
                            <h3>100% Natural</h3>
                            <p>Made from simple, wholesome ingredients. No artificial preservatives.</p>
                        </div>
                        <div className="feature-card animate-on-scroll">
                            <div className="icon">🔥</div>
                            <h3>Heat Resistant</h3>
                            <p>Holds your hot coffee crispy for up to 40 minutes. No leaks.</p>
                        </div>
                        <div className="feature-card animate-on-scroll">
                            <div className="icon">🌍</div>
                            <h3>Zero Waste</h3>
                            <p>Biodegradable and compostable. Or better yet, just eat it!</p>
                        </div>
                        <div className="feature-card animate-on-scroll">
                            <div className="icon">😋</div>
                            <h3>Delicious</h3>
                            <p>A crunchy, biscuit-like treat to finish your coffee break.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-showcase">
                <div className="container">
                    <div className="product-layout">
                        <div className="product-info animate-on-scroll">
                            <h2>The Cup That Treats You</h2>
                            <p>Our edible cups are crafted to complement your favorite brew. Whether it's an espresso, macchiato, or a scoop of ice cream, Eassy Bites adds a crunch to your experience.</p>
                            <ul className="product-specs">
                                <li><strong>Size:</strong> 110ml / 220ml</li>
                                <li><strong>Calories:</strong> Low calorie treat</li>
                                <li><strong>Shelf Life:</strong> 12 Months</li>
                                <li><strong>Vegan:</strong> 100% Plant-based</li>
                            </ul>
                        </div>
                        <div className="product-visual animate-on-scroll">
                            <img src={productImg} alt="Crispy Edible Cup" className="product-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us" style={{ backgroundImage: `url(${ingredientsImg})`, backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                <div className="container animate-on-scroll">
                    <h2>Our Mission</h2>
                    <p>At Eassy Bites, we believe small changes make a big impact. Every year, billions of disposable cups end up in landfills. We're here to change that, one bite at a time. Our mission is to make sustainability tasty, fun, and accessible to everyone.</p>
                </div>
            </section>
        </main>
    );
};

export default Home;
