/**
 * Mission Section - Orange Theme
 */
import { motion } from 'framer-motion';

function Mission() {
    return (
        <section className="relative min-h-[80vh] flex items-center pt-32 overflow-hidden bg-dark">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute left-0 top-0 bottom-0 w-[40%]"
                    style={{ background: 'radial-gradient(ellipse 80% 100% at 0% 50%, rgba(249, 115, 22, 0.2), transparent 70%)' }}
                />
                <div
                    className="absolute right-0 top-0 bottom-0 w-[40%]"
                    style={{ background: 'radial-gradient(ellipse 80% 100% at 100% 50%, rgba(249, 115, 22, 0.2), transparent 70%)' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm font-semibold text-secondary uppercase tracking-wider mb-8">
                        Our Mission
                    </span>

                    <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.1] mb-8 text-text">
                        Empowering Learners
                        <span className="text-secondary"> Worldwide</span>
                    </h1>

                    <p className="text-xl text-text-muted leading-relaxed mb-10">
                        We believe everyone deserves access to world-class tech education.
                        Our mission is to bridge the gap between aspiration and achievement,
                        helping learners transform their careers through cutting-edge courses
                        in React, Machine Learning, and Deep Learning.
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap">
                        {[
                            { icon: '🎯', label: 'Excellence' },
                            { icon: '💡', label: 'Innovation' },
                            { icon: '🤝', label: 'Community' },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center gap-2 px-6 py-3 bg-dark-card border border-border rounded-full text-sm font-medium text-text transition-all hover:border-secondary hover:-translate-y-0.5"
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Mission;
