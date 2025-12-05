import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const Profile = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (!user) {
            navigate('/auth');
            return;
        }

        const getProfile = async () => {
            const { data } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single();
            setProfile(data);
        };

        getProfile();
    }, [user, navigate]);

    const handleLogout = async () => {
        await signOut();
        navigate('/');
    };

    if (!user) return null;

    return (
        <div className="container" style={{ padding: '120px 0', minHeight: '60vh' }}>
            <div style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '24px',
                boxShadow: 'var(--shadow-lg)',
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Profile</h1>

                <div style={{ marginBottom: '2rem' }}>
                    <p><strong>Email:</strong> {user.email}</p>
                    {profile && (
                        <>
                            <p><strong>Name:</strong> {profile.full_name || 'N/A'}</p>
                            <p><strong>Member Since:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
                        </>
                    )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <button
                        className="btn-secondary"
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={() => alert('Order History feature coming soon!')}
                    >
                        My Orders
                    </button>

                    <button
                        onClick={handleLogout}
                        className="btn-primary"
                        style={{ width: '100%', background: '#d32f2f', border: 'none', justifyContent: 'center' }}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
