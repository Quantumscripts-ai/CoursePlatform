/**
 * Footer Component - Orange Theme
 */
import { Link } from 'react-router-dom';
import Logo from './Logo';

const footerLinks = {
    courses: [
        { path: '/courses/react', label: 'React Mastery' },
        { path: '/courses/machine-learning', label: 'Machine Learning' },
        { path: '/courses/deep-learning', label: 'Deep Learning' },
    ],
    company: [
        { path: '/about', label: 'About Us' },
        { path: '/#', label: 'Careers' },
        { path: '/#', label: 'Blog' },
    ],
    support: [
        { path: '/#', label: 'Help Center' },
        { path: '/#', label: 'Contact' },
        { path: '/#', label: 'Privacy Policy' },
    ],
};

const socialLinks = [
    { icon: '𝕏', url: '#', label: 'Twitter' },
    { icon: 'in', url: '#', label: 'LinkedIn' },
    { icon: '▶', url: '#', label: 'YouTube' },
    { icon: '◉', url: '#', label: 'Discord' },
];

function Footer() {
    return (
        <footer className="relative bg-dark pt-16 mt-16">
            {/* Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-secondary opacity-50" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-16 pb-12 border-b border-border">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Logo size="lg" />
                        <p className="text-text-muted text-base leading-relaxed max-w-[300px]">
                            Empowering learners worldwide with cutting-edge courses in technology and AI.
                        </p>
                        <div className="flex gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    className="flex items-center justify-center w-10 h-10 bg-dark-card border border-border rounded-lg text-text-muted text-sm font-bold transition-all hover:border-secondary hover:text-secondary hover:-translate-y-0.5"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-semibold text-text uppercase tracking-wider">Courses</h4>
                            <ul className="flex flex-col gap-2">
                                {footerLinks.courses.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="text-text-muted text-sm hover:text-secondary transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-semibold text-text uppercase tracking-wider">Company</h4>
                            <ul className="flex flex-col gap-2">
                                {footerLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.path} className="text-text-muted text-sm hover:text-secondary transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-semibold text-text uppercase tracking-wider">Support</h4>
                            <ul className="flex flex-col gap-2">
                                {footerLinks.support.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.path} className="text-text-muted text-sm hover:text-secondary transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 text-center">
                    <p className="text-sm text-text-dim">© 2026 Learn. All rights reserved.</p>
                    <p className="text-sm text-text-dim flex items-center gap-1">
                        Made with <span className="text-secondary">🧡</span> for learners everywhere
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
