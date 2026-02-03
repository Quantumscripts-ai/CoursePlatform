/**
 * useCourse Hook
 * Provides course data and actions for a given course ID
 */
import { courses } from '../data/courses';

export function useCourse(courseId) {
    const course = courses[courseId];

    if (!course) {
        return null;
    }

    // Calculate total curriculum stats
    const totalLessons = course.curriculum.reduce(
        (acc, module) => acc + module.lessons.length, 0
    );

    const totalDuration = course.curriculum.reduce(
        (acc, module) => acc + parseInt(module.duration), 0
    );

    return {
        ...course,
        totalLessons,
        totalDuration,
        // Methods for future use
        enroll: () => console.log(`Enrolling in ${course.title}`),
        bookmark: () => console.log(`Bookmarked ${course.title}`),
    };
}

export default useCourse;
