import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { SearchCentre } from '../components/dashboard/v2/SearchCentre';
import { motion } from 'framer-motion';
import { Book, FileText, Code, Database, Download, ExternalLink } from 'lucide-react';

const ResourceCard = ({ title, description, category, icon: Icon, type }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="card-v2 p-8 flex flex-col h-full bg-white dark:bg-dark-card border border-neutral-100 dark:border-white/5 shadow-dashboard group"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-lg group-hover:bg-secondary group-hover:text-white transition-all duration-300">
        <Icon size={28} />
      </div>
      <span className="px-3 py-1.5 bg-neutral-100 dark:bg-white/5 text-dashboard-muted text-[10px] font-bold rounded-lg uppercase tracking-widest">
        {type}
      </span>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-sm text-dashboard-muted leading-relaxed mb-6">{description}</p>
    </div>
    <div className="flex items-center justify-between pt-6 border-t border-neutral-100 dark:border-white/5">
      <span className="text-xs font-bold text-secondary">{category}</span>
      <button className="p-2 text-dashboard-muted hover:text-secondary transition-colors">
        <Download size={18} />
      </button>
    </div>
  </motion.div>
);

const Resources = () => {
  const resources = [
    {
      title: "Quantum Computing Foundations",
      description: "A comprehensive guide to qubits, entanglement, and quantum logic gates.",
      category: "Theoretical Physics",
      type: "PDF Guide",
      icon: Book
    },
    {
      title: "Neural Network Architecture",
      description: "Reference architectures for CNNs, Transformers, and GANs with code snippets.",
      category: "Machine Learning",
      type: "Notebook",
      icon: Code
    },
    {
      title: "Clean Data Repository",
      description: "Access curated datasets for your research projects and AI model training.",
      category: "Data Science",
      type: "Dataset",
      icon: Database
    },
    {
      title: "API Documentation",
      description: "Full reference guide for the QuantumScript SDK and cloud platform APIs.",
      category: "Development",
      type: "Documentation",
      icon: FileText
    },
    {
      title: "Advanced React Patterns",
      description: "Master Compound Components, Render Props, and custom Hooks in high-scale apps.",
      category: "Frontend",
      type: "Video Course",
      icon: Code
    },
    {
      title: "Industry Insight Report",
      description: "The 2026 report on exponential technologies and market trends in AI.",
      category: "Business",
      type: "Market Report",
      icon: FileText
    }
  ];

  return (
    <DashboardLayout>
      <div className="pt-2">
        <SearchCentre />
        
        <div className="flex items-center justify-between mb-10 px-4">
          <div>
            <h1 className="text-4xl font-black text-neutral-900 dark:text-white tracking-tight">Resource Library</h1>
            <p className="text-dashboard-muted font-medium mt-1">Foundational knowledge for your journey</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-white font-bold rounded-2xl hover:bg-neutral-200 dark:hover:bg-white/10 transition-all">
              All Files
            </button>
            <button className="px-5 py-2.5 bg-secondary text-white font-bold rounded-2xl shadow-lg shadow-secondary/20 hover:scale-105 transition-all">
              New Upload
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20"
        >
          {resources.map((res, i) => (
            <ResourceCard key={i} {...res} />
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Resources;
