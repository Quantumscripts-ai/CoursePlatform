/**
 * Course Showcase Section - Orange Theme
 * Display featured courses with hover effects
 */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../data/courses';
import Button from '../common/Button';

const courses = getAllCourses();

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

function CourseShowcase() {
    return (
        <section className="relative py-24 bg-dark-light">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-text">
                        Featured <span className="text-secondary">Courses</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-lg mx-auto">
                        Start your journey with our most popular courses
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {courses.map((course) => (
                        <motion.div key={course.id} variants={cardVariants}>
                            <Link to={`/courses/${course.slug}`} className="block">
                                <div className="group relative gradient-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-250 h-full hover:border-secondary hover:-translate-y-2">
                                    {/* Badge */}
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-secondary/20 border border-secondary rounded-full text-xs font-semibold uppercase tracking-wider text-secondary">
                                            {course.badge}
                                        </span>
                                    </div>

                                    {/* Icon */}
                                    <div className="w-20 h-20 flex items-center justify-center bg-white/5 rounded-xl mb-6">
                                        <span className="text-4xl">{course.icon}</span>
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-2xl font-bold text-text">{course.title}</h3>
                                        <p className="text-sm text-text-muted">{course.tagline}</p>

                                        {/* Stats */}
                                        <div className="flex gap-4 mt-4">
                                            <span className="text-sm font-semibold text-secondary">★ {course.stats.rating}</span>
                                            <span className="text-sm text-text-muted">{(course.stats.students / 1000).toFixed(1)}K students</span>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-baseline gap-2 mt-4">
                                            <span className="text-2xl font-bold text-text">
                                                {course.price.currency}{course.price.discounted}
                                            </span>
                                            <span className="text-base text-text-dim line-through">
                                                {course.price.currency}{course.price.original}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Hover Glow */}
                                    <div className="absolute inset-[-1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 bg-[radial-gradient(300px_circle_at_50%_50%,rgba(249,115,22,0.15),transparent_40%)]" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Button variant="primary" size="lg">
                        View All Courses →
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

export default CourseShowcase;
