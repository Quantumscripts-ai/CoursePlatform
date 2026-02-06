/**
 * Course Header Component
 * Large glowing course title card with premium styling
 */
function CourseHeader({ title = "Quantum Mastery Course" }) {
    return (
        <div className="relative mb-8">
            {/* Glow effect behind */}
            <div
                className="absolute -inset-4 opacity-50 blur-3xl"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.3), transparent 70%)',
                }}
            />

            {/* Title */}
            <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                    {title.toUpperCase()}
                </span>
            </h1>
        </div>
    );
}

export default CourseHeader;
