/**
 * Stats Section - Orange Theme
 * Animated counters with achievements
 */
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
    { value: 15000, suffix: '+', label: 'Active Students', icon: '👨‍🎓' },
    { value: 50, suffix: '+', label: 'Expert Instructors', icon: '👨‍🏫' },
    { value: 95, suffix: '%', label: 'Success Rate', icon: '🎯' },
    { value: 100, suffix: '+', label: 'Hours of Content', icon: '📚' },
];

function AnimatedCounter({ value, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

function Stats() {
    return (
        <section className="relative py-24 bg-dark border-y border-border">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center p-8 gradient-card border border-border rounded-2xl transition-all duration-250 hover:border-secondary hover:-translate-y-1 hover:glow-primary"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <span className="text-4xl mb-4">{stat.icon}</span>
                            <span className="text-4xl font-extrabold font-display text-secondary mb-1">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </span>
                            <span className="text-sm text-text-muted font-medium">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Stats;
