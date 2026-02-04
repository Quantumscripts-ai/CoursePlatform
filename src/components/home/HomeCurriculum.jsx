/**
 * HomeCurriculum - Course Modules Section for Home Page
 * Dark theme with orange accents - matches site theme
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { courses } from '../../data/courses';

function HomeCurriculum() {
    const [openModules, setOpenModules] = useState([1]);

    // Use the React course as the featured course on the home page
    const course = courses.react;

    const toggleModule = (moduleId) => {
        setOpenModules(prev =>
            prev.includes(moduleId)
                ? prev.filter(id => id !== moduleId)
                : [...prev, moduleId]
        );
    };

    const totalLessons = course?.curriculum?.reduce(
        (acc, mod) => acc + mod.lessons.length, 0
    ) || 0;

    // Sample avatars for the enrolled students display
    const studentAvatars = [
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg',
        'https://randomuser.me/api/portraits/women/3.jpg',
        'https://randomuser.me/api/portraits/men/4.jpg',
        'https://randomuser.me/api/portraits/women/5.jpg',
    ];

    return (
        <section className="py-24 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
                        What you'll learn
                        <br />
                        <span className="italic gradient-text pr-1">
                            in this course
                        </span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        This course takes you step by step through creating lead magnets and building sales funnels that actually convert.
                    </p>
                </motion.div>

                {/* Course Modules Header */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-text mb-2">Course modules</h3>
                    <p className="text-sm text-text-muted">
                        {course?.curriculum?.length || 6} Module · {totalLessons} Lecture · Total course time · 12-13 hours
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Course Modules */}
                    <div className="lg:w-[60%] flex flex-col gap-4">
                        {course?.curriculum?.map((module) => (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="gradient-card border border-border rounded-2xl overflow-hidden hover:border-border-hover transition-colors"
                            >
                                {/* Module Header */}
                                <button
                                    className={`w-full flex justify-between items-start p-6 text-left transition-colors hover:bg-white/[0.02] ${openModules.includes(module.id) ? 'border-b border-border' : ''}`}
                                    onClick={() => toggleModule(module.id)}
                                >
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs text-text-dim">
                                            {module.lessons.length} Sessions · Total {module.duration}
                                        </span>
                                        <h3 className="text-base font-semibold text-text">
                                            Module {module.id}: {module.module}
                                        </h3>
                                    </div>
                                    <span className={`w-7 h-7 flex items-center justify-center bg-dark-mid rounded-lg text-lg text-text transition-transform ${openModules.includes(module.id) ? 'rotate-180' : ''}`}>
                                        {openModules.includes(module.id) ? '−' : '+'}
                                    </span>
                                </button>

                                {/* Module Content - Expandable */}
                                <AnimatePresence>
                                    {openModules.includes(module.id) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-4">
                                                <p className="text-sm text-text-muted mb-4">
                                                    Understand the basics of {module.module.toLowerCase()} and why they're essential for online growth.
                                                </p>

                                                <ul className="flex flex-col gap-2">
                                                    {module.lessons.map((lesson, lessonIndex) => (
                                                        <li
                                                            key={lessonIndex}
                                                            className="flex justify-between items-center p-3 px-4 rounded-lg transition-colors hover:bg-white/[0.03]"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-secondary text-sm">✓</span>
                                                                <span className="text-sm text-text-muted">
                                                                    Lecture {lessonIndex + 1}: {lesson.title}
                                                                </span>
                                                            </div>
                                                            <span className="text-sm text-text-dim">
                                                                {lesson.duration}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column - Sticky Pricing Card */}
                    <div className="lg:w-[40%]">
                        <div className="sticky top-24">
                            <motion.div
                                className="gradient-card border border-border rounded-2xl overflow-hidden"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                {/* Urgency Badge */}
                                <div className="p-6 pb-0">
                                    <span className="text-secondary text-sm font-medium">
                                        ⚡ Only 2 days left at this price
                                    </span>
                                </div>

                                {/* Card Header */}
                                <div className="p-6 pt-4">
                                    <h3 className="text-xl font-bold text-text mb-1">
                                        {course?.title || 'Funnel mastery'}: The lead
                                    </h3>
                                    <h3 className="text-xl font-bold gradient-text mb-3">
                                        generation bootcamp
                                    </h3>
                                    <p className="text-sm text-text-muted leading-relaxed">
                                        Unlock proven frameworks to attract leads, convert them into sales, and scale your business with confidence.
                                    </p>
                                </div>

                                {/* Pricing */}
                                <div className="px-6 pb-4">
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-xs text-text-dim uppercase tracking-wider">Course Price</span>
                                    </div>
                                    <div className="flex items-baseline gap-3 mt-1">
                                        <span className="text-3xl font-bold text-text">
                                            ${course?.price?.discounted || 149}.00
                                        </span>
                                    </div>
                                    <div className="text-sm text-text-dim mt-1">
                                        Course value <span className="line-through">${course?.price?.original || 1499}.00</span>
                                    </div>
                                </div>

                                {/* Rating & Students */}
                                <div className="px-6 pb-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="flex text-secondary text-sm">
                                            ★★★★★
                                        </div>
                                        <span className="text-xs text-text-muted">
                                            {course?.stats?.students?.toLocaleString() || '4K'}+ students enrolled
                                        </span>
                                    </div>
                                </div>

                                {/* Avatar Stack */}
                                <div className="px-6 pb-4">
                                    <div className="flex -space-x-2">
                                        {studentAvatars.map((avatar, index) => (
                                            <img
                                                key={index}
                                                src={avatar}
                                                alt={`Student ${index + 1}`}
                                                className="w-8 h-8 rounded-full border-2 border-dark-card object-cover"
                                            />
                                        ))}
                                        <div className="w-8 h-8 rounded-full bg-dark-mid border-2 border-dark-card flex items-center justify-center text-xs text-text">
                                            +99
                                        </div>
                                    </div>
                                </div>

                                {/* What's Included */}
                                <div className="px-6 pb-4">
                                    <h4 className="text-sm font-semibold text-text mb-3">What's included:</h4>
                                    <ul className="flex flex-col gap-2">
                                        {[
                                            '10+ hours of step-by-step training',
                                            '18 structured sessions across 6 modules',
                                            'Access on desktop, mobile & TV',
                                            'Full lifetime access & future updates',
                                            'Certificate of completion',
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center gap-3 text-sm text-text-muted">
                                                <span className="text-text-dim">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <div className="p-6 pt-2">
                                    <button className="w-full py-4 px-6 bg-secondary text-dark font-semibold rounded-xl hover:shadow-lg hover:shadow-secondary/25 transition-all btn-orange">
                                        Reserved your seat now →
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeCurriculum;
