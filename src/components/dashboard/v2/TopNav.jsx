import React from 'react';
import { Search, Bell, Moon, Sun, User } from 'lucide-react';
import { cn } from '../../../lib/utils';

export const TopNav = ({ userName = "Alexander", userAvatar = null, onThemeToggle }) => {
  return (
    <div className="flex items-center justify-between px-8 py-6 bg-white dark:bg-dark-light/50 backdrop-blur-md sticky top-0 z-40">
      {/* Search Bar */}
      <div className="relative w-full max-w-md group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dashboard-muted group-focus-within:text-secondary transition-colors" size={20} />
        <input 
          type="text" 
          placeholder="Search courses, lessons, help..."
          className="w-full pl-12 pr-4 py-3 bg-neutral-100 dark:bg-dark-card border-none rounded-2xl text-sm focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button className="text-dashboard-muted hover:text-text transition-colors">Schedules</button>
          <button className="text-dashboard-muted hover:text-text transition-colors">Resources</button>
        </div>

        <div className="flex items-center gap-4 border-l border-neutral-200 dark:border-white/10 pl-8">
          <button className="relative p-2 text-dashboard-muted hover:text-text transition-colors">
            <Bell size={22} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-white dark:border-dark"></span>
          </button>
          <button onClick={onThemeToggle} className="p-2 text-dashboard-muted hover:text-text transition-colors">
            <Moon size={22} className="dark:hidden" />
            <Sun size={22} className="hidden dark:block" />
          </button>
          <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-dark-card overflow-hidden flex items-center justify-center border-2 border-neutral-100 dark:border-white/5 cursor-pointer hover:shadow-md transition-all">
            {userAvatar ? (
               <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
            ) : (
               <User size={20} className="text-dashboard-muted" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
