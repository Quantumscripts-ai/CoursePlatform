import { motion } from 'framer-motion';
import { IconBrandLinkedin } from '@tabler/icons-react';

const Instructor = () => {
    return (
        <section className="relative py-24 bg-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold font-display"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Meet Your <span className="text-secondary italic">Instructor</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    {/* Left Column: Image */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/assets/instructor.png"
                                alt="Dr. Alex Quantum"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                        </div>

                        {/* Background Accent */}
                        <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full bg-secondary/5 rounded-2xl blur-2xl" />
                    </motion.div>

                    {/* Right Column: Bio */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-text-muted font-medium mb-2 uppercase tracking-widest text-sm">
                            Lead Full-Stack Engineer
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                            Dr. Alex Quantum
                        </h3>

                        <div className="space-y-4 text-text-muted leading-relaxed text-base md:text-lg">
                            <p>
                                Dr. Alex Quantum is a veteran software architect with over 15 years of experience in building high-performance
                                distributed systems and advanced AI integrations. As a former lead at Silicon Valley's top tech firms,
                                he has pioneered scalable architectures that serve millions of users.
                            </p>
                            <p>
                                In this course, he will show you the exact frameworks and engineering patterns top-tier developers
                                rely on to build, scale, and maintain modern production-grade applications that solve real-world problems.
                            </p>
                        </div>

                        <motion.a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-8 text-secondary font-semibold hover:text-accent transition-colors"
                            whileHover={{ x: 5 }}
                        >
                            <div className="bg-secondary/10 p-2 rounded-lg">
                                <IconBrandLinkedin size={20} className="text-secondary" />
                            </div>
                            <span>LinkedIn</span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default Instructor;
