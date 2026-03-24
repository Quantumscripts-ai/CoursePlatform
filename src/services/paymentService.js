import { db } from '../lib/firebase';
import { collection, doc, getDocs, setDoc, query, where, limit } from 'firebase/firestore';

/**
 * Get the configured payment link from environment variables
 * @returns {string|null}
 */
export function getPaymentLink() {
    return import.meta.env.VITE_PAYMENT_LINK || null;
}

export const paymentService = {
    /**
     * Check if a user has made any payment
     * @param {string} userId
     * @returns {Promise<boolean>}
     */
    async hasAnyPayment(userId) {
        if (!userId) return false;
        const q = query(collection(db, 'payments'), where('userId', '==', userId), limit(1));
        const snap = await getDocs(q);
        return !snap.empty;
    },

    /**
     * Create a payment record after successful checkout
     * @param {string} userId
     * @param {string} courseId
     * @param {object} paymentData
     */
    async createPaymentRecord(userId, courseId, paymentData) {
        const paymentRef = doc(collection(db, 'payments'));
        await setDoc(paymentRef, {
            ...paymentData,
            userId,
            courseId,
            createdAt: new Date().toISOString()
        });
        return { success: true, id: paymentRef.id };
    },

    /**
     * Get all payments for a user
     * @param {string} userId
     * @returns {Promise<array>}
     */
    async getUserPayments(userId) {
        if (!userId) return [];
        const q = query(collection(db, 'payments'), where('userId', '==', userId));
        const snap = await getDocs(q);
        return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },

    /**
     * Verify a payment by session/reference ID
     * @param {string} sessionId
     * @returns {Promise<object|null>}
     */
    async verifyPayment(sessionId) {
        if (!sessionId) return null;
        const q = query(collection(db, 'payments'), where('sessionId', '==', sessionId), limit(1));
        const snap = await getDocs(q);
        return snap.empty ? null : { id: snap.docs[0].id, ...snap.docs[0].data() };
    },
};

/**
 * Convenience export matching old usage pattern
 */
export const hasAnyPayment = (userId) => paymentService.hasAnyPayment(userId);
