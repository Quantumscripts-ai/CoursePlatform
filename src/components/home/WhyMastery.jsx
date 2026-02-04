import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const stats = [
    {
        value: "85%",
        label: "Of students built their first production-ready application within 30 days"
    },
    {
        value: "45 Days",
        label: "Is the average time it takes for members to master a new high-demand framework"
    },
    {
        value: "72%",
        label: "Of members reported doubling their engineering output within 90 days"
    },
    {
        value: "34%",
        label: "Average salary increase reported by alumni within 6 months of completion"
    }
];

const avatars = [
    "https://i.pravatar.cc/150?u=1",
    "https://i.pravatar.cc/150?u=2",
    "https://i.pravatar.cc/150?u=3",
    "https://i.pravatar.cc/150?u=4",
    "https://i.pravatar.cc/150?u=5",
    "https://i.pravatar.cc/150?u=6",
];

function WhyMastery() {
    return (
        <section id="about" className="relative py-24 bg-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Rating and Avatars */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
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
                                    className="w-10 h-10 rounded-full border-2 border-dark"
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex gap-0.5 text-secondary text-sm">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s}>★</span>
                                ))}
                            </div>
                            <span className="text-text-muted text-xs">4.6 Rate by 16,000+ Reviews</span>
                        </div>
                    </motion.div>

                    {/* Heading with Glow */}
                    <div className="relative mb-8">
                        {/* Heading Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-secondary/20 blur-[60px] rounded-full pointer-events-none z-0" />

                        <motion.h2
                            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight text-white relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Why technical mastery <br />
                            <span className="text-secondary italic">matters more than ever</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-text-muted text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Whether it's full-stack development, AI integration, or advanced architecture,
                        true expertise is the ultimate leverage in the modern economy. This platform
                        shows you exactly how to build, deploy, and scale high-performance systems
                        that solve real problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mb-32"
                    >
                        <Link to="/courses/react">
                            <button className="bg-secondary hover:bg-accent text-white px-10 py-4 rounded-lg font-bold flex items-center gap-2 mx-auto transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20">
                                Enroll free demo session
                                <span className="text-xl">›</span>
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col text-left"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <h3 className="text-5xl md:text-6xl font-bold font-display tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#444444] to-[#ffffff]">
                                {stat.value}
                            </h3>
                            <p className="text-text-muted text-sm leading-relaxed max-w-[240px]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyMastery;
