import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { Globe2, Users, Trophy, Award } from 'lucide-react';
import { languagesList, associativeList } from '../data/portfolio';

export const Languages: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Langues & Engagement Associatif"
          subtitle="Compétences linguistiques et activités en dehors du cadre académique."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Langues parlemées</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Communication multilingue</p>
                </div>
              </div>

              <div className="space-y-4">
                {languagesList.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-xs"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl" role="img" aria-label={`Drapeau ${lang.name}`}>
                        {lang.flag}
                      </span>
                      <span className="text-base font-bold text-slate-900 dark:text-white">
                        {lang.name}
                      </span>
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Associative Life Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Vie Associative & Sport</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Leadership & travail d'équipe</p>
                </div>
              </div>

              <div className="space-y-4">
                {associativeList.map((item) => (
                  <div
                    key={item.organization}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-slate-900 dark:text-white flex items-center">
                        <Trophy className="w-4 h-4 text-amber-500 mr-2" />
                        {item.role}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                      <Award className="w-4 h-4 mr-1.5" />
                      {item.organization}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
