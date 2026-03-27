import { useNavigate } from 'react-router-dom';
import { Home, BookOpen, Users, User, LogOut } from 'lucide-react';
import { GlassDock } from '../ui/GlassDock';
import { useAuth } from '../../hooks/useAuth';
import { TopNav } from './v2/TopNav';

function DashboardLayout({ children }) {
    const navigate = useNavigate();
    const { signOut, user } = useAuth();

    return (
        <div className="min-h-screen bg-dashboard flex flex-col relative overflow-x-hidden">
            {/* Top Navigation */}
            <TopNav userName={user?.displayName || "Student"} />

            {/* Background Orange Glows - Subtler for the new design */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Left glow */}
                <div
                    className="absolute -left-[10%] top-1/4 w-[40%] h-[60%] opacity-40"
                    style={{
                        background: 'radial-gradient(ellipse 100% 100% at 0% 50%, rgba(249, 115, 22, 0.25), transparent 70%)',
                    }}
                />
                {/* Right glow */}
                <div
                    className="absolute -right-[10%] top-1/3 w-[40%] h-[50%] opacity-30"
                    style={{
                        background: 'radial-gradient(ellipse 100% 100% at 100% 50%, rgba(249, 115, 22, 0.2), transparent 70%)',
                    }}
                />
                {/* Bottom glow */}
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] opacity-20"
                    style={{
                        background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(249, 115, 22, 0.3), transparent 60%)',
                    }}
                />
            </div>

            {/* Glass Dock Navigation */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                <GlassDock 
                    items={[
                        { title: 'Dashboard', icon: Home, onClick: () => navigate('/studentdashboard') },
                        { title: 'Resources', icon: BookOpen, onClick: () => navigate('/studentdashboard/resources') },
                        { title: 'Community', icon: Users, onClick: () => navigate('/studentdashboard/community') },
                        { title: 'Profile', icon: User, onClick: () => navigate('/studentdashboard/profile') },
                        { title: 'Logout', icon: LogOut, onClick: signOut },
                    ]} 
                />
            </div>

            {/* Main Content Area */}
            <main className="flex-1 relative z-10 p-6 md:p-8 lg:p-10 overflow-y-auto min-h-screen">
                <div className="max-w-5xl mx-auto pb-32">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default DashboardLayout;
