/**
 * Dashboard Page
 * Main student dashboard showing course overview and progress
 * Single-course optimized layout with glassmorphism design
 */
import DashboardLayout from '../components/dashboard/DashboardLayout';
import CourseHeader from '../components/dashboard/CourseHeader';
import ContinueLearning from '../components/dashboard/ContinueLearning';
import ModuleList from '../components/dashboard/ModuleList';
import { course, getCurrentModule } from '../data/courseData';

function Dashboard() {
    const currentModule = getCurrentModule();

    return (
        <DashboardLayout>
            {/* Course Title */}
            <CourseHeader title={course.title} />

            {/* Continue Learning Card */}
            <ContinueLearning
                currentModule={currentModule?.id || 1}
                progress={course.progress}
                lessonTitle={course.currentLesson?.title || "Getting Started"}
            />

            {/* Module List */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold text-text-muted mb-4 pl-1">
                    Course Modules
                </h3>
                <ModuleList modules={course.modules} />
            </div>
        </DashboardLayout>
    );
}

export default Dashboard;
