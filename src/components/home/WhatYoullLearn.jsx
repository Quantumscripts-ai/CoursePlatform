import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const avatars = [
    "https://i.pravatar.cc/150?u=20",
    "https://i.pravatar.cc/150?u=21",
    "https://i.pravatar.cc/150?u=22",
    "https://i.pravatar.cc/150?u=23",
    "https://i.pravatar.cc/150?u=24",
    "https://i.pravatar.cc/150?u=25",
];

// Animated code editor
const CodeEditorAnimation = () => {
    const codeLines = [
        { indent: 0, text: "function App() {", color: "text-purple-400" },
        { indent: 1, text: "const [data, setData] = useState([])", color: "text-blue-400" },
        { indent: 1, text: "return <Dashboard data={data} />", color: "text-green-400" },
        { indent: 0, text: "}", color: "text-purple-400" },
    ];

    return (
        <div className="bg-dark/80 rounded-xl p-4 mt-4 mb-auto border border-white/10 font-mono text-xs overflow-hidden">
            {codeLines.map((line, i) => (
                <motion.div
                    key={i}
                    className={`${line.color} whitespace-nowrap`}
                    style={{ paddingLeft: `${line.indent * 16}px` }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.3, duration: 0.4, repeat: Infinity, repeatDelay: 4 }}
                >
                    {line.text}
                </motion.div>
            ))}
            <motion.div
                className="w-2 h-4 bg-secondary mt-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
            />
        </div>
    );
};

// Animated neural network
const NeuralNetAnimation = () => {
    const nodes = [
        { x: 20, y: 20 }, { x: 20, y: 50 }, { x: 20, y: 80 },
        { x: 80, y: 35 }, { x: 80, y: 65 },
        { x: 140, y: 50 },
    ];

    return (
        <div className="relative w-full h-28 mt-4 mb-auto">
            <svg className="w-full h-full" viewBox="0 0 160 100">
                {/* Connections */}
                {[0, 1, 2].map(i =>
                    [3, 4].map(j => (
                        <motion.line
                            key={`${i}-${j}`}
                            x1={nodes[i].x} y1={nodes[i].y}
                            x2={nodes[j].x} y2={nodes[j].y}
                            stroke="rgba(249,115,22,0.3)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, repeatDelay: 2 }}
                        />
                    ))
                )}
                {[3, 4].map(i => (
                    <motion.line
                        key={`out-${i}`}
                        x1={nodes[i].x} y1={nodes[i].y}
                        x2={nodes[5].x} y2={nodes[5].y}
                        stroke="rgba(249,115,22,0.3)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.6, repeat: Infinity, repeatDelay: 2 }}
                    />
                ))}
                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.circle
                        key={i}
                        cx={node.x} cy={node.y} r="6"
                        fill="rgba(249,115,22,0.2)"
                        stroke="rgba(249,115,22,0.6)"
                        strokeWidth="1.5"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
                    />
                ))}
            </svg>
        </div>
    );
};

// Animated chart bars
const ChartAnimation = () => (
    <div className="flex items-end gap-2 h-20 mt-4 mb-auto px-2">
        {[40, 65, 45, 80, 55, 70].map((height, i) => (
            <motion.div
                key={i}
                className="flex-1 bg-gradient-to-t from-secondary/60 to-secondary/20 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }}
            />
        ))}
    </div>
);

// Animated terminal
const TerminalAnimation = () => (
    <div className="bg-dark/90 rounded-lg p-3 mt-4 mb-auto border border-white/10 font-mono text-[10px]">
        <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <div className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <motion.div
            className="text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        >
            $ npm run deploy
        </motion.div>
        <motion.div
            className="text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
        >
            Building for production...
        </motion.div>
        <motion.div
            className="text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
        >
            ✓ Deployed successfully!
        </motion.div>
    </div>
);

// Animated database icons
const DatabaseAnimation = () => (
    <div className="flex justify-center gap-4 mt-4 mb-auto">
        {['🗄️', '🔗', '⚡'].map((icon, i) => (
            <motion.div
                key={i}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl"
                animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            >
                {icon}
            </motion.div>
        ))}
    </div>
);

const features = [
    {
        icon: "💻",
        title: "Production-Ready Code",
        description: "Write clean, scalable React applications with industry best practices.",
        size: "large",
        Animation: CodeEditorAnimation
    },
    {
        icon: "🧠",
        title: "AI & Machine Learning",
        description: "Integrate intelligent features and build smart applications.",
        size: "large",
        Animation: NeuralNetAnimation
    },
    {
        icon: "📈",
        title: "Performance Analytics",
        description: "Monitor, measure, and optimize your applications.",
        size: "small",
        Animation: ChartAnimation
    },
    {
        icon: "🚀",
        title: "CI/CD Pipelines",
        description: "Automate testing and deployment workflows.",
        size: "small",
        Animation: TerminalAnimation
    },
    {
        icon: "🗃️",
        title: "Database Mastery",
        description: "Design efficient data models and queries.",
        size: "small",
        Animation: DatabaseAnimation
    }
];

function FeatureCard({ feature, index }) {
    const isLarge = feature.size === 'large';
    const Animation = feature.Animation;

    return (
        <motion.div
            className={`
                relative bg-dark-card rounded-2xl p-5 border border-white/[0.08]
                flex flex-col overflow-hidden
                ${isLarge ? 'min-h-[340px]' : 'min-h-[260px]'}
            `}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ borderColor: 'rgba(249,115,22,0.3)' }}
        >
            {/* Gradient glow on hover */}
            <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
            />

            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0">
                {feature.icon}
            </div>

            {/* Animation */}
            <Animation />

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-1 leading-tight">{feature.title}</h3>

            {/* Description */}
            <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
        </motion.div>
    );
}

function WhatYoullLearn() {
    const largeFeatures = features.filter(f => f.size === 'large');
    const smallFeatures = features.filter(f => f.size === 'small');

    return (
        <section className="relative py-28 bg-dark overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What you'll <span className="text-secondary italic">learn</span>
                    </motion.h2>
                    <motion.p
                        className="text-text-muted text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Master the complete stack with hands-on projects, real-world patterns,
                        and battle-tested engineering principles.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {largeFeatures.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
                    {smallFeatures.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index + 2} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link to="/courses/react">
                        <button className="bg-secondary hover:bg-accent text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/25 mb-8">
                            Reserve your seat now
                            <span className="text-xl">›</span>
                        </button>
                    </Link>

                    {/* Social proof */}
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {avatars.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt="User"
                                    className="w-9 h-9 rounded-full border-2 border-dark"
                                />
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-0.5 text-secondary text-xs">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s}>★</span>
                                ))}
                            </div>
                            <span className="text-text-muted text-xs">4.6 from 16,000+ Reviews</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default WhatYoullLearn;
