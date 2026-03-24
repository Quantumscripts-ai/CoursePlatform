/**
 * Course Service — Static Mock Data
 * Firebase integration pending. Returns hardcoded mock data.
 */

const MOCK_COURSE = {
    id: 'quantum-mastery-v1',
    title: 'Quantum Mastery Course',
    description: 'Master the fundamentals of quantum computing and secure your spot in the future of technology.',
    modules: [
        {
            id: 'module-1',
            title: 'Introduction to Quantum Computing',
            order: 1,
            lessons: [
                { id: 'lesson-1-1', title: 'What is Quantum Computing?', duration: '15 min', order: 1 },
                { id: 'lesson-1-2', title: 'Classical vs Quantum Systems', duration: '20 min', order: 2 },
                { id: 'lesson-1-3', title: 'Quantum Bits (Qubits)', duration: '18 min', order: 3 },
            ]
        },
        {
            id: 'module-2',
            title: 'Quantum Principles',
            order: 2,
            lessons: [
                { id: 'lesson-2-1', title: 'Superposition Explained', duration: '22 min', order: 1 },
                { id: 'lesson-2-2', title: 'Entanglement Deep Dive', duration: '25 min', order: 2 },
                { id: 'lesson-2-3', title: 'Quantum Interference', duration: '19 min', order: 3 },
            ]
        },
        {
            id: 'module-3',
            title: 'Quantum Gates & Circuits',
            order: 3,
            lessons: [
                { id: 'lesson-3-1', title: 'Single Qubit Gates', duration: '20 min', order: 1 },
                { id: 'lesson-3-2', title: 'Multi-Qubit Gates', duration: '23 min', order: 2 },
                { id: 'lesson-3-3', title: 'Building Quantum Circuits', duration: '30 min', order: 3 },
            ]
        },
        {
            id: 'module-4',
            title: 'Quantum Algorithms',
            order: 4,
            lessons: [
                { id: 'lesson-4-1', title: "Grover's Search Algorithm", duration: '28 min', order: 1 },
                { id: 'lesson-4-2', title: "Shor's Factoring Algorithm", duration: '32 min', order: 2 },
                { id: 'lesson-4-3', title: 'Quantum Fourier Transform', duration: '26 min', order: 3 },
            ]
        },
        {
            id: 'module-5',
            title: 'Quantum Cryptography',
            order: 5,
            lessons: [
                { id: 'lesson-5-1', title: 'Quantum Key Distribution', duration: '24 min', order: 1 },
                { id: 'lesson-5-2', title: 'Post-Quantum Security', duration: '21 min', order: 2 },
                { id: 'lesson-5-3', title: 'Real-World Applications', duration: '18 min', order: 3 },
            ]
        },
        {
            id: 'module-6',
            title: 'The Future of Quantum',
            order: 6,
            lessons: [
                { id: 'lesson-6-1', title: 'Current Quantum Hardware', duration: '22 min', order: 1 },
                { id: 'lesson-6-2', title: 'Industry Applications', duration: '20 min', order: 2 },
                { id: 'lesson-6-3', title: 'Career Paths in Quantum', duration: '17 min', order: 3 },
            ]
        },
    ]
};

import { db } from '../lib/firebase';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

export const courseService = {
    /**
     * Seeds the Firestore DB with the initial mock course if it's empty
     */
    async seedDatabaseIfEmpty() {
        const courseRef = doc(db, 'courses', MOCK_COURSE.id);
        const snap = await getDoc(courseRef);
        if (!snap.exists()) {
            console.log('Seeding initial course into Firestore...');
            await setDoc(courseRef, {
                id: MOCK_COURSE.id,
                course: MOCK_COURSE,
                modules: MOCK_COURSE.modules
            });
            console.log('Seeding complete.');
        }
    },

    /**
     * Get course with all modules and lessons
     * @returns {Promise<{course: object, modules: array}>}
     */
    async getCourseWithModules(courseId) {
        try {
            await this.seedDatabaseIfEmpty();
            const courseRef = doc(db, 'courses', courseId);
            const snap = await getDoc(courseRef);
            if (snap.exists()) {
                const data = snap.data();
                return { course: data.course, modules: data.modules };
            }
            throw new Error('Course not found');
        } catch (error) {
            console.error('courseService.getCourseWithModules error:', error);
            throw error;
        }
    },

    /**
     * Get all available courses
     * @returns {Promise<array>}
     */
    async getAllCourses() {
        try {
            await this.seedDatabaseIfEmpty();
            const coursesCol = collection(db, 'courses');
            const snap = await getDocs(coursesCol);
            return snap.docs.map(doc => doc.data().course);
        } catch (error) {
            console.error('courseService.getAllCourses error:', error);
            throw error;
        }
    },

    /**
     * Get a single course by ID
     * @param {string} courseId
     * @returns {Promise<object>}
     */
    async getCourseById(courseId) {
        try {
            await this.seedDatabaseIfEmpty();
            const courseRef = doc(db, 'courses', courseId);
            const snap = await getDoc(courseRef);
            if (snap.exists()) {
                return snap.data().course;
            }
            throw new Error('Course not found');
        } catch (error) {
            console.error('courseService.getCourseById error:', error);
            throw error;
        }
    },
};
