import { db } from '../lib/firebase';
import { collection, doc, getDoc, getDocs, setDoc, query, where } from 'firebase/firestore';

export const enrollmentService = {
    /**
     * Create or update a user profile after signup
     * @param {string} userId
     * @param {object} profileData
     */
    async upsertProfile(userId, profileData) {
        const userRef = doc(db, 'users', userId);
        await setDoc(userRef, profileData, { merge: true });
        return { success: true };
    },

    /**
     * Enroll a user in a course
     * @param {string} userId
     * @param {string} courseId
     */
    async enrollUser(userId, courseId) {
        const enrollRef = doc(db, 'enrollments', `${userId}_${courseId}`);
        await setDoc(enrollRef, {
            userId,
            courseId,
            enrolledAt: new Date().toISOString(),
            status: 'active',
            progress: 0
        }, { merge: true });
        return { success: true };
    },

    /**
     * Check if a user is enrolled in a course
     * @param {string} userId
     * @param {string} courseId
     * @returns {Promise<boolean>}
     */
    async isEnrolled(userId, courseId) {
        if (!userId || !courseId) return false;
        const enrollRef = doc(db, 'enrollments', `${userId}_${courseId}`);
        const snap = await getDoc(enrollRef);
        return snap.exists() && snap.data().status === 'active';
    },

    /**
     * Get enrollment record for a user
     * @param {string} userId
     * @returns {Promise<object|null>}
     */
    async getEnrollment(userId) {
        if (!userId) return null;
        const q = query(collection(db, 'enrollments'), where('userId', '==', userId), where('status', '==', 'active'));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            return querySnapshot.docs[0].data();
        }
        return null;
    },

    /**
     * Mark enrollment as paid
     * @param {string} userId
     * @param {string} courseId
     */
    async markAsPaid(userId, courseId) {
        await this.enrollUser(userId, courseId);
        return { success: true };
    },

    /**
     * Get all enrolled courses for a user
     * @param {string} userId
     * @returns {Promise<array>}
     */
    async getUserEnrollments(userId) {
        if (!userId) return [];
        const q = query(collection(db, 'enrollments'), where('userId', '==', userId), where('status', '==', 'active'));
        const snap = await getDocs(q);
        return snap.docs.map(doc => doc.data());
    },
};
