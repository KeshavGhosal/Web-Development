
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
