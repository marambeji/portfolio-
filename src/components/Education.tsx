import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationList } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Formation & Académie"
          subtitle="Mon parcours universitaire et mes diplômes dans le domaine des sciences de l'informatique."
        />

        <div className="relative mt-12 space-y-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 dark:hover:border-blue-600 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400">
                      <Award className="w-3.5 h-3.5 mr-1" />
                      Diplôme / Inscription
                    </span>
                    {edu.status && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {edu.institution}
                  </p>
                  {edu.location && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center mt-1">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-blue-500" />
                      {edu.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Date badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold self-start sm:self-center border border-slate-200 dark:border-slate-700">
                <Calendar className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                <span>{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
