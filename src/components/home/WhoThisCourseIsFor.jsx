/**
 * WhoThisCourseIsFor - Target Audience Section
 * Matches the exact design from the reference image
 * Black background with orange gradient text and checkmark items
 */
import { motion } from 'framer-motion';

function WhoThisCourseIsFor() {
    const targetAudience = [
        'Consultants & Course Creators',
        'Freelancers & Service Providers',
        'Marketers & Agency Owners',
    ];

    return (
        <section className="relative py-24 bg-dark">
            <div className="max-w-5xl mx-auto px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
                        Who this{' '}
                        <span className="italic gradient-text pr-1">
                            course is for
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
                        Designed for entrepreneurs, marketers, and creators who
                        want to attract more leads, close more sales, and grow their
                        business with proven funnel strategies.
                    </p>

                    {/* Main Checkmark Item */}
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-green-500 text-lg">✓</span>
                        <span className="text-text-muted text-base">
                            Anyone looking to generate leads and sales online
                        </span>
                    </motion.div>

                    {/* Three Column Checkmark Items */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {targetAudience.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2"
                            >
                                <span className="text-green-500 text-sm">✓</span>
                                <span className="text-text-muted text-sm">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-dark font-semibold rounded-full hover:shadow-lg hover:shadow-secondary/30 transition-all hover:scale-105">
                            Enroll free demo session
                            <span>→</span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Side Panel - Positioned Absolutely within section */}
            <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden xl:block"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
            >
                <div className="bg-dark-card rounded-l-xl shadow-2xl p-4 flex flex-col gap-2 min-w-[160px] border border-border border-r-0">
                    {/* Explore Templates */}
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-xs text-white">
                                📦
                            </div>
                            <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center text-xs text-white">
                                🎨
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-text-dim">Explore our</p>
                        <p className="text-xs text-text-muted">premium templates</p>
                    </div>
                    <a
                        href="#templates"
                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                        More templates
                    </a>

                    <div className="border-t border-border pt-3 mt-2">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-xs text-white mb-2">
                            ✏️
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default WhoThisCourseIsFor;

