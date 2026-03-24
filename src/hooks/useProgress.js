/**
 * useProgress Hook — Stub Implementation
 * Firebase integration pending. Returns empty/zero progress.
 */
import { useState, useEffect } from 'react';
import { progressService } from '../services/progressService';

export function useProgress(userId, modules) {
    const [progressData, setProgressData] = useState({ completedLessons: [], percentage: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProgress() {
            if (!userId) {
                setLoading(false);
                return;
            }
            try {
                // Defaulting to single master course ID for now
                const courseId = 'quantum-mastery-v1';
                const data = await progressService.getUserProgress(userId, courseId);
                setProgressData(data);
            } catch (err) {
                console.error('Error fetching progress:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchProgress();
    }, [userId]);

    /**
     * Get progress stats for a specific module
     * @param {string} moduleId
     * @returns {{ completed: number, total: number, isCompleted: boolean }}
     */
    const getModuleProgressStats = (moduleId) => {
        if (!modules) return { completed: 0, total: 0, isCompleted: false };
        const module = modules.find(m => m.id === moduleId);
        if (!module) return { completed: 0, total: 0, isCompleted: false };

        const total = module.lessons.length;
        const completed = module.lessons.filter(l => progressData.completedLessons?.includes(l.id)).length;
        return {
            completed,
            total,
            isCompleted: total > 0 && completed === total,
        };
    };

    /**
     * Mark a lesson as complete
     * @param {string} lessonId
     * @param {string} moduleId
     */
    const markLessonComplete = async (lessonId, moduleId) => {
        try {
            await progressService.markLessonComplete(userId, lessonId, moduleId);
            setProgressData(prev => ({
                ...prev,
                completedLessons: [...(prev.completedLessons || []), lessonId]
            }));
        } catch (error) {
            console.error('Error marking lesson complete:', error);
        }
    };

    // Calculate overall percent based on total lessons in modules
    const totalCourseLessons = modules ? modules.reduce((acc, m) => acc + m.lessons.length, 0) : 0;
    const completedCount = progressData.completedLessons?.length || 0;
    const overallProgress = totalCourseLessons === 0 ? 0 : Math.round((completedCount / totalCourseLessons) * 100);

    return {
        currentLesson: null,
        overallProgress,
        getModuleProgressStats,
        markLessonComplete,
        loading,
        completedLessons: progressData.completedLessons || []
    };
}
