/**
 * React Course Page
 * Uses CoursePage template with React course data
 */
import CoursePage from '../components/course/CoursePage';
import { getCourse } from '../data/courses';

function ReactCourse() {
    const course = getCourse('react');
    return <CoursePage course={course} />;
}

export default ReactCourse;
