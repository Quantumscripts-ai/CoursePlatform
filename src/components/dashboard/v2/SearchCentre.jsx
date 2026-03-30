import React from 'react';
import { Search, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const SearchCentre = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 mt-4 px-4">
      {/* Search Bar Container */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative w-full max-w-2xl group"
      >
        <div className="absolute inset-0 bg-secondary/5 rounded-3xl blur-xl group-focus-within:bg-secondary/10 transition-all duration-500"></div>
        <div className="relative flex items-center bg-white dark:bg-dark-card border border-neutral-200 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-md focus-within:shadow-xl focus-within:shadow-secondary/5 transition-all duration-300">
          <div className="pl-6 pr-2 text-dashboard-muted group-focus-within:text-secondary transition-colors duration-300">
            <Search size={22} />
          </div>
          <input
            type="text"
            placeholder="Search courses, modules, resources..."
            className="w-full py-5 pr-6 bg-transparent text-text placeholder:text-dashboard-muted outline-none border-none text-base font-medium"
          />
        </div>

        {/* Keyboard Shortcut Hint */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-[10px] font-bold text-dashboard-muted">
          <span className="opacity-60">CTRL</span>
          <span className="opacity-60">K</span>
        </div>
      </motion.div>

      {/* Explore Course Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        className="flex items-center gap-2 px-8 py-5 bg-secondary text-white rounded-3xl font-bold shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 transition-all whitespace-nowrap"
      >
        <Compass size={22} />
        <span>Explore Courses</span>
      </motion.button>
    </div>
  );
};
