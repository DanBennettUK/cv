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

I work at KRAFTON on PUBG WEST, handling creator partnerships and community stuff. Basically I work with streamers, content creators, and help run community events.

Before that I spent years doing volunteer community management for PUBG Reddit (100k+ members), running tournaments, streaming events, and helping players get their voices heard by the developers.

I've also done my time in tech support - from Moodle LMS systems to membership software for unions and charities. Six years of troubleshooting, server management, and keeping customers happy.

When I'm not working, I'm probably gaming (PUBG, MS Flight Sim, Euro Truck Sim), making music, or planning my next trip to Korea.

Got a question or just want to chat? Hit me up.`,
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
      quote: 'Creators of PUBG: BATTLEGROUNDS.',
      description: `I work on the PUBG WEST partner program - basically handling creator partnerships and community stuff across Western markets.

- Working with creators, streamers, and content makers
- Helping run community events and tournaments
- Cross-team work with marketing, esports, and product teams
- Managing partner relationships and support`,
    },
    {
      layout: 'left',
      company: 'PUBG Reddit (r/PUBATTLEGROUNDS)',
      link: 'https://www.reddit.com/r/pubattlegrounds',
      job_title: 'Volunteer Community Manager & Community Games Host',
      dates: '2018 - 2022',
      quote: 'The largest community for PLAYERUNKNOWN\'S BATTLEGROUNDS.',
      description: `Volunteer mod for the biggest PUBG community. Started as a member, became a mod, ended up running community events.

- Managing Discord and Reddit for 100k+ members
- Running Community Custom Games with live Twitch streams
- Helping players give feedback to the devs
- Reporting cheaters and troublemakers
- Managing the community Twitter account`,
    },
    {
      layout: 'left',
      company: 'APT Solutions',
      link: '',
      job_title: 'Service Desk Agent',
      dates: 'November 2019 - 2022',
      quote: 'Membership software for unions, charities, and professional bodies.',
      description: `First line support for membership software. Handled everything from tiny taxi firms to massive unions.

- Covering UK, Australia and NZ time zones (including night shifts)
- Writing incident reports when things broke
- Supporting customers via phone and ticket system`,
    },
    {
      layout: 'left',
      company: 'EGX & epic.LAN',
      link: 'https://www.epiclan.co.uk',
      job_title: 'Watch & Learn PUBG Professional',
      dates: 'October 2019',
      quote: 'UK\'s biggest gaming show.',
      description: `Taught new PUBG players at the epic.LAN Watch & Learn area during EGX 2019. 30 minute sessions showing people the ropes.

- Helping console players try PC gaming
- Running my own station all four days
- Social media promotion for the sessions`,
    },
    {
      layout: 'left',
      company: 'Chicken4Charity - SpecialEffect',
      link: 'https://www.specialeffect.org.uk',
      job_title: 'PUBG Observer',
      dates: 'July 2019',
      quote: 'Charity helping disabled gamers play.',
      description: `Volunteered to run the camera for SpecialEffect's charity PUBG tournament. Raised over £14k for the charity.

- Operating in-game cameras for the live stream
- Capturing the action for Twitch, Steam, and Facebook viewers`,
    },
    {
      layout: 'left',
      company: 'PriorsVLE',
      link: 'https://priorsvle.com',
      job_title: 'Director & VLE Technical Consultant',
      dates: '2017 - 2019',
      quote: 'Moodle hosting and support for schools and businesses.',
      description: `Co-founded a Moodle hosting company. Technical support, server management, and keeping clients happy.

- Managing CentOS servers with Apache, PHP, MySQL
- First line support for client users
- Social media and marketing
- Git repo management for custom plugins`,
    },
    {
      layout: 'left',
      company: 'HowToMoodle',
      link: 'https://howtomoodle.com',
      job_title: 'Support Technician',
      dates: '2012 - 2018',
      quote: 'Moodle and Totara support and hosting.',
      description: `Six years of Moodle support - migrations, upgrades, troubleshooting, and customer service.

- Server management (CentOS, Apache, PHP, MySQL)
- Windows domain controller management
- Automated site setups with scripts
- On-call for server issues
- QA testing with JIRA`,
    },
    {
      layout: 'left',
      company: 'NovaFM',
      link: '',
      job_title: 'Volunteer Presenter / Producer',
      dates: '2012 - 2014',
      quote: 'Newport\'s local community radio station.',
      description: `Hosted two weekly radio shows - one for new/upcoming artists, one for dance and trance music. Produced both shows myself.

- Writing and reading news bulletins
- Helping with outside broadcasts at local festivals`,
    },
    {
      layout: 'left',
      company: 'Capita ITS',
      link: '',
      job_title: 'Junior Technical Support',
      dates: '2008 - 2012',
      quote: 'IT support for schools and colleges.',
      description: `Started at i2Q (later bought by Capita). Supporting schools with their Moodle platforms.

- Moodle admin support for schools
- QA testing for their new learning platform
- Yearly school rollovers before term starts`,
    },
  ];
}

export function getEducation(): Education[] {
  return [];
}

export function getProjects(): Project[] {
  return [];
}
