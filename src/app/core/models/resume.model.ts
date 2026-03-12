export interface Experience {
  project: string;
  role: string;
  description: string[];
}

export interface Project {
  name: string;
  summary: string;
  year: string;
  technologies: string[];
}

export interface Resume {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  summary: string[];
  skills: string[];
  experience: Experience[];
  projects: Project[];
  achievements: string[];
  education: string;
  linkedIn: string;
  languages: string[];
  highlights: string[];
  github: string;
  portfolio: string;
  timeline: { year: string; detail: string }[];
  performanceHighlights: string[];
}
