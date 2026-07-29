import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { Briefcase, Calendar, Building2, CheckCircle2, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Parcours professionnel & Projets récents"
          subtitle="Découvrez mes expériences en entreprise, stages techniques et projets majeurs."
        />

        <div className="relative mt-12">
          {/* Vertical Timeline Bar */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900/60 -translate-x-1/2" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900/60" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-slate-950 flex items-center justify-center text-white shadow-md z-10">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>

                  {/* Content Box */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
                    <div className="glass-panel p-6 sm:p-7 rounded-2xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 shadow-sm group">
                      
                      {/* Top Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                          {exp.type}
                        </span>
                        <span className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5 mr-1 text-blue-600 dark:text-blue-400" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1 mb-4">
                        <Building2 className="w-4 h-4 mr-1.5 text-blue-500" />
                        {exp.organizationUrl ? (
                          <a
                            href={exp.organizationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            <span>{exp.organization}</span>
                            <ExternalLink className="w-3.5 h-3.5 ml-1" />
                          </a>
                        ) : (
                          <span>{exp.organization}</span>
                        )}
                      </div>

                      {/* Achievement Details */}
                      <ul className="space-y-2 mb-5">
                        {exp.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
