import React from 'react';
import { Clock, Play, Plus } from 'lucide-react';
import { clsx } from "clsx";

const CourseCard = ({ title, description, timeLeft, level, image, color }) => (
  <div className="card-v2 overflow-hidden flex flex-col h-full group cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all">
    <div className="relative h-48 w-full overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
      <div className={clsx("absolute bottom-4 left-4 px-3 py-1.5 rounded-lg text-white text-[10px] font-black uppercase tracking-widest", color)}>
        {level}
      </div>
    </div>
    <div className="p-8 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 line-clamp-1 group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-sm text-dashboard-muted mb-8 line-clamp-2 leading-relaxed">{description}</p>
      
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold text-sm">
          <Clock size={16} />
          <span>{timeLeft} Left</span>
        </div>
        <button className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm">
          <Play size={16} fill="currentColor" />
        </button>
      </div>
    </div>
  </div>
);

export const CoursePath = () => {
  return (
    <div className="mt-12 pb-24">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-10 tracking-tight">Continue Your Path</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <CourseCard 
          title="Interface Psychology" 
          description="Mastering the art of user perception and cognitive..." 
          timeLeft="12h" 
          level="Intermediate" 
          image="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=400&h=300&fit=crop"
          color="bg-orange-500"
        />
        <CourseCard 
          title="Predictive Analytics 101" 
          description="Learn to forecast market trends using python and..." 
          timeLeft="45h" 
          level="Advanced" 
          image="https://images.unsplash.com/photo-1551288049-bbbda536339a?w=400&h=300&fit=crop"
          color="bg-orange-600"
        />
        <CourseCard 
          title="Narrative Structures" 
          description="Unlocking the secrets of storytelling from classic..." 
          timeLeft="8h" 
          level="Beginner" 
          image="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop"
          color="bg-orange-400"
        />
        
        {/* Browse Courses Card */}
        <div className="card-v2 border-dashed border-2 border-neutral-200 dark:border-white/10 flex flex-col items-center justify-center p-10 group cursor-pointer hover:border-secondary transition-all">
          <div className="w-16 h-16 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
            <Plus size={32} strokeWidth={3} />
          </div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Browse Courses</h3>
          <p className="text-sm text-dashboard-muted text-center font-medium">Discover something new to learn today</p>
        </div>
      </div>
    </div>
  );
};
