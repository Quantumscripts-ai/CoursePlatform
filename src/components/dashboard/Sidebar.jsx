/**
 * Sidebar Component
 * Glassmorphic navigation panel for the student dashboard
 * Features: Learning, Resources, Community navigation with glow effects
 */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconBook, IconFolder, IconUsers, IconLogout, IconMenu2, IconX, IconLayoutSidebar, IconLayoutSidebarLeftCollapse, IconUser } from '@tabler/icons-react';
import Logo from '../common/Logo';

const navItems = [
    { id: 'learning', label: 'Student Dashboard', icon: IconBook, path: '/studentdashboard' },
    { id: 'resources', label: 'Resources', icon: IconFolder, path: '/studentdashboard/resources' },
    { id: 'community', label: 'Community', icon: IconUsers, path: '/studentdashboard/community' },
];

function Sidebar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const isActive = (path) => {
        if (path === '/studentdashboard') {
            return location.pathname === '/studentdashboard';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 md:hidden p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-secondary"
            >
                {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Panel */}
            <aside
                className={`
                    fixed md:sticky top-0 left-0 h-screen z-40
                    ${isCollapsed ? 'w-72 md:w-20 lg:w-20' : 'w-72 md:w-24 lg:w-72'}
                    bg-white/5 backdrop-blur-2xl border-r border-white/10
                    flex flex-col
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                `}
            >
                {/* Logo & Toggle Header */}
                <div className={`p-6 relative flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    <Link to="/" className="flex items-center">
                        <Logo size={isCollapsed ? "sm" : "md"} showText={!isCollapsed} />
                    </Link>

                    {/* Toggle Button - Desktop Only */}
                    {!isCollapsed && (
                        <button
                            onClick={() => setIsCollapsed(true)}
                            className="hidden md:flex w-8 h-8 items-center justify-center bg-white/5 border border-white/10 text-secondary rounded-lg hover:bg-white/10 transition-all"
                            title="Collapse Sidebar"
                        >
                            <IconLayoutSidebar size={20} />
                        </button>
                    )}

                    {/* Show expand button replacement when collapsed */}
                    {isCollapsed && (
                        <button
                            onClick={() => setIsCollapsed(false)}
                            className="absolute inset-0 z-20 w-full h-full opacity-0 cursor-pointer"
                            title="Expand Sidebar"
                        />
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6">
                    <ul className="space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.path);

                            return (
                                <li key={item.id}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`
                                            flex items-center rounded-xl
                                            transition-all duration-200
                                            group relative overflow-hidden
                                            ${isCollapsed ? 'justify-center p-3' : 'gap-4 px-4 py-3.5'}
                                            ${active
                                                ? 'bg-secondary/10 text-secondary border border-secondary/30'
                                                : 'text-text-muted hover:text-text hover:bg-white/5'
                                            }
                                        `}
                                    >
                                        {/* Active glow effect */}
                                        {active && (
                                            <div
                                                className="absolute inset-0 opacity-30"
                                                style={{
                                                    background: 'radial-gradient(ellipse at left, rgba(249, 115, 22, 0.4), transparent 70%)',
                                                }}
                                            />
                                        )}

                                        <Icon
                                            size={22}
                                            className={`relative z-10 flex-shrink-0 ${active ? 'text-secondary' : 'group-hover:text-secondary transition-colors'}`}
                                        />
                                        {!isCollapsed && (
                                            <span className="relative z-10 font-medium md:hidden lg:block">
                                                {item.label}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Bottom Actions */}
                <div className="p-4 space-y-2">
                    <Link
                        to="/studentdashboard/profile"
                        className={`
                            flex items-center rounded-xl w-full
                            text-text-muted hover:text-text hover:bg-white/5
                            transition-all duration-200
                            ${isCollapsed ? 'justify-center p-3' : 'gap-4 px-4 py-3.5'}
                            ${location.pathname === '/studentdashboard/profile' ? 'bg-secondary/10 text-secondary border border-secondary/30' : ''}
                        `}
                    >
                        <IconUser size={22} className="flex-shrink-0" />
                        {!isCollapsed && (
                            <span className="font-medium md:hidden lg:block">Profile</span>
                        )}
                    </Link>

                    <button
                        className={`
                            flex items-center rounded-xl w-full
                            text-text-muted hover:text-red-400 hover:bg-red-500/10
                            transition-all duration-200
                            ${isCollapsed ? 'justify-center p-3' : 'gap-4 px-4 py-3.5'}
                        `}
                    >
                        <IconLogout size={22} className="flex-shrink-0" />
                        {!isCollapsed && (
                            <span className="font-medium md:hidden lg:block">Logout</span>
                        )}
                    </button>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
