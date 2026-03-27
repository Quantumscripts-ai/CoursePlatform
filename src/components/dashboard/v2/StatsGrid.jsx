import React from 'react';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';
import { cn } from '../../../lib/utils';

const StatCard = ({ icon: Icon, label, value, iconBg }) => (
  <div className="bg-white dark:bg-dark-card p-8 rounded-5xl shadow-dashboard flex items-center gap-6 border border-neutral-50 dark:border-white/5 hover:scale-[1.02] transition-transform">
    <div className={cn("p-4 rounded-3xl", iconBg)}>
      <Icon size={28} className="text-secondary" />
    </div>
    <div>
      <p className="text-xs font-bold text-dashboard-muted uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-3xl font-bold text-neutral-900 dark:text-white">
        {value}
      </p>
    </div>
  </div>
);

export const StatsGrid = ({ inProgressCount = 12, completedCount = 48, totalHours = 324 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pb-12">
      <StatCard 
        icon={BookOpen} 
        label="Courses in Progress" 
        value={inProgressCount} 
        iconBg="bg-secondary/10" 
      />
      <StatCard 
        icon={CheckCircle} 
        label="Completed" 
        value={completedCount} 
        iconBg="bg-secondary/10" 
      />
      <StatCard 
        icon={Clock} 
        label="Total Hours" 
        value={totalHours} 
        iconBg="bg-secondary/10" 
      />
    </div>
  );
};
