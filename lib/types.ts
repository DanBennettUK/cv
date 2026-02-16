export interface SiteConfig {
  name: string;
  title: string;
  email: string;
  website: string;
  darkmode: boolean;
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
  layout: 'left' | 'right' | 'top-middle' | 'top-right';
  company: string;
  link?: string;
  job_title: string;
  dates: string;
  quote?: string;
  description: string;
}

export interface Education {
  layout: string;
  name: string;
  dates: string;
  qualification: string;
  quote?: string;
  description: string;
}

export interface Project {
  layout: string;
  name: string;
  link?: string;
  github?: string;
  quote?: string;
  description: string;
}
