import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEnrollment } from '../hooks/useEnrollment';
import { useProgress } from '../hooks/useProgress';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { WelcomeHero } from '../components/dashboard/v2/WelcomeHero';
import { SearchCentre } from '../components/dashboard/v2/SearchCentre';
import { StatsGrid } from '../components/dashboard/v2/StatsGrid';
import { ActivitySection } from '../components/dashboard/v2/ActivitySection';
import { CoursePath } from '../components/dashboard/v2/CoursePath';

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
                        <p className="text-dashboard-muted">Loading your dashboard...</p>
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
                        <p className="text-sm text-dashboard-muted">{enrollmentError}</p>
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
                    <div className="text-center text-dashboard-muted">
                        <p className="text-lg font-semibold mb-2">No joined course found</p>
                        <p className="text-sm">Please explore our catalog to get started.</p>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    // Prepare modules with progress info
    const modulesWithProgress = course.modules?.map((module, index) => {
        const moduleProgress = getModuleProgressStats(module.id);
        const isCompleted = moduleProgress.isCompleted;
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

    const stats = {
        inProgress: modulesWithProgress.filter(m => !m.completed && !m.locked).length,
        completed: modulesWithProgress.filter(m => m.completed).length,
        hours: Math.floor(overallProgress * 1.5) // Mock hours calculation
    };

    return (
        <DashboardLayout>
            <div className="pt-2">
                <SearchCentre />

                <WelcomeHero
                    userName={user.displayName?.split(' ')[0] || "Alexander"}
                    progress={Math.round(overallProgress)}
                    courseName={course.title}
                />

                <StatsGrid
                    inProgressCount={stats.inProgress}
                    completedCount={stats.completed}
                    totalHours={stats.hours}
                />

                <ActivitySection />

                <CoursePath />
            </div>
        </DashboardLayout>
    );
}

export default Dashboard;
