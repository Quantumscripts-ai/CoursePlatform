/**
 * Payment Success Page — UI Only
 * All Supabase enrollment logic removed.
 * Shows success UI directly, ready for Firebase integration.
 */
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { IconCheck, IconSparkles, IconArrowRight, IconUser } from '@tabler/icons-react';
import { useAuth } from '../hooks/useAuth';
import { enrollmentService } from '../services/enrollmentService';

function PaymentSuccess() {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const [enrolling, setEnrolling] = useState(false);

    // Store session ID for Firebase linking once auth is integrated
    useEffect(() => {
        if (sessionId) {
            localStorage.setItem('pending_payment_session', sessionId);
        }
    }, [sessionId]);

    useEffect(() => {
        const processEnrollment = async () => {
            if (!authLoading && user) {
                const courseId = 'quantum-mastery-v1';
                try {
                    setEnrolling(true);
                    await enrollmentService.markAsPaid(user.uid, courseId);
                    localStorage.removeItem('pending_payment_session');
                    navigate('/studentdashboard');
                } catch (error) {
                    console.error('Failed to enroll after payment:', error);
                } finally {
                    setEnrolling(false);
                }
            }
        };

        processEnrollment();
    }, [user, authLoading, navigate]);

    if (authLoading || enrolling) {
        return (
            <div className="min-h-screen bg-dark flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-secondary">{enrolling ? 'Finalizing your enrollment...' : 'Loading...'}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark via-dark-lighter to-dark relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
                <div className="max-w-lg w-full">
                    {/* Success Card */}
                    <div className="bg-dark-lighter/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 text-center">
                        {/* Success Icon */}
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                            <IconCheck size={40} className="text-white" />
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
                            Payment Successful!
                        </h1>

                        {/* Subtitle */}
                        <p className="text-text-muted mb-8">
                            You're enrolled in the Quantum Mastery Course.
                            Create your account to access your dashboard.
                        </p>

                        {/* Benefits */}
                        <div className="bg-white/5 rounded-xl p-4 mb-8 text-left">
                            <div className="flex items-center gap-2 text-secondary mb-3">
                                <IconSparkles size={18} />
                                <span className="font-medium text-sm">What you get:</span>
                            </div>
                            <ul className="space-y-2 text-sm text-text-muted">
                                <li className="flex items-center gap-2">
                                    <IconCheck size={16} className="text-green-500" />
                                    Lifetime access to all 6 modules
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconCheck size={16} className="text-green-500" />
                                    18 comprehensive video lessons
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconCheck size={16} className="text-green-500" />
                                    Progress tracking &amp; certificates
                                </li>
                            </ul>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-3">
                            <Link
                                to="/signup"
                                className="block w-full bg-gradient-to-r from-secondary to-primary text-white font-semibold py-4 px-8 rounded-xl
                                    hover:shadow-lg hover:shadow-secondary/25 transform hover:scale-[1.02] 
                                    transition-all duration-200 flex items-center justify-center gap-3 group"
                            >
                                <IconUser size={20} />
                                <span>Create Account</span>
                                <IconArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <p className="text-sm text-text-muted">
                                Already have an account?{' '}
                                <Link to="/login" className="text-secondary hover:underline">
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentSuccess;
