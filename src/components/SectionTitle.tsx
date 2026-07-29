import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
      <div className="inline-block relative">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h2>
        <div className={`h-1.5 w-24 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full mt-3.5 shadow-sm ${centered ? 'mx-auto' : ''}`} />
      </div>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
