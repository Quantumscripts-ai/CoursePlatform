/**
 * Deep Learning Course Page
 * Uses CoursePage template with DL course data
 */
import CoursePage from '../components/course/CoursePage';
import { getCourse } from '../data/courses';

function DLCourse() {
    const course = getCourse('dl');
    return <CoursePage course={course} />;
}

export default DLCourse;
