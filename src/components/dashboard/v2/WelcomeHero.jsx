import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const WelcomeHero = ({ userName = "Alexander", progress = 85, courseName = "The Philosophy of Light" }) => {
  return (
    <div className="relative overflow-hidden hero-gradient p-12 rounded-5xl text-white shadow-2xl">
      {/* Background Decorative Circles */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-black/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
        >
          Welcome back, {userName}!
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/90 leading-relaxed mb-8"
        >
          You've completed <span className="font-bold text-white">{progress}%</span> of your weekly goals. 
          Your journey through <span className="italic">"{courseName}"</span> is nearly complete.
        </motion.p>
        
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-white text-secondary font-bold rounded-2xl hover:bg-neutral-50 transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2">
            <Play size={18} fill="currentColor" />
            Resume Learning
          </button>
          <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/30 transition-all active:scale-95 border border-white/10">
            View Goals
          </button>
        </div>
      </div>
    </div>
  );
};
