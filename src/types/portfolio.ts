export interface Experience {
  id: string;
  title: string;
  organization: string;
  organizationUrl?: string;
  type: string;
  period: string;
  details: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  company?: string;
  companyUrl?: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  githubLinks?: { label: string; url: string }[];
  image?: string;
  gradient?: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    iconName?: string;
    iconSet?: 'lucide' | 'si' | 'tb' | 'fa' | 'bi' | 'di';
  }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  status?: string;
}

export interface Language {
  name: string;
  level: string;
  flag?: string;
}

export interface AssociativeExperience {
  role: string;
  organization: string;
  period: string;
}
