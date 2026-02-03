/**
 * Team Section - Orange Theme
 */
import { motion } from 'framer-motion';

const team = [
    { name: 'Alex Chen', role: 'Founder & CEO', bio: 'Former Google engineer with a passion for education.', avatar: '👨‍💻' },
    { name: 'Dr. Sarah Williams', role: 'Head of AI', bio: 'PhD from Stanford, former Google Brain researcher.', avatar: '👩‍🔬' },
    { name: 'Prof. Michael Zhang', role: 'Lead Instructor', bio: 'Author of 50+ papers on deep learning.', avatar: '👨‍🏫' },
    { name: 'Emily Rodriguez', role: 'Head of Community', bio: 'Building connections that matter.', avatar: '👩‍💼' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

function Team() {
    return (
        <section className="py-24 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-text">
                        Meet Our <span className="text-secondary">Team</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-lg mx-auto">
                        The passionate minds behind Learn
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {team.map((member, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <div className="text-center p-8 gradient-card border border-border rounded-2xl transition-all duration-250 hover:border-secondary hover:-translate-y-2 hover:glow-primary">
                                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center text-5xl bg-dark-mid rounded-full border-2 border-border">
                                    {member.avatar}
                                </div>
                                <h3 className="text-xl font-semibold text-text mb-1">{member.name}</h3>
                                <span className="inline-block text-sm text-secondary mb-4">{member.role}</span>
                                <p className="text-sm text-text-muted mb-4">{member.bio}</p>
                                <div className="flex justify-center gap-2">
                                    {['in', '𝕏'].map((icon) => (
                                        <a
                                            key={icon}
                                            href="#"
                                            className="w-9 h-9 flex items-center justify-center bg-dark-mid border border-border rounded-lg text-text-muted text-sm font-bold transition-all hover:border-secondary hover:text-secondary"
                                        >
                                            {icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Team;
