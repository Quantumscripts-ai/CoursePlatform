/**
 * Continue Learning Component
 * Hero action card showing current lesson with play button
 */
import { motion } from 'framer-motion';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import ProgressBar from './ProgressBar';

function ContinueLearning({
    currentModule = 4,
    progress = 80,
    lessonTitle = "Quantum Entanglement & Applications"
}) {
    return (
        <motion.div
            className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-8 mb-8 overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Subtle glow on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.1), transparent 70%)',
                }}
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Content */}
                <div className="flex-1">
                    <h2 className="text-lg md:text-xl font-bold text-text mb-1">
                        CONTINUE LEARNING:
                        <span className="text-secondary ml-2">MODULE {currentModule}</span>
                    </h2>

                    {/* Progress Bar */}
                    <div className="my-4">
                        <ProgressBar progress={progress} />
                    </div>

                    <p className="text-text-muted">
                        {lessonTitle}
                    </p>
                </div>

                {/* Play Button */}
                <motion.button
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary text-dark flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-shadow flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <IconPlayerPlayFilled size={32} className="ml-1" />
                </motion.button>
            </div>
        </motion.div>
    );
}

export default ContinueLearning;
