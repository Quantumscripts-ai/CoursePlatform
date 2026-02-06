/**
 * Progress Bar Component
 * Reusable glassmorphic progress indicator
 */
function ProgressBar({ progress = 0, showLabel = true }) {
    return (
        <div className="w-full">
            <div className="flex items-center gap-3">
                {/* Track */}
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    {/* Fill */}
                    <div
                        className="h-full bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                    />
                </div>

                {/* Label */}
                {showLabel && (
                    <span className="text-sm text-text-muted font-medium min-w-[3rem] text-right">
                        {progress}% Complete
                    </span>
                )}
            </div>
        </div>
    );
}

export default ProgressBar;
