import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import { User, Settings, Award, Shield, Bell, CreditCard, ChevronRight, Edit3, Smartphone, Laptop, Globe } from 'lucide-react';
import { WelcomeHero } from '../components/dashboard/v2/WelcomeHero';

const AchievementBadge = ({ title, icon: Icon, color, date }) => (
  <div className="card-v2 p-6 flex flex-col items-center text-center group hover:border-secondary/20 transition-all">
    <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
      <Icon size={32} />
    </div>
    <h4 className="font-bold text-neutral-900 dark:text-white mb-1 tracking-tight">{title}</h4>
    <p className="text-[10px] font-bold text-dashboard-muted uppercase tracking-widest">{date}</p>
  </div>
);

const SettingItem = ({ title, description, icon: Icon, active = false }) => (
  <div className="flex items-center justify-between p-6 hover:bg-neutral-50 dark:hover:bg-white/5 transition-all rounded-3xl group cursor-pointer border border-transparent hover:border-neutral-100 dark:hover:border-white/5">
    <div className="flex items-center gap-6">
      <div className="w-12 h-12 rounded-2xl bg-neutral-900 flex items-center justify-center text-white shadow-md group-hover:bg-secondary transition-colors">
        <Icon size={22} />
      </div>
      <div>
        <h4 className="font-bold text-neutral-900 dark:text-white group-hover:text-secondary transition-colors">{title}</h4>
        <p className="text-sm text-dashboard-muted font-medium">{description}</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      {active && <span className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 text-[10px] font-black rounded-lg uppercase tracking-widest">Active</span>}
      <ChevronRight size={20} className="text-dashboard-muted group-hover:text-secondary translate-x-0 group-hover:translate-x-1 transition-all" />
    </div>
  </div>
);

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="pt-2">
        {/* Profile Header (Inspired by WelcomeHero) */}
        <div className="card-v2 p-12 relative overflow-hidden mb-12 bg-gradient-to-br from-neutral-900 to-black text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-secondary to-transparent"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="relative">
              <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-secondary to-accent">
                <div className="w-full h-full rounded-full bg-neutral-800 border-4 border-black flex items-center justify-center overflow-hidden">
                  <User size={64} className="text-white/20" />
                </div>
              </div>
              <button className="absolute bottom-1 right-1 p-2 bg-secondary text-white rounded-full border-4 border-black shadow-lg hover:scale-110 transition-transform">
                <Edit3 size={16} />
              </button>
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl font-black mb-2 tracking-tight">Alexander Romanov</h1>
              <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Master Tier • Elite Researcher</p>
              
              <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                <div className="text-center md:text-left">
                  <p className="text-3xl font-black tracking-tighter">1,240</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">XP Points</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-3xl font-black tracking-tighter">14</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Courses Join</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-3xl font-black tracking-tighter">8</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Certificates</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-2xl transition-all border border-white/10">
                View Public Profile
              </button>
              <button className="px-6 py-3 bg-secondary text-white font-bold rounded-2xl shadow-xl shadow-secondary/40 hover:scale-105 transition-all">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 pb-20">
          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-secondary" size={28} />
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Achievements</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <AchievementBadge 
                title="Fast Learner" 
                icon={Award} 
                color="bg-orange-500" 
                date="MAY 2026"
              />
              <AchievementBadge 
                title="Top Researcher" 
                icon={Shield} 
                color="bg-purple-600" 
                date="AUG 2026"
              />
              <AchievementBadge 
                title="Community Hero" 
                icon={Award} 
                color="bg-blue-500" 
                date="OCT 2026"
              />
            </div>
          </div>

          {/* Account Settings */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Settings className="text-secondary" size={28} />
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Account Settings</h2>
            </div>
            <div className="card-v2 p-4 bg-white dark:bg-dark-card border border-neutral-100 dark:border-white/5 space-y-2">
              <SettingItem 
                title="Personal Information" 
                description="Manage your identity and bio" 
                icon={User} 
              />
              <SettingItem 
                title="Security & Password" 
                description="Two-factor auth and active sessions" 
                icon={Shield} 
                active={true}
              />
              <SettingItem 
                title="Notification Preferences" 
                description="Customize your alerts and emails" 
                icon={Bell} 
              />
              <SettingItem 
                title="Payment Methods" 
                description="Manage your pro subscription billing" 
                icon={CreditCard} 
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
