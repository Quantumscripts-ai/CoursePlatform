import React from 'react';
import { Clock, CheckCircle, Plus, ChevronRight } from 'lucide-react';

const ActivityItem = ({ title, module, time, icon: Icon, color }) => (
  <div className="flex items-center justify-between p-6 hover:bg-neutral-50 dark:hover:bg-white/5 transition-all rounded-3xl group cursor-pointer">
    <div className="flex items-center gap-6">
      <div className="w-14 h-14 rounded-2xl bg-neutral-900 flex items-center justify-center text-white overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
        {Icon ? <Icon size={24} /> : <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-black"></div>}
      </div>
      <div>
        <h4 className="font-bold text-neutral-900 dark:text-white group-hover:text-secondary transition-colors">{title}</h4>
        <p className="text-sm text-dashboard-muted">{module}</p>
      </div>
    </div>
    <div className="flex items-center gap-4 text-sm font-bold">
      <span className="text-dashboard-muted">{time}</span>
      <div className={`w-2.5 h-2.5 rounded-full ${color}`}></div>
    </div>
  </div>
);

const DeadlineCard = ({ title, course, daysLeft, progress, color }) => (
  <div className="bg-neutral-50 dark:bg-white/5 p-6 rounded-4xl mb-6 last:mb-0 border border-transparent hover:border-secondary/20 transition-all shadow-dashboard">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="font-bold text-neutral-900 dark:text-white mb-1">{title}</h4>
        <p className="text-sm font-bold text-secondary uppercase tracking-tight">{course}</p>
      </div>
      <div className="px-3 py-1.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 text-xs font-black rounded-lg uppercase tracking-tighter">
        {daysLeft} days left
      </div>
    </div>
    <div className="relative w-full h-2.5 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
      <div 
        className={`absolute left-0 top-0 h-full rounded-full ${color}`} 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

export const ActivitySection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12 pb-12">
      {/* Recent Activity */}
      <div className="lg:col-span-2 card-v2 p-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Recent Activity</h2>
          <button className="text-secondary font-bold hover:underline flex items-center gap-1">
            View History <ChevronRight size={18} />
          </button>
        </div>
        <div className="space-y-4">
          <ActivityItem 
            title="Advanced UI Design Principles" 
            module="Finished Module 4: Spatial Awareness" 
            time="2 hours ago" 
            color="bg-orange-400" 
          />
          <ActivityItem 
            title="Digital Marketing Strategy" 
            module="Submitted Assignment: SEO Audit" 
            time="Yesterday" 
            color="bg-green-400" 
          />
          <ActivityItem 
            title="Intro to Quantum Computing" 
            module="Started New Course: Foundations of Logic" 
            time="Oct 12" 
            color="bg-yellow-400" 
          />
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <div className="card-v2 p-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Upcoming Deadlines</h2>
          <p className="text-sm text-dashboard-muted font-medium">Stay ahead of your schedule</p>
        </div>
        <div>
          <DeadlineCard 
            title="Project Submission" 
            course="User Experience Design" 
            daysLeft={2} 
            progress={75} 
            color="bg-orange-600" 
          />
          <DeadlineCard 
            title="Midterm Quiz" 
            course="Economic Theory" 
            daysLeft={5} 
            progress={40} 
            color="bg-orange-400" 
          />
          <DeadlineCard 
            title="Peer Review" 
            course="Modern Literature" 
            daysLeft={12} 
            progress={15} 
            color="bg-blue-400" 
          />
        </div>
      </div>
    </div>
  );
};
