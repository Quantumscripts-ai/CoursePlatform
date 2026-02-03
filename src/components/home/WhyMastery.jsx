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

function WhyMastery() {
    return (
        <section className="relative py-32 bg-dark overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why technical mastery <br />
                        <span className="text-secondary italic">matters more than ever</span>
                    </motion.h2>

                    <motion.p
                        className="text-text-muted text-lg leading-relaxed mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Whether it's full-stack development, AI integration, or advanced architecture,
                        true expertise is the ultimate leverage in the modern economy. This platform
                        shows you exactly how to build, deploy, and scale high-performance systems
                        that solve real problems and turn ideas into reality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link to="/courses/react">
                            <button className="btn-orange px-10 py-4 text-base font-bold shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all">
                                Enroll free demo session ›
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-32">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col text-left border-l border-white/10 pl-6 py-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <h3 className="text-5xl md:text-6xl font-black font-display text-white/90 mb-4 tracking-tighter">
                                {stat.value}
                            </h3>
                            <p className="text-text-muted text-sm leading-relaxed max-w-[200px]">
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
