/**
 * CourseHeader - Orange Theme
 * Hero section for course pages
 */
import { motion } from 'framer-motion';
import Button from '../common/Button';

function CourseHeader({ course }) {
    return (
        <section className="relative py-20 overflow-hidden bg-dark">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute left-0 top-0 bottom-0 w-[40%]"
                    style={{ background: 'radial-gradient(ellipse 80% 100% at 0% 50%, rgba(249, 115, 22, 0.15), transparent 70%)' }}
                />
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[100px] -top-[200px] -right-[100px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <span className="inline-block px-4 py-1.5 bg-secondary/20 border border-secondary rounded-full text-xs font-bold uppercase tracking-wider text-secondary mb-6">
                            {course.badge}
                        </span>

                        {/* Title */}
                        <h1 className="flex items-center gap-4 text-[clamp(2rem,5vw,3.5rem)] mb-4 text-text">
                            <span className="text-[0.9em]">{course.icon}</span>
                            {course.title}
                        </h1>

                        {/* Tagline */}
                        <p className="text-xl font-medium mb-4 text-secondary">
                            {course.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-lg text-text-muted leading-relaxed mb-8">
                            {course.description}
                        </p>

                        {/* Stats Row */}
                        <div className="flex items-center gap-4 flex-wrap mb-8">
                            <div className="flex items-center gap-1.5">
                                <span className="text-secondary">★</span>
                                <span className="font-semibold text-text">{course.stats.rating}</span>
                                <span className="text-sm text-text-muted">({course.stats.reviewCount.toLocaleString()} reviews)</span>
                            </div>
                            <span className="text-text-dim hidden sm:inline">•</span>
                            <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-text">{course.stats.students.toLocaleString()}</span>
                                <span className="text-sm text-text-muted">students</span>
                            </div>
                            <span className="text-text-dim hidden sm:inline">•</span>
                            <span className="text-sm text-text-muted">Updated {course.stats.lastUpdated}</span>
                        </div>

                        {/* Instructor */}
                        <div className="flex items-center gap-4 p-4 bg-dark-card border border-border rounded-xl w-fit mb-8">
                            <div className="w-12 h-12 flex items-center justify-center text-2xl bg-dark-mid rounded-full">
                                {course.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-text">{course.instructor.name}</span>
                                <span className="text-sm text-text-muted">{course.instructor.title}</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-4">
                            <Button variant="primary" size="lg">
                                Enroll Now - {course.price.currency}{course.price.discounted}
                            </Button>
                            <span className="text-lg text-text-dim line-through">
                                {course.price.currency}{course.price.original}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default CourseHeader;
