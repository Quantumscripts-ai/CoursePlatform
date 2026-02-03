/**
 * CoursePage - Tailwind CSS
 * Main template for all course pages
 */
import CourseHeader from './CourseHeader';
import CourseCurriculum from './CourseCurriculum';
import CourseFeatures from './CourseFeatures';
import CoursePricing from './CoursePricing';

function CoursePage({ course }) {
    if (!course) {
        return (
            <div className="flex items-center justify-center min-h-[50vh] text-xl text-text-muted">
                Course not found
            </div>
        );
    }

    return (
        <main
            className="min-h-screen pt-20"
            style={{ '--course-color': course.themeColor }}
            data-theme={course.id}
        >
            <CourseHeader course={course} />
            <CourseFeatures course={course} />
            <CourseCurriculum course={course} />
            <CoursePricing course={course} />
        </main>
    );
}

export default CoursePage;
