/**
 * Card Component - Orange Theme
 * Glassmorphic card with hover effects
 */
import { motion } from 'framer-motion';

const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
};

function Card({
    children,
    variant = 'default',
    hover = true,
    glow = false,
    padding = 'md',
    className = '',
    ...props
}) {
    return (
        <motion.div
            className={`
        gradient-card border border-border rounded-2xl 
        backdrop-blur-xl transition-all duration-250
        ${paddings[padding]}
        ${hover ? 'hover:border-secondary' : ''}
        ${glow ? 'hover:glow-primary' : ''}
        ${className}
      `}
            whileHover={hover ? { y: -5, scale: 1.01 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export default Card;
