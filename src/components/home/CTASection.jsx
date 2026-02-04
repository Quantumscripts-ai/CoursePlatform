import { motion } from 'framer-motion';
import ctaBg from '../../assets/cta-bg.png';

const avatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/46.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg"
];

function CTASection() {
    return (
        <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
            {/* Background Image with Strategic Overlays */}
            <div
                className="absolute inset-0 bg-cover bg-right md:bg-[85%_center] bg-no-repeat"
                style={{ backgroundImage: `url(${ctaBg})` }}
            >
                {/* Darker gradient on the left for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
                <div className="max-w-3xl">
                    {/* Social Proof Consistency */}
                    <motion.div
                        className="flex flex-col md:flex-row md:items-center gap-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex -space-x-3">
                            {avatars.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-dark object-cover"
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex gap-0.5 text-secondary text-sm">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s}>★</span>
                                ))}
                            </div>
                            <span className="text-text-muted text-xs font-medium">4.6 Rate by 16,000+ Reviews</span>
                        </div>
                    </motion.div>

                    {/* Uniform Heading Size */}
                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight text-white mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Your next career breakthrough <br />
                        is <span className="text-secondary italic">just a mastery away</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-text-muted max-w-xl mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Join Quantum Mastery's "Full-Stack Excellence" system
                        and start building the future you deserve. Don't wait
                        for opportunities — create them.
                    </motion.p>

                    {/* Action Consistency */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-6 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <button className="btn-orange text-lg px-10 py-4 flex items-center gap-2">
                            Reserved your seat now
                            <span className="text-2xl leading-none">›</span>
                        </button>
                        <a href="#" className="group text-text-muted hover:text-white transition-colors flex items-center gap-2 font-medium bg-white/5 px-6 py-4 rounded-full border border-white/10">
                            Book a demo session
                            <span className="text-xl group-hover:translate-x-1 transition-transform">›</span>
                        </a>
                    </motion.div>

                    {/* Urgency Integrity */}
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                        <p className="text-text-muted text-sm font-medium">
                            Only <span className="text-white font-bold italic">2 days left</span> at this live sessions
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default CTASection;
