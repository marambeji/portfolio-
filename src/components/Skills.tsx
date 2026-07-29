import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { skillCategories } from '../data/portfolio';
import {
  Code,
  Layout,
  Server,
  Database,
  Terminal,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFlutter,
  SiNodedotjs,
  SiNestjs,
  SiSymfony,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiJenkins,
  SiSwagger,
  SiJira,
  SiLinux,
} from 'react-icons/si';
import { FaCss3Alt, FaWindows } from 'react-icons/fa6';
import { TbBrandCSharp, TbDatabase } from 'react-icons/tb';

const categoryIcons = [
  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  <Layout className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
  <Server className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  <Database className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
  <Terminal className="w-5 h-5 text-blue-500 dark:text-blue-300" />,
  <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
];

// Helper icon resolver
const getSkillIcon = (skillName: string) => {
  const nameLower = skillName.toLowerCase();
  if (nameLower === 'html5') return <SiHtml5 className="w-4 h-4 text-orange-500" />;
  if (nameLower === 'css3') return <FaCss3Alt className="w-4 h-4 text-blue-500" />;
  if (nameLower === 'javascript') return <SiJavascript className="w-4 h-4 text-yellow-400" />;
  if (nameLower === 'typescript') return <SiTypescript className="w-4 h-4 text-blue-600" />;
  if (nameLower === 'python') return <SiPython className="w-4 h-4 text-blue-400" />;
  if (nameLower === 'php') return <SiPhp className="w-4 h-4 text-indigo-400" />;
  if (nameLower === 'c#') return <TbBrandCSharp className="w-4 h-4 text-purple-600" />;
  if (nameLower === 'react') return <SiReact className="w-4 h-4 text-cyan-400" />;
  if (nameLower === 'next.js') return <SiNextdotjs className="w-4 h-4 text-slate-800 dark:text-white" />;
  if (nameLower === 'tailwind css') return <SiTailwindcss className="w-4 h-4 text-sky-400" />;
  if (nameLower === 'bootstrap') return <SiBootstrap className="w-4 h-4 text-purple-500" />;
  if (nameLower === 'flutter' || nameLower === 'flutterflow') return <SiFlutter className="w-4 h-4 text-cyan-500" />;
  if (nameLower === 'node.js') return <SiNodedotjs className="w-4 h-4 text-emerald-500" />;
  if (nameLower === 'nestjs') return <SiNestjs className="w-4 h-4 text-rose-600" />;
  if (nameLower === 'symfony') return <SiSymfony className="w-4 h-4 text-slate-900 dark:text-white" />;
  if (nameLower === '.net') return <SiDotnet className="w-4 h-4 text-purple-600" />;
  if (nameLower === 'postgresql') return <SiPostgresql className="w-4 h-4 text-blue-500" />;
  if (nameLower === 'mysql') return <SiMysql className="w-4 h-4 text-blue-600" />;
  if (nameLower === 'oracle') return <TbDatabase className="w-4 h-4 text-red-600" />;
  if (nameLower === 'mongodb') return <SiMongodb className="w-4 h-4 text-emerald-600" />;
  if (nameLower === 'git') return <SiGit className="w-4 h-4 text-orange-600" />;
  if (nameLower === 'github') return <SiGithub className="w-4 h-4 text-slate-800 dark:text-white" />;
  if (nameLower === 'github actions') return <SiGithubactions className="w-4 h-4 text-blue-500" />;
  if (nameLower === 'docker') return <SiDocker className="w-4 h-4 text-blue-500" />;
  if (nameLower === 'jenkins') return <SiJenkins className="w-4 h-4 text-red-500" />;
  if (nameLower === 'swagger') return <SiSwagger className="w-4 h-4 text-emerald-500" />;
  if (nameLower === 'jira') return <SiJira className="w-4 h-4 text-blue-600" />;
  if (nameLower === 'linux') return <SiLinux className="w-4 h-4 text-yellow-500" />;
  if (nameLower === 'windows') return <FaWindows className="w-4 h-4 text-blue-500" />;

  return <CheckCircle2 className="w-4 h-4 text-blue-500" />;
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Compétences & Technologies"
          subtitle="Un aperçu structuré des langages, frameworks, outils DevOps et bases de données maîtrisés."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-blue-400 dark:hover:border-blue-600 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 pb-4 mb-5 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center">
                    {categoryIcons[catIdx % categoryIcons.length]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.04 }}
                      className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-sm font-semibold border border-slate-200 dark:border-slate-800 shadow-xs"
                    >
                      {getSkillIcon(skill.name)}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
