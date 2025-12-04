import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleAuth = async (e) => {
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

    return (
        <div className="container" style={{ padding: '120px 0', display: 'flex', justifyContent: 'center' }}>
            <div className="auth-card" style={{ background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', maxWidth: '500px', width: '100%' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{isLogin ? 'Welcome Back' : 'Join the Revolution'}</h1>
                <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                    {isLogin ? 'Login to manage your orders.' : 'Create an account to start sipping sustainably.'}
                </p>

                {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</div>}

                <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            style={{ padding: '16px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1rem' }}
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ padding: '16px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1rem' }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: '16px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1rem' }}
                        required
                    />

                    <button type="submit" className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }} disabled={loading}>
                        {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
                    </button>
                </form>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <p>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            style={{ background: 'none', border: 'none', color: 'var(--color-accent)', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}
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
