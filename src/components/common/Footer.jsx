/**
 * Footer Component - Minimalist Redesign
 */
import { motion } from 'framer-motion';
import Logo from './Logo';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black text-white py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Row: Brand, Links, Socials */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <Logo size="sm" />
                        <span className="text-xl font-bold font-display tracking-tight">Quantum</span>
                    </div>

                    {/* Horizontal Nav Links */}
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {[
                            { label: 'About Us', href: '/#about' },
                            { label: 'Meet the mentor', href: '/#mentor' },
                            { label: 'Curriculum', href: '/#curriculum' },
                            { label: 'Reviews', href: '/#reviews' },
                            { label: 'FAQs', href: '/#faq' }
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-text-muted hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {[
                            { icon: '𝕏', label: 'X' },
                            { icon: '', label: 'Instagram' },
                            { icon: '', label: 'Facebook' }
                        ].map((social) => (
                            <a
                                key={social.label}
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1"
                                aria-label={social.label}
                            >
                                <span className="text-lg">{social.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Row: Copyright, Credits, Scroll to Top */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
                    {/* Copyright */}
                    <p className="text-sm text-text-muted">
                        © {new Date().getFullYear()} Quantum Mastery. All rights reserved.
                    </p>

                    {/* Credits */}
                    <div className="flex items-center gap-4 text-xs font-medium">
                        <div className="flex items-center gap-1.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                            <span className="text-text-muted uppercase tracking-widest text-[10px]">Made by</span>
                            <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center text-[10px] text-white font-bold">F</div>
                            <span className="text-white">Flowcub design.</span>
                        </div>
                        <div className="flex items-center gap-1.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                            <span className="text-text-muted uppercase tracking-widest text-[10px]">Powered by</span>
                            <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center text-[10px] text-white font-bold">W</div>
                            <span className="text-white">Webflow</span>
                        </div>
                    </div>

                    {/* Scroll to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        className="w-10 h-10 flex items-center justify-center bg-dark-card border border-white/10 rounded-full hover:border-secondary hover:text-secondary transition-all"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
