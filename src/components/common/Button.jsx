/**
 * Button Component - Orange Theme
 * Reusable button with orange variants
 */
import { motion } from 'framer-motion';

const variants = {
    primary: 'bg-secondary text-dark glow-primary hover:shadow-[0_0_50px_rgba(249,115,22,0.4)]',
    secondary: 'bg-dark-card text-text border border-border hover:border-secondary hover:bg-dark-mid',
    outline: 'bg-transparent text-text border-2 border-border hover:border-secondary hover:text-secondary',
    ghost: 'bg-transparent text-text-muted hover:text-text hover:bg-white/5',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

function Button({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    fullWidth = false,
    disabled = false,
    onClick,
    href,
    className = '',
    ...props
}) {
    const Component = href ? motion.a : motion.button;

    return (
        <Component
            className={`
        inline-flex items-center justify-center gap-2 
        font-sans font-semibold rounded-full cursor-pointer 
        transition-all duration-250 
        ${variants[variant]} 
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            disabled={disabled}
            onClick={onClick}
            href={href}
            {...props}
        >
            {icon && iconPosition === 'left' && <span className="flex items-center text-[1.1em]">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === 'right' && <span className="flex items-center text-[1.1em]">{icon}</span>}
        </Component>
    );
}

export default Button;
