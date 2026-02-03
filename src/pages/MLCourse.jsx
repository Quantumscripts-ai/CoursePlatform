/**
 * Machine Learning Course Page
 * Uses CoursePage template with ML course data
 */
import CoursePage from '../components/course/CoursePage';
import { getCourse } from '../data/courses';

function MLCourse() {
    const course = getCourse('ml');
    return <CoursePage course={course} />;
}

export default MLCourse;
