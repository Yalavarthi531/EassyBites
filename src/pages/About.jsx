import React from 'react';
import garageImg from '../assets/story_garage.png';
import machineImg from '../assets/story_machine.png';
import anilImg from '../assets/founder_anil.png';
import elonImg from '../assets/founder_elon.png';

const About = () => {
    return (
        <div className="container" style={{ padding: '120px 0' }}>
            {/* Hero Section */}
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    From a Garage to a Global Movement
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto' }}>
                    The story of two friends, one crazy idea, and a mission to make sustainability delicious.
                </p>
            </div>

            {/* The Spark */}
            <div className="story-section" style={{ display: 'flex', alignItems: 'center', gap: '4rem', marginBottom: '6rem', flexDirection: 'row' }}>
                <div style={{ flex: 1 }}>
                    <img src={garageImg} alt="Founders in garage" style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} />
                </div>
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>2022: The Spark</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '1rem' }}>
                        It started in a small coffee shop. Anil and Elon were staring at a mountain of disposable cups in the trash bin. "What if," Anil mused, "the cup was as good as the coffee?"
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                        That night, they cleared out Elon's garage. No funding, no team—just two friends with a shared frustration and a bag of wheat flour. They spent months experimenting, failing, and eating a lot of burnt cookies.
                    </p>
                </div>
            </div>

            {/* The Struggle */}
            <div className="story-section" style={{ display: 'flex', alignItems: 'center', gap: '4rem', marginBottom: '6rem', flexDirection: 'row-reverse' }}>
                <div style={{ flex: 1 }}>
                    <img src={machineImg} alt="Cup making machine" style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} />
                </div>
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>2023: The Struggle</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '1rem' }}>
                        Designing the machine was a nightmare. Every prototype leaked or crumbled. They maxed out their credit cards and worked 18-hour days. Everyone told them to quit.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                        But they refused. They hand-welded a custom stainless steel press. And one rainy Tuesday at 3 AM, it happened. The first perfect, crispy, leak-proof cup came out of the mold. It was magic.
                    </p>
                </div>
            </div>

            {/* The Founders */}
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-primary-dark)' }}>Meet the Visionaries</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                    {/* Founder 1 */}
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)', width: '300px', textAlign: 'center' }}>
                        <img src={anilImg} alt="Anil Prabhakar Yalavarthi" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '4px solid var(--color-accent)' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Anil Prabhakar Yalavarthi</h3>
                        <p style={{ color: 'var(--color-accent)', fontWeight: 'bold', marginBottom: '1rem' }}>Co-Founder & Chief Taste Officer</p>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                            The culinary genius who ensured the cups taste better than the cookies you buy. Believes everything should be edible.
                        </p>
                    </div>

                    {/* Founder 2 */}
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)', width: '300px', textAlign: 'center' }}>
                        <img src={elonImg} alt="Elon Musk" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '4px solid var(--color-accent)' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Elon Musk</h3>
                        <p style={{ color: 'var(--color-accent)', fontWeight: 'bold', marginBottom: '1rem' }}>Co-Founder & Chief Engineer</p>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                            The engineering mastermind who built the proprietary "Crisp-Lock" technology. Wants to send edible cups to Mars.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
