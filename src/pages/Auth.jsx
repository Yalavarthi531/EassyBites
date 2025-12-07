import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/auth_bg.png';

const Auth = () => {
    const [authMethod, setAuthMethod] = useState('email'); // 'email' or 'mobile'
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);

    // Email State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    // Mobile State
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEmailAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                navigate('/shop');
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: fullName,
                        },
                    },
                });
                if (error) throw error;
                alert('Check your email for the login link!');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const fullPhoneNumber = `${countryCode}${phone}`;

        try {
            const { error } = await supabase.auth.signInWithOtp({
                phone: fullPhoneNumber,
            });
            if (error) throw error;
            setOtpSent(true);
            alert('OTP sent to your mobile number!');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const fullPhoneNumber = `${countryCode}${phone}`;

        try {
            const { error } = await supabase.auth.verifyOtp({
                phone: fullPhoneNumber,
                token: otp,
                type: 'sms',
            });
            if (error) throw error;
            navigate('/shop');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
            });
            if (error) throw error;
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <div className="auth-card" style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(12px)',
                padding: '3rem',
                borderRadius: '24px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                maxWidth: '450px',
                width: '100%',
                border: '1px solid rgba(255, 255, 255, 0.18)'
            }}>
                <h1 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#2c5e2e' }}>
                    {isLogin ? 'Welcome Back' : 'Join the Revolution'}
                </h1>
                <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#4a6741' }}>
                    {isLogin ? 'Login to manage your orders.' : 'Create an account to start sipping sustainably.'}
                </p>

                {/* Auth Method Toggle */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <button
                        onClick={() => setAuthMethod('email')}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            border: 'none',
                            background: authMethod === 'email' ? '#2c5e2e' : 'transparent',
                            color: authMethod === 'email' ? 'white' : '#2c5e2e',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            border: '1px solid #2c5e2e'
                        }}
                    >
                        Email
                    </button>
                    <button
                        onClick={() => setAuthMethod('mobile')}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            border: 'none',
                            background: authMethod === 'mobile' ? '#2c5e2e' : 'transparent',
                            color: authMethod === 'mobile' ? 'white' : '#2c5e2e',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            border: '1px solid #2c5e2e'
                        }}
                    >
                        Mobile OTP
                    </button>
                </div>

                {error && <div style={{ color: '#d32f2f', textAlign: 'center', marginBottom: '1rem', background: '#ffebee', padding: '0.5rem', borderRadius: '8px' }}>{error}</div>}

                {authMethod === 'email' ? (
                    <form onSubmit={handleEmailAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {!isLogin && (
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                style={{ padding: '16px', borderRadius: '12px', border: '1px solid #ccc', fontSize: '1rem', outline: 'none' }}
                                required
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ padding: '16px', borderRadius: '12px', border: '1px solid #ccc', fontSize: '1rem', outline: 'none' }}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ padding: '16px', borderRadius: '12px', border: '1px solid #ccc', fontSize: '1rem', outline: 'none' }}
                            required
                        />

                        <button type="submit" className="btn-primary" style={{
                            marginTop: '1rem',
                            justifyContent: 'center',
                            background: '#2c5e2e',
                            color: 'white',
                            padding: '16px',
                            borderRadius: '12px',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'background 0.3s'
                        }} disabled={loading}>
                            {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {!otpSent ? (
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <select
                                    value={countryCode}
                                    onChange={(e) => setCountryCode(e.target.value)}
                                    style={{ padding: '16px', borderRadius: '12px', border: '1px solid #ccc', fontSize: '1rem', outline: 'none', background: 'white' }}
                                >
                                    <option value="+91">+91 (IN)</option>
                                    <option value="+1">+1 (US)</option>
                                    <option value="+44">+44 (UK)</option>
                                    <option value="+61">+61 (AU)</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    style={{ flex: 1, padding: '16px', borderRadius: '12px', border: '1px solid #ccc', fontSize: '1rem', outline: 'none' }}
                                    required
                                />
                            </div>
                        ) : (
                            <input
                                type="text"
                                placeholder="Enter 6-digit OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                style={{ padding: '16px', borderRadius: '12px', border: '1px solid #ccc', fontSize: '1rem', outline: 'none', textAlign: 'center', letterSpacing: '4px' }}
                                required
                                maxLength={6}
                            />
                        )}

                        <button type="submit" className="btn-primary" style={{
                            marginTop: '1rem',
                            justifyContent: 'center',
                            background: '#2c5e2e',
                            color: 'white',
                            padding: '16px',
                            borderRadius: '12px',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'background 0.3s'
                        }} disabled={loading}>
                            {loading ? 'Processing...' : (otpSent ? 'Verify OTP' : 'Send OTP')}
                        </button>
                    </form>
                )}

                <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0' }}>
                    <div style={{ flex: 1, height: '1px', background: '#ccc' }}></div>
                    <span style={{ padding: '0 10px', color: '#666', fontSize: '0.9rem' }}>OR</span>
                    <div style={{ flex: 1, height: '1px', background: '#ccc' }}></div>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '12px',
                        border: '1px solid #ccc',
                        background: 'white',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        color: '#333'
                    }}
                >
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '24px', height: '24px' }} />
                    Sign in with Google
                </button>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <p style={{ color: '#333' }}>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            style={{ background: 'none', border: 'none', color: '#2c5e2e', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}
                        >
                            {isLogin ? 'Sign Up' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth;
