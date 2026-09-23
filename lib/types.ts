export interface SiteConfig {
  name: string;
  title: string;
  tagline?: string;
  current_focus?: string;
  email: string;
  website: string;
  twitter_username?: string;
  github_username?: string;
  instagram_username?: string;
  linkedin_username?: string;
  about_profile_image?: string;
  about_content: string;
  experience_title?: string;
  more_content?: string;
  footer_show_references?: boolean;
}

export interface Experience {
  company: string;
  link?: string;
  job_title: string;
  dates: string;
  quote?: string;
  description: string;
  category: 'current' | 'employment' | 'community';
  tenure?: string;
  previousRole?: string;
  concurrentWith?: string;
  clusters?: { title: string; bullets: string[] }[];
}

export interface ImpactHighlight {
  title: string;
  label: string;
  description: string;
}

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export interface PublicProject {
  name: string;
  label: string;
  href: string;
  description: string;
  bullets: string[];
}

export interface ResumeRole {
  company: string;
  title: string;
  dates: string;
  tenure?: string;
  previousRole?: string;
  concurrentWith?: string;
  summary?: string;
  bullets: string[];
}
