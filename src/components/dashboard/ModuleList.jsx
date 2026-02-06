/**
 * Module List Component
 * Displays all course modules with progress indicators
 * Completed: checkmark, Current: orange ring, Locked: lock icon
 */
import { motion } from 'framer-motion';
import { IconCheck, IconLock, IconChevronRight } from '@tabler/icons-react';

function ModuleList({ modules = [] }) {
    return (
        <div className="space-y-3">
            {modules.map((module, index) => (
                <ModuleItem
                    key={module.id}
                    module={module}
                    index={index}
                />
            ))}
        </div>
    );
}

function ModuleItem({ module, index }) {
    const { title, completed, current, locked } = module;

    // Determine status styling
    const getStatusIcon = () => {
        if (completed) {
            return (
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <IconCheck size={14} className="text-secondary" />
                </div>
            );
        }
        if (current) {
            return (
                <div className="w-6 h-6 rounded-full border-2 border-secondary bg-secondary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
            );
        }
        if (locked) {
            return (
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                    <IconLock size={12} className="text-text-dim" />
                </div>
            );
        }
        return (
            <div className="w-6 h-6 rounded-full border border-white/20 bg-white/5" />
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`
                relative bg-white/5 backdrop-blur-xl border rounded-xl px-5 py-4
                flex items-center gap-4 cursor-pointer
                transition-all duration-200 group
                ${current
                    ? 'border-secondary/50 bg-secondary/5'
                    : 'border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                }
                ${locked ? 'opacity-50 cursor-not-allowed' : ''}
            `}
        >
            {/* Current module glow */}
            {current && (
                <div
                    className="absolute inset-0 rounded-xl opacity-40"
                    style={{
                        background: 'radial-gradient(ellipse at left, rgba(249, 115, 22, 0.2), transparent 60%)',
                    }}
                />
            )}

            {/* Status Icon */}
            <div className="relative z-10 flex-shrink-0">
                {getStatusIcon()}
            </div>

            {/* Module Title */}
            <div className="relative z-10 flex-1 min-w-0">
                <p className={`font-medium truncate ${locked ? 'text-text-dim' : 'text-text'}`}>
                    Module {module.id}: {title}
                    {current && <span className="text-secondary ml-2">(Current)</span>}
                </p>
            </div>

            {/* Arrow for current */}
            {current && (
                <div className="relative z-10 flex-shrink-0">
                    <IconChevronRight size={20} className="text-secondary" />
                </div>
            )}
        </motion.div>
    );
}

export default ModuleList;
