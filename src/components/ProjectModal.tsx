import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Layers, Cpu, Building2, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 my-8"
        >
          {/* Header Banner */}
          <div className={`h-40 bg-gradient-to-r ${project.gradient || 'from-blue-600 to-indigo-700'} p-6 flex flex-col justify-between relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/40 text-white hover:bg-slate-950/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white z-20"
              aria-label="Fermer la fenêtre modale"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold">
                Projet Majeur
              </span>
              {project.company && (
                <a
                  href={project.companyUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 bg-blue-950/50 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-semibold hover:bg-blue-950/80 transition-colors"
                >
                  <Building2 className="w-3 h-3 mr-1" />
                  {project.company}
                </a>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center">
                <Layers className="w-4 h-4 mr-1.5 text-blue-600 dark:text-blue-400" />
                Présentation Générale
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {project.summary}
              </p>
              {project.companyUrl && (
                <div className="mt-3">
                  <a
                    href={project.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Site Officiel de l'entreprise : {project.companyUrl} <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              )}
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-blue-600 dark:text-blue-400" />
                Fonctionnalités Clés & Spécifications
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium border border-slate-200/60 dark:border-slate-800"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2.5 mt-1.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center">
                <Cpu className="w-4 h-4 mr-1.5 text-blue-600 dark:text-blue-400" />
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-200 dark:border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              {project.githubLinks && project.githubLinks.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {project.githubLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm"
                    >
                      <FaGithub className="w-4 h-4 mr-2 text-blue-400" />
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-medium text-sm transition-colors shadow-sm"
                >
                  <FaGithub className="w-4 h-4 mr-2" />
                  Code GitHub
                </a>
              ) : null}
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold transition-colors ml-auto"
              >
                Fermer
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
