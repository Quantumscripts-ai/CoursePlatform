/**
 * Mock Course Data
 * Sample data matching the design mockup for development
 */

export const course = {
    id: 1,
    title: "Quantum Mastery Course",
    description: "Master the fundamentals of quantum computing and applications",
    progress: 80,
    currentModuleId: 4,
    currentLesson: {
        id: 12,
        title: "Quantum Entanglement & Applications",
        moduleId: 4,
    },
    modules: [
        {
            id: 1,
            title: "Foundations",
            completed: true,
            locked: false,
            current: false,
            lessons: [
                { id: 1, title: "Introduction to Quantum", duration: "12 min" },
                { id: 2, title: "Wave-Particle Duality", duration: "18 min" },
                { id: 3, title: "Superposition Basics", duration: "15 min" },
            ]
        },
        {
            id: 2,
            title: "Qubits & Gates",
            completed: true,
            locked: false,
            current: false,
            lessons: [
                { id: 4, title: "What is a Qubit?", duration: "14 min" },
                { id: 5, title: "Quantum Gates", duration: "20 min" },
                { id: 6, title: "Gate Operations", duration: "22 min" },
            ]
        },
        {
            id: 3,
            title: "Algorithms",
            completed: true,
            locked: false,
            current: false,
            lessons: [
                { id: 7, title: "Classical vs Quantum", duration: "16 min" },
                { id: 8, title: "Shor's Algorithm", duration: "25 min" },
                { id: 9, title: "Grover's Algorithm", duration: "28 min" },
            ]
        },
        {
            id: 4,
            title: "Entanglement",
            completed: false,
            locked: false,
            current: true,
            lessons: [
                { id: 10, title: "EPR Paradox", duration: "18 min" },
                { id: 11, title: "Bell's Theorem", duration: "22 min" },
                { id: 12, title: "Quantum Entanglement & Applications", duration: "30 min" },
            ]
        },
        {
            id: 5,
            title: "Quantum Computing",
            completed: false,
            locked: true,
            current: false,
            lessons: [
                { id: 13, title: "Quantum Hardware", duration: "24 min" },
                { id: 14, title: "Error Correction", duration: "26 min" },
                { id: 15, title: "Building Circuits", duration: "32 min" },
            ]
        },
        {
            id: 6,
            title: "Future Frontiers",
            completed: false,
            locked: true,
            current: false,
            lessons: [
                { id: 16, title: "Quantum Internet", duration: "20 min" },
                { id: 17, title: "Quantum AI", duration: "28 min" },
                { id: 18, title: "Career Paths", duration: "15 min" },
            ]
        },
    ]
};

// Helper to get current module
export const getCurrentModule = () => {
    return course.modules.find(m => m.current);
};

// Helper to get completion stats
export const getCompletionStats = () => {
    const totalModules = course.modules.length;
    const completedModules = course.modules.filter(m => m.completed).length;
    return {
        total: totalModules,
        completed: completedModules,
        percentage: Math.round((completedModules / totalModules) * 100)
    };
};
