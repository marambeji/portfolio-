import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Code2, Layers, ChevronRight, Building2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../data/portfolio';
import type { Project } from '../types/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Projets & Réalisations"
          subtitle="Une sélection d'applications full stack développées avec des architectures modernes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Graphic Banner Placeholder Area */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient || 'from-blue-600 to-indigo-700'} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute -right-8 -bottom-8 opacity-15 text-white">
                  <Code2 className="w-48 h-48" />
                </div>
                
                <div className="flex items-center justify-between z-10">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold tracking-wide">
                      Full Stack App
                    </span>
                    {project.company && (
                      <a
                        href={project.companyUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-blue-950/40 backdrop-blur-md hover:bg-blue-950/70 border border-white/20 rounded-full text-white text-xs font-semibold inline-flex items-center transition-colors"
                        title="Visiter le site de l'entreprise"
                      >
                        <Building2 className="w-3 h-3 mr-1" />
                        {project.company}
                      </a>
                    )}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-slate-950/30 text-white hover:bg-slate-950/60 transition-colors"
                      aria-label={`Code source GitHub de ${project.title}`}
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="z-10">
                  <h3 className="text-2xl font-bold text-white group-hover:translate-x-1 transition-transform">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  {project.company && (
                    <div className="mb-3">
                      <a
                        href={project.companyUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <Building2 className="w-3.5 h-3.5 mr-1" />
                        {project.company} ({project.companyUrl?.replace('https://', '').replace('/', '')})
                      </a>
                    </div>
                  )}

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Highlights preview */}
                  <div className="space-y-1.5 mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center">
                      <Layers className="w-3.5 h-3.5 mr-1 text-blue-500" />
                      Points forts
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-blue-600 dark:text-blue-400 font-medium pt-1">
                          +{project.features.length - 3} autres fonctionnalités dans les détails
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Tech Chips & Actions */}
                <div className="space-y-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus:outline-none"
                    >
                      Voir les détails
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      >
                        GitHub <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal render */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
