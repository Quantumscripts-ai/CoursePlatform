/**
 * Dashboard Page — UI Only
 * Auth redirects removed. Renders with mock course data.
 * Firebase integration pending.
 */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import CourseHeader from '../components/dashboard/CourseHeader';
import ContinueLearning from '../components/dashboard/ContinueLearning';
import ModuleList from '../components/dashboard/ModuleList';
import { useEnrollment } from '../hooks/useEnrollment';
import { useProgress } from '../hooks/useProgress';
import { useAuth } from '../hooks/useAuth';

function Dashboard() {
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!authLoading && !user) {
            navigate('/login');
        }
    }, [user, authLoading, navigate]);

    const { course, loading: enrollmentLoading, error: enrollmentError } = useEnrollment(user?.uid);
    const {
        currentLesson,
        overallProgress,
        getModuleProgressStats,
        loading: progressLoading
    } = useProgress(user?.uid, course?.modules);

    // Show loading state
    if (authLoading || enrollmentLoading || progressLoading) {
        return (
            <DashboardLayout>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-text-muted">Loading your dashboard...</p>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    // Show error state
    if (enrollmentError) {
        return (
            <DashboardLayout>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center text-red-400">
                        <p className="text-lg font-semibold mb-2">Error loading course data</p>
                        <p className="text-sm text-text-muted">{enrollmentError}</p>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    // No course available
    if (!course) {
        return (
            <DashboardLayout>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center text-text-muted">
                        <p className="text-lg font-semibold mb-2">No course available</p>
                        <p className="text-sm">Please contact support for access.</p>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    // Prepare modules with progress info
    const modulesWithProgress = course.modules?.map((module, index) => {
        const moduleProgress = getModuleProgressStats(module.id);
        const isCompleted = moduleProgress.isCompleted;

        // First module always unlocked, others require sequential completion
        const isLocked = index > 0 && !getModuleProgressStats(course.modules[index - 1].id).isCompleted;

        const isCurrent = currentLesson?.moduleId === module.id;

        return {
            id: module.id,
            title: module.title,
            lessons: module.lessons || [],
            completed: isCompleted,
            locked: isLocked,
            current: isCurrent
        };
    }) || [];

    const currentModuleNumber = currentLesson
        ? modulesWithProgress.findIndex(m => m.id === currentLesson.moduleId) + 1
        : 1;

    return (
        <DashboardLayout>
            {/* Course Title */}
            <CourseHeader title={course.title} />

            {/* Continue Learning Card */}
            <ContinueLearning
                currentModule={currentModuleNumber}
                progress={overallProgress}
                lessonTitle={currentLesson?.title || "Get Started"}
            />

            {/* Module List */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold text-text-muted mb-4 pl-1">
                    Course Modules
                </h3>
                <ModuleList modules={modulesWithProgress} />
            </div>
        </DashboardLayout>
    );
}

export default Dashboard;
