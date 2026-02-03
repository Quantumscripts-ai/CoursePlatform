/**
 * CoursePricing - Orange Theme
 */
import { motion } from 'framer-motion';
import Button from '../common/Button';

function CoursePricing({ course }) {
    const discount = Math.round(
        ((course.price.original - course.price.discounted) / course.price.original) * 100
    );

    return (
        <section className="py-24 bg-dark-light">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="max-w-md mx-auto gradient-card border border-border rounded-3xl overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Header */}
                    <div className="text-center p-10 bg-gradient-to-b from-secondary/10 to-transparent border-b border-border">
                        <span className="inline-block px-4 py-1.5 bg-secondary text-dark rounded-full text-sm font-bold mb-4">
                            {discount}% OFF
                        </span>
                        <div className="flex items-baseline justify-center gap-3 mb-2">
                            <span className="text-5xl font-extrabold font-display text-text">
                                {course.price.currency}{course.price.discounted}
                            </span>
                            <span className="text-xl text-text-dim line-through">
                                {course.price.currency}{course.price.original}
                            </span>
                        </div>
                        <p className="text-sm text-text-muted">30-day money-back guarantee</p>
                    </div>

                    {/* Body */}
                    <div className="p-8">
                        <Button variant="primary" size="lg" fullWidth>
                            Enroll Now
                        </Button>

                        <ul className="mt-6 flex flex-col gap-3">
                            {[
                                'Full lifetime access',
                                `${course.features.videoHours} hours of video`,
                                `${course.features.projects} hands-on projects`,
                                'Certificate of completion',
                                'Direct instructor support',
                                'Access on mobile and desktop',
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-base text-text-muted">
                                    <span className="text-secondary">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer */}
                    <div className="px-8 pb-8 text-center">
                        <p className="text-sm text-text-dim">
                            Join {course.stats.students.toLocaleString()}+ students learning {course.title}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CoursePricing;
