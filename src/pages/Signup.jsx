import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import { supabase } from '../lib/supabase';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                    },
                },
            });

            if (error) throw error;

            if (data.user) {
                // Traditionally you might redirect to a confirmation page or login
                // Supabase usually sends a confirmation email
                alert('Success! Please check your email for the confirmation link.');
                navigate('/login');
            }
        } catch (err) {
            setError(err.message);
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
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <AuthLayout
            title="Create Account"
            subtitle="Join thousands of creators building their future"
        >
            <form className="space-y-6" onSubmit={handleSignup}>
                {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-2xl text-red-500 text-sm">
                        {error}
                    </div>
                )}
                <div>
                    <label className="block text-sm font-medium mb-2 pl-1">Full Name</label>
                    <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-5 py-4 bg-dark-light border border-border rounded-2xl focus:border-secondary outline-none transition-all placeholder:text-text-dim"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 pl-1">Email Address</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 bg-dark-light border border-border rounded-2xl focus:border-secondary outline-none transition-all placeholder:text-text-dim"
                        placeholder="name@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 pl-1">Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-5 py-4 bg-dark-light border border-border rounded-2xl focus:border-secondary outline-none transition-all placeholder:text-text-dim"
                        placeholder="••••••••"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="btn-orange w-full py-4 rounded-2xl text-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Creating Account...' : 'Get Started'}
                </button>
            </form>

            <div className="relative my-8 text-center">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                </div>
                <span className="relative px-4 bg-dark-card text-sm text-text-muted uppercase tracking-wider">Or join with</span>
            </div>

            <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-white/5 border border-border rounded-2xl hover:bg-white/10 transition-all text-sm font-medium"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                Sign up with Google
            </button>

            <p className="text-center mt-10 text-text-muted">
                Already have an account? <Link to="/login" className="text-secondary hover:text-accent font-medium transition-colors">Sign In</Link>
            </p>
        </AuthLayout>
    );
};

export default Signup;
