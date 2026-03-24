/**
 * Header Component - Orange Theme
 * Sticky navigation with glassmorphism effect
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import {
    Navbar,
    NavBody,
    NavItems,
    NavbarLogo,
    NavbarButton,
    MobileNav,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu
} from './ResizableNavbar';

const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#mentor', label: 'Mentors' },
    { href: '/#curriculum', label: 'Syllabus' },
    { href: '/#reviews', label: 'Reviews' },
    { href: '/#faq', label: 'FAQ' },
];

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <div className="flex items-center gap-8 w-full">
                    <NavbarLogo />
                    <NavItems items={navLinks} />
                    <div className="flex justify-end items-center gap-4 ml-auto">
                        <Link to="/login" className="text-sm font-semibold text-text-muted hover:text-secondary transition-all duration-300 hover:tracking-wide px-2">
                            Login
                        </Link>
                        <Link to="/signup">
                            <NavbarButton className="shadow-lg shadow-secondary/10 hover:shadow-secondary/20 transition-all">
                                Get Started
                            </NavbarButton>
                        </Link>
                    </div>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>
                <MobileNavMenu isOpen={isMobileMenuOpen}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className="w-full px-4 py-3 text-lg font-medium text-text-muted hover:text-secondary hover:bg-white/5 rounded-lg transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 w-full">
                        <Button variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
                            Get Started
                        </Button>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}

export default Header;

