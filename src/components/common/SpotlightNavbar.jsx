import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

export function SpotlightNavbar({
    items = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "React", href: "/courses/react" },
        { label: "ML", href: "/courses/machine-learning" },
        { label: "DL", href: "/courses/deep-learning" },
    ],
    className,
    onItemClick,
}) {
    const navRef = useRef(null);
    const location = useLocation();

    // Find initial active index based on route
    const getActiveIndex = () => {
        const index = items.findIndex(item => item.href === location.pathname);
        return index !== -1 ? index : 0;
    };

    const [activeIndex, setActiveIndex] = useState(getActiveIndex());
    const [hoverX, setHoverX] = useState(null);

    const spotlightX = useRef(0);
    const ambienceX = useRef(0);

    // Update active index when location changes
    useEffect(() => {
        setActiveIndex(getActiveIndex());
    }, [location.pathname]);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;

        const handleMouseMove = (e) => {
            const rect = nav.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setHoverX(x);
            spotlightX.current = x;
            nav.style.setProperty("--spotlight-x", `${x}px`);
        };

        const handleMouseLeave = () => {
            setHoverX(null);
            const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
            if (activeItem) {
                const navRect = nav.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                const targetX = itemRect.left - navRect.left + itemRect.width / 2;

                animate(spotlightX.current, targetX, {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    onUpdate: (v) => {
                        spotlightX.current = v;
                        nav.style.setProperty("--spotlight-x", `${v}px`);
                    }
                });
            }
        };

        nav.addEventListener("mousemove", handleMouseMove);
        nav.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            nav.removeEventListener("mousemove", handleMouseMove);
            nav.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [activeIndex]);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;
        const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

        if (activeItem) {
            const navRect = nav.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            const targetX = itemRect.left - navRect.left + itemRect.width / 2;

            animate(ambienceX.current, targetX, {
                type: "spring",
                stiffness: 200,
                damping: 20,
                onUpdate: (v) => {
                    ambienceX.current = v;
                    nav.style.setProperty("--ambience-x", `${v}px`);
                },
            });
        }
    }, [activeIndex]);

    const handleItemClick = (item, index) => {
        setActiveIndex(index);
        onItemClick?.(item, index);
    };

    return (
        <div className={cn("relative flex justify-center", className)}>
            <nav
                ref={navRef}
                className={cn(
                    "spotlight-nav spotlight-nav-bg glass-border spotlight-nav-shadow",
                    "relative h-11 rounded-full transition-all duration-300 overflow-hidden"
                )}
            >
                <ul className="relative flex items-center h-full px-2 gap-0 z-[10]">
                    {items.map((item, idx) => (
                        <li key={idx} className="relative h-full flex items-center justify-center">
                            <Link
                                to={item.href}
                                data-index={idx}
                                onClick={() => handleItemClick(item, idx)}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                                    activeIndex === idx
                                        ? "text-secondary"
                                        : "text-text-muted hover:text-text"
                                )}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* 1. The Moving Spotlight (Follows Mouse) - ORANGE */}
                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[1] opacity-0 transition-opacity duration-300"
                    style={{
                        opacity: hoverX !== null ? 1 : 0,
                        background: `
              radial-gradient(
                120px circle at var(--spotlight-x) 100%, 
                rgba(249, 115, 22, 0.15) 0%, 
                transparent 50%
              )
            `
                    }}
                />

                {/* 2. The Active State Ambience (Stays on Active) - ORANGE */}
                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2]"
                    style={{
                        background: `
              radial-gradient(
                60px circle at var(--ambience-x) 0%, 
                rgba(249, 115, 22, 1) 0%, 
                transparent 100%
              )
            `
                    }}
                />
            </nav>

            <style>{`
        .spotlight-nav {
          --spotlight-x: 0px;
          --ambience-x: 0px;
        }
      `}</style>
        </div>
    );
}

export default SpotlightNavbar;
