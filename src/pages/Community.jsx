import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Calendar, TrendingUp, Search, Plus, Filter, MessageCircle, Heart, Share2 } from 'lucide-react';

const CommunityPost = ({ author, role, time, title, content, likes, comments, authorAvatar }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="card-v2 p-8 mb-8 bg-white dark:bg-dark-card border border-neutral-100 dark:border-white/5 shadow-dashboard group transition-all"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-accent p-0.5">
          <div className="w-full h-full rounded-2xl bg-white dark:bg-dark flex items-center justify-center overflow-hidden">
             <Users className="text-secondary" size={24} />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-neutral-900 dark:text-white mb-0.5">{author}</h4>
          <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">{role}</p>
        </div>
      </div>
      <span className="text-xs font-bold text-dashboard-muted uppercase tracking-tight">{time}</span>
    </div>
    
    <div className="flex-1 mb-8">
      <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-3 group-hover:text-secondary transition-colors tracking-tight">{title}</h3>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">{content}</p>
    </div>
    
    <div className="flex items-center justify-between pt-6 border-t border-neutral-100 dark:border-white/5">
      <div className="flex items-center gap-8">
        <button className="flex items-center gap-2 text-dashboard-muted hover:text-red-500 transition-colors font-bold text-sm">
          <Heart size={20} />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-2 text-dashboard-muted hover:text-secondary transition-colors font-bold text-sm">
          <MessageCircle size={20} />
          <span>{comments}</span>
        </button>
        <button className="flex items-center gap-2 text-dashboard-muted hover:text-blue-500 transition-colors font-bold text-sm">
          <Share2 size={20} />
          <span>Share</span>
        </button>
      </div>
      <button className="text-secondary font-bold hover:underline text-sm uppercase tracking-tighter">
        View Discussion
      </button>
    </div>
  </motion.div>
);

const EventCard = ({ title, date, location, type }) => (
  <div className="p-6 bg-neutral-50 dark:bg-white/5 rounded-3xl mb-4 last:mb-0 border border-transparent hover:border-secondary/20 transition-all shadow-sm">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[10px] font-black text-secondary uppercase tracking-widest">{type}</span>
      <span className="text-[10px] font-bold text-dashboard-muted uppercase tracking-tighter">{date}</span>
    </div>
    <h4 className="font-bold text-neutral-900 dark:text-white mb-1">{title}</h4>
    <p className="text-xs text-dashboard-muted font-medium italic">{location}</p>
  </div>
);

const Community = () => {
  const posts = [
    {
      author: "Sarah Chen",
      role: "AI Researcher",
      time: "2 HOURS AGO",
      title: "Breakthrough in Neural Architecture Search (NAS)",
      content: "I've just published my latest findings on zero-shot NAS. It's reducing architectural search time by 40% in edge-computing scenarios. Would love to get your thoughts on the code implementation!",
      likes: 124,
      comments: 42
    },
    {
      author: "Marcus Aurelius",
      role: "Senior Architect",
      time: "YESTERDAY",
      title: "Building Resilient Distributed Systems",
      content: "Does anyone have experience with chaos engineering tools for React server components? Working on a large-scale project and looking for solid reliability testing patterns.",
      likes: 85,
      comments: 18
    }
  ];

  return (
    <DashboardLayout>
      <div className="pt-2">
        <div className="flex items-center justify-between mb-12 px-4">
          <div>
            <h1 className="text-4xl font-black text-neutral-900 dark:text-white tracking-tight">Community Hub</h1>
            <p className="text-dashboard-muted font-medium mt-1">Connect, collaborate, and grow with peers</p>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 bg-secondary text-white font-bold rounded-3xl shadow-lg shadow-secondary/20 hover:scale-105 transition-all">
            <Plus size={22} />
            <span>Create Discussion</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4 pb-20">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative flex-1 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dashboard-muted group-focus-within:text-secondary transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Filter community topics..."
                  className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-dark-card border border-neutral-100 dark:border-white/5 rounded-2xl text-sm focus:ring-2 focus:ring-secondary/10 transition-all outline-none"
                />
              </div>
              <button className="p-3.5 bg-white dark:bg-dark-card border border-neutral-100 dark:border-white/5 rounded-2xl text-dashboard-muted hover:text-secondary transition-colors">
                <Filter size={20} />
              </button>
            </div>
            
            {posts.map((post, i) => (
              <CommunityPost key={i} {...post} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="text-secondary" size={24} />
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Upcoming Events</h2>
              </div>
              <EventCard 
                title="Deep Learning Workshop" 
                date="OCT 15, 2026" 
                location="Virtual Reality Hub" 
                type="LIVE SESSION"
              />
              <EventCard 
                title="Q&A with Google Researchers" 
                date="OCT 22, 2026" 
                location="Main Auditorium" 
                type="AMAZING SPEAKER"
              />
              <EventCard 
                title="Hackathon: Quantum AI" 
                date="NOV 05, 2026" 
                location="San Francisco / HQ" 
                type="GLOBAL EVENT"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="text-secondary" size={24} />
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Trending Topics</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {["#QuantumComputing", "#ArtificialIntelligence", "#CleanCode", "#UIAnimation", "#ReactServerComponents", "#CyberSecurity"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-neutral-100 dark:bg-white/5 text-xs font-bold text-dashboard-muted rounded-full hover:bg-secondary/10 hover:text-secondary cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Community;
