import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Portfolio] ${formData.subject || 'Prise de contact'}`);
    const mailtoBody = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contactez-moi"
          subtitle="Vous souhaitez discuter d’un projet, d’une offre de stage ou d’une opportunité ? N'hésitez pas à me contacter."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center">
                <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2.5" />
                Coordonnées
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Je réponds rapidement à tous les messages. Retrouvez mes liens professionnels ci-dessous.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">Adresse E-mail</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">LinkedIn</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      linkedin.com/in/maram-beji
                    </p>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">GitHub</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      github.com/maram-beji
                    </p>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">Localisation</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Envoyer un message direct
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Votre Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Votre E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean.dupont@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  Objet du message *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunité de stage / Projet web"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  Votre Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Bonjour Maram, je souhaite vous contacter concernant..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Ouvrir mon logiciel de messagerie
                </button>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                  Ce bouton préparera l’envoi directement vers <span className="font-semibold text-blue-600 dark:text-blue-400">beji.maram@esprit.tn</span> via votre client mail.
                </p>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
