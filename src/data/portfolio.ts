import type { Experience, Project, SkillCategory, Education, Language, AssociativeExperience } from '../types/portfolio';

export const personalInfo = {
  name: 'Maram Beji',
  title: 'Élève ingénieure en informatique',
  subtitle: 'Développeuse Full Stack | React, Node.js, Symfony et .NET',
  location: 'Tunis, Tunisie',
  email: 'beji.maram@esprit.tn',
  linkedin: 'https://linkedin.com/in/maram-beji',
  github: 'https://github.com/marambeji',
  avatarUrl: `${import.meta.env.BASE_URL}maram-beji.jpg`,
  bio: `Élève ingénieure en informatique à ESPRIT, sérieuse, motivée et adaptable. Je possède une expérience dans la conception d’applications web full stack, la gestion de bases de données, l’intégration CI/CD et le développement d’interfaces performantes. Curieuse et autonome, j’apprends rapidement et j’aime transformer des besoins métiers en solutions numériques fiables et faciles à utiliser.`,
  shortHeroSentence: 'Je conçois des applications web modernes, performantes et adaptées aux besoins des utilisateurs.',
  availability: 'Ouverte aux opportunités de stage et aux projets collaboratifs',
  cvPath: `${import.meta.env.BASE_URL}cv-maram-beji.pdf`,
};

export const aboutIndicators = [
  {
    title: 'Développement Full Stack',
    description: 'Création d’applications end-to-end réactives et robustes.',
    icon: 'Code2',
  },
  {
    title: 'Applications Web & Microservices',
    description: 'Interfaces utilisateur modernes, architectures distribuées & API REST.',
    icon: 'Layout',
  },
  {
    title: 'Bases de données',
    description: 'Modélisation, requêtage et optimisation SQL & NoSQL.',
    icon: 'Database',
  },
  {
    title: 'CI/CD et DevOps',
    description: 'Automatisation des déploiements et conteneurisation Docker.',
    icon: 'GitBranch',
  },
];

export const qualities = [
  'Autonomie',
  'Adaptabilité',
  'Esprit d’équipe',
  'Apprentissage rapide',
  'Résolution de problèmes',
];

export const experiences: Experience[] = [
  {
    id: 'volus-hr-portal',
    title: 'Développeuse Full Stack - HR Leave Management Portal',
    organization: 'VOLUS (NOVOLUS à l’international)',
    organizationUrl: 'https://volus.tn/',
    type: 'Stage ingénieur',
    period: 'Juillet - Août 2026',
    details: [
      'Conception et développement d’un portail complet de gestion des congés pour VOLUS (entreprise internationale opérant sous la marque NOVOLUS à l’étranger).',
      'Mise en place de workflows d’approbation séquentiels multi-niveaux pour les employés et managers RH.',
      'Gestion automatisée des soldes de congés, politiques d’entreprise et historiques d’audit.',
      'Développement du front-end avec React, TypeScript et Vite, et de l’API backend avec NestJS, PostgreSQL et TypeORM.',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'NestJS', 'PostgreSQL', 'TypeORM', 'Swagger'],
  },
  {
    id: 'bmp-tn',
    title: 'Projet : BMP.tn – Marketplace & Plateforme de Gestion',
    organization: 'ESPRIT (Client réel : CCA Tunisie)',
    organizationUrl: 'https://www.ccatunisie.com/index.html',
    type: 'Projet académique avec client réel',
    period: 'Janvier - Mai 2026',
    details: [
      'Développement d’un écosystème numérique pour le bâtiment (Experts, Artisans...).',
      'Réalisé sous un cadre académique à ESPRIT pour un client réel (CCA Tunisie).',
      'Gestion de projets et chantiers, devis, facturation, et commandes en ligne.',
      'Mise en place de pipelines CI/CD et conteneurisation des services (DevOps).',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'itland-stage',
    title: 'Stage en développement web',
    organization: 'ITLAND',
    type: 'Stage professionnel',
    period: 'Mai 2025 - Juin 2025',
    details: [
      'Optimisation des performances front-end avec React.',
      'Amélioration du temps de chargement des pages annoncée d’environ 25 %.',
    ],
    technologies: ['React', 'Node.js', 'Méthodes Agile'],
  },
  {
    id: 'maison-maghreb',
    title: 'Projet Maison du Maghreb',
    organization: 'ESPRIT',
    type: 'Projet académique',
    period: 'Fév - Mai 2025',
    details: [
      'Développement Full Stack Modules Articles & Commentaires : CRUD, Ajax, pagination.',
    ],
    technologies: ['Symfony 6', 'PHP 8', 'MySQL'],
  },
  {
    id: 'pfe-document-workflow',
    title: 'Stage de PFE : Conception et réalisation d’une plateforme d’un workflow De Gestion De Documents',
    organization: 'Siège Banque de Tunisie',
    type: 'Stage de Fin d’Études',
    period: 'Fév - Mai 2024',
    details: [
      'Étude des besoins et gestion d’authentification.',
      'Gestion des documents (CRUD, historisation, partage...).',
      'Implémentation des rôles et permissions.',
      'Système de téléchargement et de prévisualisation.',
    ],
    technologies: ['C#', '.NET', 'SQL SERVER'],
  },
  {
    id: 'student-mgmt',
    title: 'Projet : Application de gestion des étudiants',
    organization: 'ISET Kélibia',
    type: 'Projet académique',
    period: 'Mars - Avril 2023',
    details: [
      'Conception de la base de données et développement des fonctionnalités.',
    ],
    technologies: ['Java/JEE', 'HTML', 'CSS', 'JS', 'Oracle'],
  },
  {
    id: 'intern-mgmt',
    title: 'Stage de perfectionnement : Développement d’une application web de gestion des stagiaires',
    organization: 'Siège Banque de Tunisie',
    type: 'Stage technique',
    period: 'Jan. 2023',
    details: [
      'Gestion des stagiaires (ajout, modification, suppression).',
    ],
    technologies: ['C#', '.NET', 'SQL SERVER'],
  },
  {
    id: 'library-mgmt',
    title: 'Stage d’initiation : Développement d’une application web de gestion d’une bibliothèque',
    organization: 'Al Ahram company',
    type: 'Stage d’initiation',
    period: 'Juillet - Sep 2022',
    details: [
      'Gestion d’authentification et d’autorisations.',
      'Gestion des Utilisateurs (ajout, modification, suppression).',
    ],
    technologies: ['PHP OOP', 'WAMP', 'Bootstrap'],
  },
  {
    id: 'it-maintenance',
    title: 'Stage d’initiation : Maintenance des Équipements informatiques',
    organization: 'Siège Banque de Tunisie',
    type: 'Stage d’initiation',
    period: 'Jan. 2021',
    details: [
      'Participation aux inventaires et suivi des tickets d’intervention.',
      'Diagnostique et réparation des équipements.',
    ],
    technologies: ['Diagnostic matériel', 'Maintenance IT', 'Inventaires'],
  },
];

export const projects: Project[] = [
  {
    id: 'hr-leave-portal',
    title: 'HR Leave Management Portal',
    company: 'VOLUS (NOVOLUS à l’international)',
    companyUrl: 'https://volus.tn/',
    summary: 'Application complète de gestion des congés développée pour VOLUS (entreprise internationale opérant en Tunisie sous la marque VOLUS et à l’étranger sous le nom NOVOLUS), destinée aux employés et aux responsables RH.',
    features: [
      'Soumission et suivi des demandes de congé',
      'Workflows d’approbation séquentiels à plusieurs niveaux',
      'Espaces distincts pour les employés et les responsables RH',
      'Gestion des employés, politiques de congé et jours fériés',
      'Historique des soldes et des accumulations',
      'Rapports et journaux d’audit',
      'Suivi visuel de l’avancement de chaque demande',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'NestJS', 'PostgreSQL', 'TypeORM', 'Swagger'],
    githubUrl: 'https://github.com/marambeji/volus',
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'bmp-tn-project',
    title: 'BMP.tn – Marketplace & Plateforme de Gestion',
    company: 'ESPRIT / Client réel : CCA Tunisie',
    companyUrl: 'https://www.ccatunisie.com/index.html',
    summary: 'Marketplace et plateforme de gestion pour le secteur du bâtiment (Experts, Artisans...), développée sous un cadre académique à ESPRIT pour un client réel (CCA Tunisie).',
    features: [
      'Développement d’un écosystème numérique pour le bâtiment (Experts, Artisans...)',
      'Projet sous cadre académique à ESPRIT avec le client réel CCA Tunisie',
      'Gestion de projets et chantiers, devis, facturation, et commandes en ligne',
      'Mise en place de pipelines CI/CD et conteneurisation des services (DevOps)',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    githubUrl: 'https://github.com/marambeji/fullstakers',
    gradient: 'from-cyan-600 to-blue-700',
  },
  {
    id: 'microservice-med-project',
    title: 'Application Web Microservices (MedicalSync)',
    company: 'ESPRIT',
    summary: 'Plateforme médicale distribuée basée sur une architecture microservices (gestion des utilisateurs, rendez-vous, pharmacie, don de sang, réclamations et location de matériel).',
    features: [
      'Architecture distribuée basée sur Spring Cloud, Eureka Server & API Gateway',
      'Microservices autonomes (ms-user, ms-rendez-vous, ms-pharmacie, ms-don-de-sang, ms-location-materiel, ms-reclamation)',
      'Serveur de configuration centralisé (ms-config)',
      'Orchestration et déploiement avec Docker et Docker Compose',
      'Front-end réactif dédié à la santé (frontend-med)',
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Eureka', 'Microservices', 'Docker', 'Docker Compose'],
    githubUrl: 'https://github.com/marambeji/applicationweb-microservice',
    gradient: 'from-purple-600 to-indigo-800',
  },
  {
    id: 'maison-maghreb-project',
    title: 'Maison du Maghreb',
    company: 'ESPRIT',
    summary: 'Projet décliné en version Web (Symfony 6) et Desktop (JavaFX) pour la gestion d’articles, commentaires et modération.',
    features: [
      'Version Web Symfony 6 (PHP 8, MySQL, Ajax, Pagination)',
      'Version Desktop JavaFX pour la gestion applicative',
      'Développement Full Stack des modules Articles & Commentaires',
      'Système interactif de commentaires et de publication',
    ],
    technologies: ['Symfony 6', 'PHP 8', 'JavaFX', 'Java', 'MySQL'],
    githubUrl: 'https://github.com/Heythaam/projet-pidev-3a50-bytequest',
    githubLinks: [
      { label: 'GitHub Symfony (Web)', url: 'https://github.com/Heythaam/projet-pidev-3a50-bytequest' },
      { label: 'GitHub JavaFX (Desktop)', url: 'https://github.com/Heythaam/bytequest-pidev-javafx' },
    ],
    gradient: 'from-sky-600 to-blue-800',
  },
  {
    id: 'doc-workflow-platform',
    title: 'Plateforme de Workflow Documentaire',
    company: 'Siège Banque de Tunisie',
    companyUrl: 'https://www.bt.com.tn/',
    summary: 'Plateforme permettant de centraliser, sécuriser et suivre les documents d’une organisation, développée lors du stage de PFE au Siège Banque de Tunisie.',
    features: [
      'Authentification sécurisée',
      'Gestion centralisée des documents (CRUD)',
      'Historisation complète des modifications',
      'Système de partage et permissions granulaires',
      'Rôles et accès restreints',
      'Module de prévisualisation documentaire intégrée',
    ],
    technologies: ['C#', '.NET', 'SQL Server'],
    githubUrl: 'https://github.com/marambeji',
    gradient: 'from-blue-700 to-slate-800',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Langages',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'PHP' },
      { name: 'Java' },
      { name: 'Dart' },
      { name: 'C#' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'Flutter' },
      { name: 'FlutterFlow' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'NestJS' },
      { name: 'Symfony' },
      { name: '.NET' },
      { name: 'Java/JEE' },
    ],
  },
  {
    title: 'Bases de données',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Oracle' },
      { name: 'SQL Server' },
      { name: 'MongoDB' },
    ],
  },
  {
    title: 'DevOps & Outils',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitHub Actions' },
      { name: 'Docker' },
      { name: 'Jenkins' },
      { name: 'Swagger' },
      { name: 'Jira' },
    ],
  },
  {
    title: 'Systèmes',
    skills: [
      { name: 'Windows' },
      { name: 'Linux' },
    ],
  },
];

export const educationList: Education[] = [
  {
    id: 'esprit',
    degree: 'Cycle d’ingénierie en informatique (En cours)',
    institution: 'ESPRIT - École Supérieure Privée d’Ingénierie',
    location: 'Tunis, Tunisie',
    period: 'Depuis 2024 (En cours)',
    status: 'En cours',
  },
  {
    id: 'iset-kelibia',
    degree: 'Licence en développement des systèmes d’information',
    institution: 'Institut Supérieur des Études Technologiques de Kélibia',
    location: 'Kélibia, Tunisie',
    period: '2020 - 2023',
  },
  {
    id: 'lycee-grombalia',
    degree: 'Baccalauréat en sciences de l’informatique',
    institution: 'Lycée Grombalia',
    location: 'Grombalia, Tunisie',
    period: '2016 - 2020',
  },
];

export const languagesList: Language[] = [
  { name: 'Français', level: 'Intermédiaire', flag: '🇫🇷' },
  { name: 'Anglais', level: 'Intermédiaire', flag: '🇬🇧' },
  { name: 'Allemand', level: 'Débutant', flag: '🇩🇪' },
];

export const associativeList: AssociativeExperience[] = [
  {
    role: 'Secrétaire générale',
    organization: 'Club The Changers',
    period: '2022 - 2023',
  },
  {
    role: 'Membre de l’équipe de basketball',
    organization: 'Dalila Sportive',
    period: '2015 - 2018',
  },
];
