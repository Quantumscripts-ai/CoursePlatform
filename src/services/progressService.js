import { db } from '../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const progressService = {
    /**
     * Get overall progress for a user in a course
     * @param {string} userId
     * @param {string} courseId
     * @returns {Promise<object>}
     */
    async getUserProgress(userId, courseId) {
        if (!userId || !courseId) return { completedLessons: [], percentage: 0 };
        const progressRef = doc(db, 'progress', `${userId}_${courseId}`);
        const snap = await getDoc(progressRef);
        return snap.exists() ? snap.data() : { completedLessons: [], percentage: 0 };
    },

    /**
     * Mark a lesson as complete for a user
     * @param {string} userId
     * @param {string} lessonId
     * @param {string} moduleId
     */
    async markLessonComplete(userId, lessonId, moduleId) {
        // Defaulting to single master course ID for now
        const courseId = 'quantum-mastery-v1';
        const progressRef = doc(db, 'progress', `${userId}_${courseId}`);
        const snap = await getDoc(progressRef);

        let completedLessons = [];
        if (snap.exists()) {
            completedLessons = snap.data().completedLessons || [];
        }

        if (!completedLessons.includes(lessonId)) {
            completedLessons.push(lessonId);
            await setDoc(progressRef, {
                userId,
                courseId,
                completedLessons,
                lastAccessed: new Date().toISOString()
            }, { merge: true });
        }
        return { success: true };
    },

    /**
     * Get progress stats for a specific module
     * @param {string} userId
     * @param {string} moduleId
     * @returns {Promise<object>}
     */
    async getModuleProgress(userId, moduleId) {
        return {
            completed: 0,
            total: 3,
            isCompleted: false,
        };
    },

    /**
     * Get the current (last accessed) lesson for a user
     * @param {string} userId
     * @returns {Promise<object|null>}
     */
    async getCurrentLesson(userId) {
        if (!userId) return null;
        const progressRef = doc(db, 'progress', `${userId}_quantum-mastery-v1`);
        const snap = await getDoc(progressRef);
        return snap.exists() ? snap.data().lastAccessedLesson : null;
    },
};
