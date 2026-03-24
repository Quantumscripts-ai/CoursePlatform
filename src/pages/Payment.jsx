/**
 * Payment Page — UI Only
 * Auth redirects and payment check removed.
 * Shows payment UI directly. Firebase integration pending.
 */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconLock, IconCheck, IconCreditCard, IconArrowRight, IconSparkles } from '@tabler/icons-react';
import { getPaymentLink } from '../services/paymentService';
import { useAuth } from '../hooks/useAuth';
import { useEnrollment } from '../hooks/useEnrollment';

function Payment() {
    const paymentLink = getPaymentLink();
    const { user, loading: authLoading } = useAuth();
    const { enrollment, loading: enrollmentLoading } = useEnrollment(user?.uid);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authLoading && !user) {
            navigate('/login');
        } else if (!authLoading && !enrollmentLoading && enrollment?.status === 'active') {
            navigate('/studentdashboard');
        }
    }, [user, authLoading, enrollment, enrollmentLoading, navigate]);

    const handleCheckout = () => {
        if (paymentLink) {
            // Note: Use environment variable link for external Stripe URL
            window.location.href = paymentLink + `?client_reference_id=${user?.uid || ''}`;
        } else {
            alert('Payment link not configured. Please contact support.');
        }
    };

    if (authLoading || enrollmentLoading) {
        return (
            <div className="min-h-screen bg-dark flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            </div>
        );
    }

    const benefits = [
        'Lifetime access to all course materials',
        'Self-paced learning at your convenience',
        'Access to all 6 comprehensive modules',
        '18 in-depth video lessons',
        'Progress tracking and completion certificates',
        'Regular content updates and improvements'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark via-dark-lighter to-dark relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                            <IconSparkles size={20} className="text-secondary" />
                            <span className="text-sm font-medium text-secondary">Limited Time Offer</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
                            Complete Your Enrollment
                        </h1>
                        <p className="text-xl text-text-muted max-w-2xl mx-auto">
                            You're just one step away from accessing the Quantum Mastery Course
                        </p>
                    </div>

                    {/* Main Card */}
                    <div className="bg-dark-lighter/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                        <div className="p-8 md:p-12">
                            {/* Course Info */}
                            <div className="flex items-start gap-6 mb-8 pb-8 border-b border-white/10">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                                    <IconLock size={32} className="text-white" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-text mb-2">
                                        Quantum Mastery Course
                                    </h2>
                                    <p className="text-text-muted">
                                        Master the fundamentals of quantum computing and secure your spot in the future of technology
                                    </p>
                                </div>
                            </div>

                            {/* Benefits List */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-text mb-4">
                                    What's Included:
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <IconCheck size={14} className="text-secondary" />
                                            </div>
                                            <span className="text-text-muted text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price */}
                            <div className="bg-white/5 rounded-xl p-6 mb-8">
                                <div className="flex items-baseline justify-between mb-2">
                                    <span className="text-text-muted">Total Amount</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-secondary">$0</span>
                                        <span className="text-text-muted">.00</span>
                                    </div>
                                </div>
                                <p className="text-sm text-secondary text-right">
                                    Free enrollment - Limited time only!
                                </p>
                            </div>

                            {/* Checkout Button */}
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-gradient-to-r from-secondary to-primary text-white font-semibold py-4 px-8 rounded-xl
                                    hover:shadow-lg hover:shadow-secondary/25 transform hover:scale-[1.02] 
                                    transition-all duration-200 flex items-center justify-center gap-3 group"
                            >
                                <IconCreditCard size={24} />
                                <span>Proceed to Checkout</span>
                                <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Security Notice */}
                            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-muted">
                                <IconLock size={16} />
                                <span>Secure checkout powered by Stripe</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <p className="text-center text-sm text-text-muted mt-8">
                        By proceeding, you agree to our Terms of Service and Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Payment;
