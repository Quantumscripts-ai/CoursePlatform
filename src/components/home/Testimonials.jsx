import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const testimonials = [
    {
        id: 1,
        quote: "The Quantum team's expertise helped us overcome complex challenges: organizing our ML pipelines to efficiently scale production systems. Their AI-powered solutions have become an integral part of our decision-making and daily operations.",
        name: "Sarah Chen",
        role: "Head of Engineering",
        company: "TechVentures",
        logo: "TV"
    },
    {
        id: 2,
        quote: "Quantum possesses highly specialized expertise in AI and machine learning. The solution developed by Quantum, which is consulted religiously every day, has become the benchmark for over a hundred engineers in our organization.",
        name: "Michael Rodriguez",
        role: "CTO",
        company: "DataFlow",
        logo: "DF"
    },
    {
        id: 3,
        quote: "I've worked with Quantum on several large-scale projects. They stand out for their understanding of business needs and their ability to translate those needs into scalable solutions. The quality of the deliverables is impeccable.",
        name: "Emily Watson",
        role: "Product Director",
        company: "ScaleUp",
        logo: "SU"
    },
    {
        id: 4,
        quote: "The training programs from Quantum have transformed how our team approaches development. We've seen a 40% increase in productivity and our code quality has improved dramatically since implementing their methodologies.",
        name: "James Park",
        role: "VP of Technology",
        company: "InnovateTech",
        logo: "IT"
    }
];

function Testimonials() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (index) => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.children[0]?.offsetWidth || 400;
            const gap = 24;
            scrollRef.current.scrollTo({
                left: index * (cardWidth + gap),
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.children[0]?.offsetWidth || 400;
            const gap = 24;
            const newIndex = Math.round(scrollRef.current.scrollLeft / (cardWidth + gap));
            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        }
    };

    return (
        <section className="relative py-24 bg-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Heading with Glow Effect */}
                <motion.div
                    className="text-center mb-20 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-secondary/10 blur-[80px] rounded-full pointer-events-none z-0" />
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight text-white relative z-10">
                        Together, We help transform <br />
                        <span className="text-secondary italic">your skills into active mastery</span>
                    </h2>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className="flex-shrink-0 w-[320px] md:w-[420px] snap-start"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="glass rounded-2xl p-8 h-full border border-white/5 hover:border-secondary/30 transition-all duration-500 group relative">
                                    {/* Quote Icon or Decoration */}
                                    <div className="absolute top-6 right-8 text-secondary/10 group-hover:text-secondary/20 transition-colors duration-500">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H4.017V21H6.017Z" />
                                        </svg>
                                    </div>

                                    {/* Quote */}
                                    <p className="text-text-muted text-base md:text-lg leading-relaxed mb-10 relative z-10 group-hover:text-white transition-colors duration-500">
                                        "{testimonial.quote}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4 mt-auto">
                                        {/* Company Initials as Logo */}
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 flex items-center justify-center text-secondary font-bold text-lg group-hover:scale-110 transition-transform duration-500">
                                            {testimonial.logo}
                                        </div>
                                        <div>
                                            <p className="font-display font-bold text-white text-base">
                                                {testimonial.name}
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <span className="w-1 h-1 rounded-full bg-secondary" />
                                                <p className="text-secondary text-xs font-medium uppercase tracking-wider">
                                                    {testimonial.role} • {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === index
                                        ? 'w-10 bg-secondary shadow-[0_0_10px_rgba(249,115,22,0.5)]'
                                        : 'w-3 bg-white/10 hover:bg-white/30'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Hide scrollbar CSS */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}

export default Testimonials;
