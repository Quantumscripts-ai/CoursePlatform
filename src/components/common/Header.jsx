/**
 * Header Component - Orange Theme
 * Sticky navigation with glassmorphism effect
 */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import Button from './Button';
import SpotlightNavbar from './SpotlightNavbar';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses/react', label: 'React' },
    { href: '/courses/machine-learning', label: 'ML' },
    { href: '/courses/deep-learning', label: 'DL' },
];

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-250
      ${isScrolled
                ? 'py-2 bg-dark/90 backdrop-blur-xl border-b border-border'
                : 'py-4'
            }
    `}>
            <div className="flex items-center justify-between max-w-7xl mx-auto px-6">
                <div className="flex-1 flex justify-start">
                    <Link to="/">
                        <Logo size="md" />
                    </Link>
                </div>

                {/* Desktop Spotlight Navigation */}
                <div className="hidden lg:block flex-1">
                    <SpotlightNavbar items={navLinks} />
                </div>

                {/* CTA Button */}
                <div className="hidden lg:flex flex-1 justify-end items-center gap-2">
                    <Button variant="primary" size="sm">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 p-1"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-full h-0.5 bg-text rounded transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-full h-0.5 bg-text rounded transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-full h-0.5 bg-text rounded transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-xl border-b border-border lg:hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="flex flex-col p-6 gap-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        to={link.href}
                                        className={`
                      block px-4 py-3 text-lg font-medium rounded-lg transition-all
                      ${location.pathname === link.href
                                                ? 'text-secondary bg-white/5'
                                                : 'text-text-muted hover:text-text hover:bg-white/5'
                                            }
                    `}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <Button variant="primary" fullWidth className="mt-4">
                                Get Started
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;

