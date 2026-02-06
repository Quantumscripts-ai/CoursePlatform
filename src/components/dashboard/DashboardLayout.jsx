/**
 * Dashboard Layout Component
 * Main wrapper for the student dashboard with sidebar navigation
 * Glassmorphism design with orange accent glows
 */
import Sidebar from './Sidebar';

function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen bg-dark flex relative overflow-hidden">
            {/* Background Orange Glows - Organic bleeding effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
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

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 relative z-10 p-6 md:p-8 lg:p-10 overflow-y-auto">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default DashboardLayout;
