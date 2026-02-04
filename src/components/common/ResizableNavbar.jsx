import { cn } from "../../lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

export const Navbar = ({
    children,
    className
}) => {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            className={cn("fixed inset-x-0 top-0 z-50 w-full flex justify-center", className)}>
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, { visible })
                    : child)}
        </motion.div>
    );
};

export const NavBody = ({
    children,
    className,
    visible
}) => {
    const navRef = useRef(null);
    const [hoverX, setHoverX] = useState(null);

    React.useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;

        const handleMouseMove = (e) => {
            const rect = nav.getBoundingClientRect();
            const x = e.clientX - rect.left;
            nav.style.setProperty("--spotlight-x", `${x}px`);
            setHoverX(x);
        };

        const handleMouseLeave = () => setHoverX(null);

        nav.addEventListener("mousemove", handleMouseMove);
        nav.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            nav.removeEventListener("mousemove", handleMouseMove);
            nav.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <motion.div
            ref={navRef}
            animate={{
                backdropFilter: visible ? "blur(12px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.2)"
                    : "none",
                width: visible ? "60%" : "100%",
                y: visible ? 12 : 0,
                backgroundColor: visible ? "rgba(26, 26, 26, 0.8)" : "transparent",
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 40,
            }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-8 py-3 lg:flex overflow-hidden",
                className
            )}
            style={{
                "--spotlight-x": "0px"
            }}
        >
            {/* Spotlight Layer */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    opacity: hoverX !== null ? 1 : 0,
                    background: `radial-gradient(120px circle at var(--spotlight-x) 50%, rgba(249, 115, 22, 0.15) 0%, transparent 70%)`
                }}
            />
            <div className="relative z-10 w-full flex items-center justify-between">
                {children}
            </div>
        </motion.div>
    );
};

export const NavItems = ({
    items,
    className
}) => {
    const [hovered, setHovered] = useState(null);
    const location = useLocation();

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "flex flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-4",
                className
            )}>
            {items.map((item, idx) => {
                const isActive = (location.pathname + location.hash) === item.href;
                return (
                    <Link
                        key={`link-${idx}`}
                        to={item.href}
                        onMouseEnter={() => setHovered(idx)}
                        className={cn(
                            "relative px-4 py-2 transition-colors",
                            isActive ? "text-text" : "text-text-muted hover:text-text"
                        )}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="nav-underline"
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-20">{item.label}</span>
                    </Link>
                );
            })}
        </motion.div>
    );
};

export const MobileNav = ({
    children,
    className,
    visible
}) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(12px)" : "none",
                width: visible ? "95%" : "100%",
                borderRadius: visible ? "1rem" : "0",
                y: visible ? 10 : 0,
                backgroundColor: visible ? "rgba(26, 26, 26, 0.9)" : "transparent",
                boxShadow: visible ? "0 4px 20px rgba(0,0,0,0.4)" : "none",
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 40,
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full flex-col items-center justify-between bg-transparent px-6 py-4 lg:hidden",
                className
            )}>
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({
    children,
    className
}) => {
    return (
        <div
            className={cn("flex w-full flex-row items-center justify-between", className)}>
            {children}
        </div>
    );
};

export const MobileNavMenu = ({
    children,
    className,
    isOpen
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className={cn(
                        "absolute inset-x-0 top-[110%] z-50 flex w-full flex-col items-start justify-start gap-2 rounded-xl bg-dark-card/95 backdrop-blur-xl p-4 shadow-2xl border border-white/10",
                        className
                    )}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick
}) => {
    return (
        <button onClick={onClick} className="p-2 text-text">
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
    );
};

export const NavbarLogo = () => {
    return (
        <Link to="/" className="relative z-20 flex items-center">
            <Logo size="md" />
        </Link>
    );
};

export const NavbarButton = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            className={cn(
                "btn-orange px-6 py-2 text-sm font-bold transition-all hover:scale-105 active:scale-95",
                className
            )}
            {...props}>
            {children}
        </button>
    );
};
