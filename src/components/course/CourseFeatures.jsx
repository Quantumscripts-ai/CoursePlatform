/**
 * CourseFeatures - Orange Theme
 */
import { motion } from 'framer-motion';

function CourseFeatures({ course }) {
    const features = [
        { icon: '🎬', label: 'Video Hours', value: course.features.videoHours },
        { icon: '🛠️', label: 'Projects', value: course.features.projects },
        { icon: '📄', label: 'Articles', value: course.features.articles },
        { icon: '📦', label: 'Resources', value: course.features.resources },
        { icon: '🏆', label: 'Certificate', value: course.features.certificate ? 'Yes' : 'No' },
        { icon: '♾️', label: 'Access', value: course.features.lifetime ? 'Lifetime' : 'Limited' },
    ];

    return (
        <section className="py-24 bg-dark-light border-y border-border">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-center mb-10 text-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    What You'll <span className="text-secondary">Get</span>
                </motion.h2>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 gradient-card border border-border rounded-2xl transition-all hover:border-secondary hover:-translate-y-1"
                        >
                            <span className="text-3xl mb-3">{feature.icon}</span>
                            <span className="text-2xl font-bold text-text">{feature.value}</span>
                            <span className="text-sm text-text-muted">{feature.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Highlights */}
                <motion.div
                    className="max-w-3xl mx-auto p-8 gradient-card border border-border rounded-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="text-xl font-semibold mb-6 text-text">What You'll Learn</h3>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {course.highlights.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-base text-text-muted">
                                <span className="flex-shrink-0 font-bold text-secondary">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}

export default CourseFeatures;
