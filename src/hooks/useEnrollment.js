import { useState, useEffect } from 'react';
import { courseService } from '../services/courseService';
import { enrollmentService } from '../services/enrollmentService';

export function useEnrollment(userId) {
    const [enrollment, setEnrollment] = useState(null);
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);
                // Temporary static master course ID
                const courseId = 'quantum-mastery-v1';
                const { course: fetchedCourse } = await courseService.getCourseWithModules(courseId);
                setCourse(fetchedCourse);

                if (userId) {
                    const fetchedEnrollment = await enrollmentService.getEnrollment(userId);
                    setEnrollment(fetchedEnrollment);
                } else {
                    setEnrollment(null);
                }
            } catch (err) {
                console.error('useEnrollment error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, [userId]);

    return { enrollment, course, loading, error };
}
