import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container" style={{ padding: '120px 0' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>
                    Get connected to grow better business
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                    Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                {/* Left Column: Contact Info */}
                <div>
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>Contact Information</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ background: 'var(--color-accent)', padding: '10px', borderRadius: '50%', color: 'white' }}>
                                <Mail size={20} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold', margin: 0 }}>Email</p>
                                <a href="mailto:hello@eassybites.com.au" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>hello@eassybites.com.au</a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ background: 'var(--color-accent)', padding: '10px', borderRadius: '50%', color: 'white' }}>
                                <Phone size={20} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold', margin: 0 }}>Phone</p>
                                <p style={{ margin: 0 }}>+61 400 123 456</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: 'var(--color-accent)', padding: '10px', borderRadius: '50%', color: 'white' }}>
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold', margin: 0 }}>Address</p>
                                <p style={{ margin: 0 }}>123 Eco Way, Byron Bay, NSW 2481, Australia</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div style={{ borderRadius: '24px', overflow: 'hidden', height: '300px', boxShadow: 'var(--shadow-md)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110057.47317662768!2d153.53677247785642!3d-28.647367332628547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9062852d3c774b%3A0x50609b490442e10!2sByron%20Bay%20NSW%202481%2C%20Australia!5e0!3m2!1sen!2sus!4v1709628000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--color-primary-dark)' }}>Send us a message</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>First Name</label>
                                <input type="text" placeholder="John" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Last Name</label>
                                <input type="text" placeholder="Doe" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Email</label>
                            <input type="email" placeholder="john@example.com" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Subject</label>
                            <select style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', background: 'white' }}>
                                <option>General Inquiry</option>
                                <option>Wholesale Order</option>
                                <option>Partnership</option>
                                <option>Support</option>
                            </select>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Message</label>
                            <textarea rows="5" placeholder="How can we help you?" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', resize: 'vertical' }}></textarea>
                        </div>

                        <button type="submit" className="btn-primary" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
