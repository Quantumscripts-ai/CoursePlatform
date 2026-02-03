import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContainerScroll from '../common/ContainerScroll';

function Hero() {
    return (
        <section className="relative min-h-screen bg-dark overflow-hidden pt-32 pb-32">
            {/* Orange Glow Background Effects - Subtle */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute left-0 top-0 bottom-0 w-[40%] opacity-50"
                    style={{
                        background: 'radial-gradient(ellipse 80% 100% at 0% 50%, rgba(249, 115, 22, 0.15), transparent 70%)',
                    }}
                />
                <div
                    className="absolute right-0 top-0 bottom-0 w-[40%] opacity-50"
                    style={{
                        background: 'radial-gradient(ellipse 80% 100% at 100% 50%, rgba(249, 115, 22, 0.15), transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 w-full px-4">
                <ContainerScroll
                    titleComponent={
                        <div className="flex flex-col items-center">
                            {/* Rating Badge */}
                            <motion.div
                                className="flex items-center justify-center gap-2 mb-8 bg-dark-card/50 backdrop-blur-sm border border-border px-4 py-2 rounded-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className={star <= 4 ? 'text-secondary' : 'text-secondary/40'}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <span className="text-text-muted text-sm">4.6 Rate by 16,000+ Reviews</span>
                            </motion.div>

                            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold font-display leading-[1.1] mb-6 tracking-tight text-text">
                                Master the <span className="text-secondary">Future of Tech</span>
                                <br />
                                & Build Your Career
                            </h1>

                            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                                Master the art of creating amazing applications and
                                building skills that convert — step by step.
                            </p>

                            <div className="flex justify-center items-center gap-6 flex-wrap mb-48">
                                <Link to="/courses/react">
                                    <button className="btn-orange flex items-center gap-2 px-8 py-4">
                                        Reserved your seat now
                                        <span className="text-xl">›</span>
                                    </button>
                                </Link>
                                <Link
                                    to="/about"
                                    className="text-text-muted hover:text-text transition-colors flex items-center gap-2 font-medium bg-white/5 px-6 py-4 rounded-full border border-white/10"
                                >
                                    Book a demo session
                                    <span className="text-xl">›</span>
                                </Link>
                            </div>
                        </div>
                    }
                >
                    {/* Video Content inside the Card */}
                    <div className="relative h-full w-full bg-dark overflow-hidden group">
                        {/* Video Placeholder Background */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-mid to-dark transition-all duration-500 group-hover:scale-105">
                            {/* Decorative elements */}
                            <div className="absolute inset-0 pointer-events-none opacity-40">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                                        backgroundSize: '40px 40px'
                                    }}
                                />
                            </div>

                            {/* Play Button Overlay */}
                            <motion.button
                                className="z-20 w-24 h-24 rounded-full bg-secondary text-dark flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all hover:scale-110"
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </motion.button>

                            {/* Gradient overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark opacity-60" />
                            <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>

                        {/* Video UI details */}
                        <div className="absolute bottom-6 left-6 z-30 transition-transform duration-500 group-hover:translate-x-2">
                            <h3 className="text-xl font-bold text-text mb-1">Introduction to Mastery</h3>
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-0.5 bg-secondary text-dark text-[10px] font-bold rounded uppercase">New</span>
                                <p className="text-text-muted text-sm">2:45 mins • HD 4K</p>
                            </div>
                        </div>

                        <div className="absolute top-6 right-6 z-30 flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-[10px] font-bold text-text uppercase tracking-widest">Live Now</span>
                        </div>
                    </div>
                </ContainerScroll>
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-full h-[50%] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}

export default Hero;

