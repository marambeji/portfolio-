import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { Code2, Layout, Database, GitBranch, CheckCircle2, Sparkles } from 'lucide-react';
import { personalInfo, qualities } from '../data/portfolio';

const indicatorIcons = [
  <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  <Layout className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
  <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  <GitBranch className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
];

const indicators = [
  {
    title: 'Développement Full Stack',
    desc: 'Conception de solutions complètes, du front-end interactif au back-end performant.',
  },
  {
    title: 'Applications Web',
    desc: 'Interfaces utilisateur modernes, réactives, ergonomiques et optimisées pour le web.',
  },
  {
    title: 'Bases de données',
    desc: 'Modélisation relationnelle et NoSQL, requêtage efficace et intégration ORM.',
  },
  {
    title: 'CI/CD et DevOps',
    desc: 'Automatisation des tests, intégration continue GitHub Actions et conteneurisation Docker.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="À propos de moi"
          subtitle="Découvrez mon parcours, mes domaines d'expertise et mes valeurs de travail."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Bio Card with Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={personalInfo.avatarUrl}
                  alt="Maram Beji"
                  className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-blue-600 shadow-md flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                    <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    Ingénieure & Passionnée par la Tech
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">ESPRIT - École Supérieure Privée d'Ingénierie</p>
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-6">
                {personalInfo.bio}
              </p>

              {/* Qualities Grid */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                  Qualités & Savoir-être
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {qualities.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold border border-blue-100 dark:border-slate-700 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right 4 Visual Indicators Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {indicators.map((ind, idx) => (
              <motion.div
                key={ind.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-blue-300 dark:hover:border-blue-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center mb-4">
                    {indicatorIcons[idx]}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {ind.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
