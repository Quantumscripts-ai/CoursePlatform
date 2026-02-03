/**
 * Logo Component - Orange Theme
 * Abstract "L" with orange gradient
 */
import { motion } from 'framer-motion';

function Logo({ size = 'md', showText = true }) {
    const sizes = {
        sm: { icon: 28, text: 'text-xl' },
        md: { icon: 40, text: 'text-2xl' },
        lg: { icon: 56, text: 'text-3xl' },
    };

    const { icon, text } = sizes[size];

    return (
        <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
        >
            <svg
                width={icon}
                height={icon}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_10px_rgba(249,115,22,0.4)] hover:drop-shadow-[0_0_15px_rgba(251,146,60,0.5)] transition-all"
            >
                <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#fb923c" />
                    </linearGradient>
                    <filter id="logoGlow">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#logoGlow)" transform="skewX(-5)">
                    <rect x="6" y="4" width="8" height="22" rx="2" fill="url(#logoGrad)" />
                    <rect x="6" y="20" width="18" height="6" rx="2" fill="url(#logoGrad)" />
                </g>
            </svg>

            {showText && (
                <span className={`font-display font-bold ${text} gradient-text tracking-tight`}>
                    Learn
                </span>
            )}
        </motion.div>
    );
}

export default Logo;
