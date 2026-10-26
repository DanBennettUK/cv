export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  location: string;
  workRights: string;
  earlierWork: string;
  email: string;
  website: string;
  githubUrl: string;
  linkedinUrl: string;
  about_profile_image?: string;
  aboutParagraphs: string[];
  experience_title?: string;
  footer_show_references?: boolean;
}

export interface RoleTitle {
  title: string;
  dates: string;
}

export interface Experience {
  company: string;
  link?: string;
  job_title: string;
  dates: string;
  description: string;
  category: 'current' | 'employment' | 'community';
  concurrentWith?: string;
  titles?: RoleTitle[];
  clusters?: { title: string; bullets: string[] }[];
  summaryLines?: string[];
  detailLines?: string[];
}

export interface ImpactHighlight {
  title: string;
  description: string;
}

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export interface PublicRepo {
  name: string;
  url: string;
  description: string;
}
