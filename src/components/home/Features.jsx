/**
 * Features Section - Orange Theme
 * Grid of feature cards with icons
 */
import { motion } from 'framer-motion';
import Card from '../common/Card';

const features = [
    {
        icon: '🎓',
        title: 'Expert Instructors',
        description: 'Learn from industry professionals with years of real-world experience at top tech companies.',
    },
    {
        icon: '🛠️',
        title: 'Hands-on Projects',
        description: 'Build a portfolio of real projects that demonstrate your skills to potential employers.',
    },
    {
        icon: '📈',
        title: 'Career Support',
        description: 'Get personalized guidance, resume reviews, and interview preparation from our career team.',
    },
    {
        icon: '👥',
        title: 'Community Access',
        description: 'Join thousands of learners, share insights, and network with peers worldwide.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

function Features() {
    return (
        <section className="relative py-24 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-text">
                        Why Choose <span className="text-secondary">Learn</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-lg mx-auto">
                        Everything you need to accelerate your tech career
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card glow hover className="text-center h-full flex flex-col">
                                <div className="text-5xl mb-4 flex justify-center">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-text">{feature.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Features;
