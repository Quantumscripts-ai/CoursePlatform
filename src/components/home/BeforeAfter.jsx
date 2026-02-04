import { motion } from 'framer-motion';

const beforeItems = [
    "Struggling with fragmented tutorials and disconnected concepts",
    "Feeling overwhelmed by the rapidly evolving tech landscape",
    "Building small projects but lacking production-level depth",
    "Slow career progress and uncertain technical roadmap"
];

const afterItems = [
    "Mastering end-to-end production systems with expert guidance",
    "Gaining confidence to tackle any professional challenge",
    "Building high-performance, scalable applications that wow clients",
    "Elite technical mastery and a clear path to senior leadership"
];

const avatars = [
    "https://i.pravatar.cc/150?u=11",
    "https://i.pravatar.cc/150?u=12",
    "https://i.pravatar.cc/150?u=13",
    "https://i.pravatar.cc/150?u=14",
    "https://i.pravatar.cc/150?u=15",
];

function BeforeAfter() {
    return (
        <section className="relative py-24 bg-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Life Before vs. <span className="text-secondary italic">After Quantum</span>
                    </motion.h2>
                    <motion.p
                        className="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Discover how a single specialized system can transform the way you learn, build, and lead.
                        See the shift that happens when you move from chasing syntax to mastering architecture.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative">
                    {/* Divider for desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

                    {/* Before Column */}
                    <motion.div
                        className="space-y-10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-8">Before Quantum</h3>
                        <div className="space-y-6">
                            {beforeItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-red-500/30 text-red-500 group-hover:scale-110 transition-transform">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </div>
                                    <p className="text-text-muted text-base md:text-lg leading-snug group-hover:text-white/80 transition-colors">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* After Column */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Glass Card */}
                        <div className="glass rounded-[2rem] p-8 md:p-10 border border-white/10 relative overflow-hidden group">
                            {/* Accent Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-secondary/30 transition-all duration-700" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-dark text-lg">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2L1 21H23L12 2ZM12 6L19.53 19H4.47L12 6ZM11 10V14H13V10H11ZM11 16V18H13V16H11Z" />
                                            </svg>
                                        </div>
                                        <span className="text-white font-bold tracking-tight">Quantum Mastery</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold font-display text-white">After Quantum</h3>
                                </div>

                                <div className="flex flex-col items-start md:items-end">
                                    <div className="flex gap-0.5 text-secondary text-base mb-1">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <span key={s}>★</span>
                                        ))}
                                    </div>
                                    <p className="text-white font-bold text-2xl lg:text-3xl tracking-tight mb-1">10x Career Growth</p>
                                    <p className="text-text-muted text-xs uppercase tracking-widest">15k+ professionals transformed</p>
                                    <div className="flex -space-x-2 mt-3">
                                        {avatars.map((src, i) => (
                                            <img
                                                key={i}
                                                src={src}
                                                alt="User"
                                                className="w-7 h-7 rounded-full border-2 border-dark"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <hr className="border-white/5 mb-10" />

                            <div className="space-y-6">
                                {afterItems.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-green-500/10 text-green-500 border border-green-500/30 group-hover:scale-110 transition-transform">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <p className="text-white/90 text-base md:text-lg leading-snug group-hover:text-white transition-colors">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default BeforeAfter;
