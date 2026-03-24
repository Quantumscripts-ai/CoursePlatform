import { motion } from 'framer-motion';

const eventDetails = [
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
        ),
        label: "Date",
        value: "September 13, 2025"
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        ),
        label: "Time",
        value: "7:00 PM – 8:00 PM"
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        ),
        label: "Format",
        value: "Online"
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
        ),
        label: "Price",
        value: "Free (Demo Session)"
    }
];

function Registration() {
    return (
        <section className="relative py-24 bg-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Join the free training, <br />
                        <span className="text-secondary italic">secure your spot today</span>
                    </motion.h2>
                    <motion.p
                        className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Discover how to master full-stack development and build production-ready
                        systems that scale. This free session is your first step toward
                        technical excellence. Limited spots — register now.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold font-display text-white mb-4">Meet with our experts.</h3>
                        <p className="text-text-muted mb-10">Fill in the form below to secure your free seat.</p>

                        <div className="space-y-6">
                            <p className="text-text-dim text-xs uppercase tracking-widest font-bold mb-4">Event Details & Registration</p>
                            {eventDetails.map((detail, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-secondary/90 flex items-center justify-center text-dark shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-transform group-hover:scale-110">
                                        {detail.icon}
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-base leading-tight">
                                            <span className="text-text-muted font-normal mr-2">{detail.label}:</span>
                                            {detail.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-white/5">
                            <p className="text-text-muted text-sm mb-4">
                                We respect your privacy — no spam, no sharing your data. Can't attend live?
                            </p>
                            <p className="text-text-muted text-sm">
                                Contact us at <a href="mailto:support@quantummastery.com" className="text-secondary hover:underline">support@quantummastery.com</a> to get access to the replay.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                            {/* Urgent Badge */}
                            <div className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-secondary/5 border border-secondary/10 w-fit">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                <p className="text-dark/60 text-xs font-semibold">
                                    Only <span className="text-dark font-bold italic">2 days left</span> at this price
                                </p>
                            </div>

                            <h3 className="text-4xl font-bold font-display text-dark mb-2">
                                Enroll <span className="text-secondary italic">Now</span>
                            </h3>
                            <p className="text-gray-500 mb-6 text-sm">Get lifetime access to all course content</p>

                            {/* Price Display */}
                            <div className="bg-gray-50 rounded-xl p-6 mb-8">
                                <div className="flex items-baseline justify-between">
                                    <span className="text-gray-500">Total Investment</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-dark">$1</span>
                                        <span className="text-gray-400 line-through">$199</span>
                                    </div>
                                </div>
                                <p className="text-sm text-secondary mt-2 text-right font-medium">Limited time offer!</p>
                            </div>

                            {/* Benefits List */}
                            <ul className="space-y-3 mb-8">
                                {['Lifetime access to all 6 modules', '18 comprehensive video lessons', 'Certificate of completion', 'Future updates included'].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-green-500">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            {/* Stripe Checkout Button */}
                            <a
                                href={import.meta.env.VITE_PAYMENT_LINK_URL || 'https://buy.stripe.com/test_bJecMY7ON7eddnDaFG6J203'}
                                className="block w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-5 rounded-xl shadow-lg shadow-secondary/30 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
                            >
                                🎉 Enroll Now — Only $1!
                            </a>

                            <p className="text-center text-gray-400 text-xs mt-4">
                                Secure checkout powered by Stripe
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Registration;
