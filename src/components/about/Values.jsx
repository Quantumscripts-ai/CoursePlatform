/**
 * Values Section - Orange Theme
 */
import { motion } from 'framer-motion';
import Card from '../common/Card';

const values = [
    { icon: '🎯', title: 'Excellence', description: 'We strive for excellence in every course, every lesson, and every interaction.' },
    { icon: '💡', title: 'Innovation', description: 'Staying ahead of the curve with cutting-edge content and teaching methods.' },
    { icon: '🤝', title: 'Community', description: 'Building a supportive community where learners help each other grow.' },
    { icon: '🌍', title: 'Accessibility', description: 'Making quality education accessible to everyone, everywhere.' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

function Values() {
    return (
        <section className="py-24 bg-dark-light">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-text">
                        Our Core <span className="text-secondary">Values</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-lg mx-auto">
                        The principles that guide everything we do
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {values.map((value, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card glow hover className="text-center h-full flex flex-col">
                                <div className="text-5xl mb-4 flex justify-center">{value.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-text">{value.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed">{value.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Values;
