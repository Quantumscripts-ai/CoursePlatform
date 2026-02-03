/**
 * CourseCurriculum - Orange Theme
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CourseCurriculum({ course }) {
    const [openModules, setOpenModules] = useState([1]);

    const toggleModule = (moduleId) => {
        setOpenModules(prev =>
            prev.includes(moduleId)
                ? prev.filter(id => id !== moduleId)
                : [...prev, moduleId]
        );
    };

    const totalLessons = course.curriculum.reduce(
        (acc, mod) => acc + mod.lessons.length, 0
    );

    return (
        <section className="py-24 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-text">
                        Course <span className="text-secondary">Curriculum</span>
                    </h2>
                    <p className="text-base text-text-muted">
                        {course.curriculum.length} modules • {totalLessons} lessons • {course.features.videoHours} hours
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto flex flex-col gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {course.curriculum.map((module) => (
                        <div
                            key={module.id}
                            className="gradient-card border border-border rounded-2xl overflow-hidden transition-colors hover:border-border-hover"
                        >
                            <button
                                className={`w-full flex justify-between items-center p-6 text-left transition-colors hover:bg-white/[0.02] ${openModules.includes(module.id) ? 'border-b border-border' : ''}`}
                                onClick={() => toggleModule(module.id)}
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs uppercase tracking-wider font-semibold text-secondary">
                                        Module {module.id}
                                    </span>
                                    <h3 className="text-lg font-semibold text-text">{module.module}</h3>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-text-muted">{module.duration}</span>
                                    <span className="w-7 h-7 flex items-center justify-center bg-dark-mid rounded-lg text-lg text-text">
                                        {openModules.includes(module.id) ? '−' : '+'}
                                    </span>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openModules.includes(module.id) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="p-2 px-6 pb-6 flex flex-col gap-1">
                                            {module.lessons.map((lesson, index) => (
                                                <li
                                                    key={index}
                                                    className="flex justify-between items-center p-3 px-4 rounded-lg transition-colors hover:bg-white/[0.03]"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-xs text-text-dim">▶</span>
                                                        <span className="text-sm text-text-muted">{lesson.title}</span>
                                                        {lesson.preview && (
                                                            <span className="px-2 py-0.5 bg-secondary/20 rounded text-xs text-secondary font-semibold">
                                                                Preview
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-sm text-text-dim">{lesson.duration}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default CourseCurriculum;
