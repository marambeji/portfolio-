import React from 'react';
import { motion } from 'framer-motion';
import { Download, FolderGit2, Mail, Sparkles, MapPin, ArrowRight, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-tech-grid"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/15 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/15 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium mb-6 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </motion.div>

            {/* Profile Photo directly next to Name */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 w-full">
              {/* Photo Avatar */}
              <div className="relative group flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur opacity-50 group-hover:opacity-80 transition duration-500" />
                <img
                  src={personalInfo.avatarUrl}
                  alt="Maram Beji - Photo de profil"
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border-2 border-blue-600 dark:border-blue-500 shadow-xl"
                />
                <span
                  className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full shadow-sm"
                  title="Disponible"
                />
              </div>

              {/* Name & Greeting */}
              <div>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-base sm:text-lg tracking-wide uppercase mb-1">
                  Bonjour, je suis
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  {personalInfo.name}
                </h1>
              </div>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 mb-4">
              Élève ingénieure en informatique et développeuse Full Stack
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
              {personalInfo.shortHeroSentence}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <FolderGit2 className="w-5 h-5 mr-2" />
                Voir mes projets
              </a>

              <a
                href={personalInfo.cvPath}
                download="CV-Maram-Beji.pdf"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold shadow-md transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-500 border border-slate-700/50"
              >
                <Download className="w-5 h-5 mr-2 text-blue-400" />
                Télécharger mon CV
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-800 shadow-sm transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Mail className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Me contacter
              </a>
            </div>

            {/* Social Icons & Location */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full">
              <div className="flex items-center space-x-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Envoyer un e-mail"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 space-x-1.5 ml-auto sm:ml-0">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Tech Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

              {/* Main Tech Card */}
              <div className="relative glass-panel rounded-3xl p-6 sm:p-8 space-y-6 blue-glow">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/30">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">Full Stack Profile</h3>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">ESPRIT Engineer Student</p>
                    </div>
                  </div>
                  <Sparkles className="w-5 h-5 text-amber-400 animate-bounce" />
                </div>

                {/* Tech Badges */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                    Compétences Clés & Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'Next.js', 'Symfony', '.NET', 'Docker', 'PostgreSQL'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-100 dark:border-slate-700 shadow-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Snippet Box */}
                <div className="rounded-2xl bg-slate-900 p-4 text-xs font-mono text-slate-300 shadow-inner overflow-hidden border border-slate-800">
                  <div className="flex items-center space-x-1.5 mb-3 pb-2 border-b border-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span className="text-[10px] text-slate-500 ml-2">maram_beji.ts</span>
                  </div>
                  <p><span className="text-purple-400">const</span> engineer = &#123;</p>
                  <p className="pl-4"><span className="text-blue-400">name</span>: <span className="text-emerald-400">'Maram Beji'</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">school</span>: <span className="text-emerald-400">'ESPRIT'</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">speciality</span>: <span className="text-emerald-400">'Full Stack Engineering'</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">available</span>: <span className="text-amber-400">true</span></p>
                  <p>&#125;;</p>
                </div>

                {/* Quick Link Footer */}
                <div className="pt-2 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span>Conception & Architecture</span>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Découvrir mon profil <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
