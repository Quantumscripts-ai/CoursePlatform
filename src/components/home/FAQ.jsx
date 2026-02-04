import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
    {
        question: "Do I need technical skills?",
        answer: "No prior technical skills are required. We start from the fundamentals and guide you step-by-step through advanced concepts, ensuring a smooth learning curve for everyone."
    },
    {
        question: "Will I need to buy extra tools?",
        answer: "All the tools we use in the course are either free, open-source, or have extensive free tiers. You won't need to make any additional purchases to complete the training."
    },
    {
        question: "How long do I have access to the course?",
        answer: "Once you enroll, you get lifetime access to the course materials, including all future updates and additions to the curriculum."
    },
    {
        question: "Is there a refund policy?",
        answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason, just let us know within 30 days of purchase for a full refund."
    },
    {
        question: "Can I follow this if I’m just starting out?",
        answer: "Absolutely! The course is designed to take you from a complete beginner to a confident professional. We provide all the support and resources you need to succeed."
    },
    {
        question: "Will this help if I already have a business?",
        answer: "Definitely. The technical skills and systems you'll learn are designed to optimize and scale existing business operations, helping you achieve higher efficiency and better results."
    }
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="relative py-24 bg-dark overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Frequently <br />
                        <span className="text-secondary italic">asked questions</span>
                    </motion.h2>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="border-b border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-secondary' : 'text-white group-hover:text-secondary/80'}`}>
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    className="text-text-muted group-hover:text-secondary transition-colors"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 text-text-muted leading-relaxed max-w-3xl">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
