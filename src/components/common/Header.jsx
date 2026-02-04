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
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
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
                    <div className="flex justify-end items-center">
                        <NavbarButton>Get Started</NavbarButton>
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

