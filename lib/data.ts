import yaml from 'js-yaml';
import { SiteConfig, Experience, Education, Project } from './types';

// Default config based on the original _config.yml
const defaultConfig: SiteConfig = {
  name: 'Dan Bennett',
  title: 'Partner Program Manager - PUBG WEST at KRAFTON',
  email: 'dan@danbennett.me',
  website: 'https://danbennett.me',
  darkmode: false,
  twitter_username: 'DanBennettUK',
  github_username: 'DanBennettUK',
  instagram_username: 'danbennettuk',
  linkedin_username: 'danbennettuk',
  about_profile_image: 'assets/dan.jpg',
  about_content: `Hi! I'm Dan 👋

I am a Partner Program Manager at KRAFTON, working on PUBG WEST - handling creator partnerships, content strategy, and community initiatives across Western markets.

I spend my time building scalable partner frameworks, optimising performance across platforms, and strengthening brand loyalty through sustainable creator ecosystems.`,
  experience_title: 'Experience',
  footer_show_references: false,
};

export function getConfig(): SiteConfig {
  return defaultConfig;
}

export function getExperience(): Experience[] {
  return [
    {
      layout: 'left',
      company: 'KRAFTON',
      link: 'https://www.krafton.com',
      job_title: 'Partner Program Manager - PUBG WEST',
      dates: '2022 - Present',
      quote: 'Creators of PUBG: BATTLEGROUNDS and leading global game development company.',
      description: `Leading creator partnerships and content strategy for PUBG WEST across Western markets.

- Building scalable partner frameworks for long-term creator alignment
- Optimising performance across multiple platforms and content verticals  
- Cross-functional work with publishing, marketing, esports, and product teams
- Strengthening brand loyalty through sustainable creator ecosystems
- Regional partner strategy and platform diversification initiatives`,
    },
    {
      layout: 'left',
      company: 'PUBG Reddit (r/PUBATTLEGROUNDS)',
      link: 'https://www.reddit.com/r/pubattlegrounds',
      job_title: 'Volunteer Community Manager & Community Games Host',
      dates: '2018 - 2022',
      quote: 'The largest community for PLAYERUNKNOWN\'S BATTLEGROUNDS on PC, Xbox One and PlayStation 4.',
      description: `Volunteer community manager for the largest PUBG community, growing from member to moderator to community leader.

- Discord and Subreddit community management for 100k+ members
- Social media management for community Twitter account
- Hosted Community Custom Games with live Twitch streaming and commentary
- Collaborated with PUBG Corp on community events and feedback initiatives
- Part of the Community Reporting team for accurate evidence collection`,
    },
    {
      layout: 'left',
      company: 'APT Solutions',
      link: '',
      job_title: 'Service Desk Agent',
      dates: 'November 2019 - 2022',
      quote: 'Specialist supplier of membership software and services, predominantly in the Not for Profit sector.',
      description: `Service Desk Agent supporting customers with Membership software, from small taxi firms to huge unions.

- Multi-shift coverage including night shifts for UK, AUS and NZ customers
- Investigation and incident report writing with honest, open communication
- Supporting diverse client base across Trade Unions, Professional Institutions, and Sporting Bodies`,
    },
  ];
}

export function getEducation(): Education[] {
  return [];
}

export function getProjects(): Project[] {
  return [];
}
