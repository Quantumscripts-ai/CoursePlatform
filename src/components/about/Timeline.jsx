/**
 * Timeline Section - Orange Theme
 */
import { motion } from 'framer-motion';

const milestones = [
    { year: '2020', title: 'The Beginning', description: 'Founded with a vision to democratize tech education globally.', icon: '🚀' },
    { year: '2021', title: 'First 1,000 Students', description: 'Reached our first milestone with students from 50+ countries.', icon: '🎯' },
    { year: '2022', title: 'AI Courses Launch', description: 'Expanded into Machine Learning and Deep Learning courses.', icon: '🤖' },
    { year: '2023', title: '10K Community', description: 'Built a thriving community of learners and professionals.', icon: '👥' },
    { year: '2024', title: 'Industry Partnerships', description: 'Partnered with leading tech companies for job placements.', icon: '🤝' },
    { year: '2026', title: 'Today & Beyond', description: '15K+ students, 50+ courses, and growing every day.', icon: '✨' },
];

function Timeline() {
    return (
        <section className="py-24 bg-dark-light border-y border-border">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-text">
                        Our <span className="text-secondary">Journey</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-lg mx-auto">
                        From a small idea to a global learning platform
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-accent -translate-x-1/2 hidden md:block" />

                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex items-center mb-10 ${index % 2 === 0 ? 'md:justify-start md:pr-[calc(50%+30px)]' : 'md:justify-end md:pl-[calc(50%+30px)]'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={`gradient-card border border-border rounded-2xl p-6 max-w-sm transition-all hover:border-secondary hover:-translate-y-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                <span className="text-3xl mb-3 block">{milestone.icon}</span>
                                <span className="inline-block px-3 py-1 bg-secondary text-dark rounded-md text-xs font-bold mb-3">
                                    {milestone.year}
                                </span>
                                <h3 className="text-lg font-semibold text-text mb-1">{milestone.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed">{milestone.description}</p>
                            </div>

                            {/* Timeline Dot */}
                            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-dark border-[3px] border-secondary rounded-full z-10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Timeline;
