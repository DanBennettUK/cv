import { SiteConfig, Experience } from './types';

// Default config based on the original _config.yml
const defaultConfig: SiteConfig = {
  name: 'Dan Bennett',
  title: 'Associate Creator Partnerships Manager, PUBG West',
  tagline:
    'Creator partnerships, partner program operations and community events for PUBG: BATTLEGROUNDS across Western markets.',
  email: 'dan@danbennett.me',
  website: 'https://danbennett.me',
  twitter_username: 'DanBennettUK',
  github_username: 'DanBennettUK',
  instagram_username: 'danbennettuk',
  linkedin_username: 'danbennettuk',
  about_profile_image: 'assets/dan.jpg',
  about_content: `I manage the partner and operational side of the PUBG WEST Partner Program at KRAFTON, working with creators and community Partners across Western markets. The role covers relationship management, campaign delivery, event coordination, reporting, issue resolution and improvements to the systems and guidance Partners use.

I came into the role through years of PUBG community work, including a 100k+ member Reddit community, tournaments, live broadcasts and structured player feedback for the game team. I also bring a technical support background, which helps me turn messy operational problems into clear next steps.`,
  current_focus:
    'Partner relationships, program operations, campaign delivery, community events, cross-team coordination, reporting and process improvement.',
  experience_title: 'Experience',
  footer_show_references: false,
};

export function getConfig(): SiteConfig {
  return defaultConfig;
}

export function getExperience(): Experience[] {
  return [
    {
      company: 'KRAFTON',
      link: 'https://www.krafton.com',
      job_title: 'Associate Creator Partnerships Manager, PUBG West',
      dates: 'December 2020 - Present',
      description: `I joined KRAFTON in December 2020 and manage creator relationships, campaign delivery and day-to-day program operations for the PUBG Partner Program across Western markets. I coordinate delivery with HQ, regional teams, Marketing, Media Ops, agencies and creators, and keep improving the workflows and support routes Partners use.

- Manage creator and Partner relationships, communications, support, feedback and campaign participation across the Partner Program
- Plan, launch and report on creator campaigns across streaming and short-form content, coordinating with HQ, regional teams, Marketing, Media Ops, agencies and creators
- Coordinate partner campaigns and activations from briefing and requirements through content submission, review, completion tracking and follow-up
- Work with marketing, esports, product, community and regional teams to align campaign plans, partner needs, assets, announcements and delivery timelines
- Create and improve Partner-facing guidance, campaign instructions and support routes so requirements are clear and easy to follow
- Turn creator and campaign activity into clear performance reporting and recommendations, separating program-controlled actions from wider product and market factors
- Maintain reporting and operational trackers used to monitor Partner activity, campaign progress, completion and follow-up actions
- Improve Partner operations through better reporting workflows, data quality and automation, moving manual processes towards scalable, data-backed tools
- Design practical feedback and escalation routes so creators can raise issues, provide evidence and receive follow-up
- Lead cross-functional reviews that turn campaign, Partner and community evidence into prioritised actions for PUBG WEST`,
    },
    {
      company: 'PUBG Reddit (r/PUBATTLEGROUNDS)',
      link: 'https://www.reddit.com/r/pubattlegrounds',
      job_title: 'Volunteer Community Manager & Community Games Host',
      dates: '2018 - December 2020',
      description: `Progressed from community member to moderator and wider community operations lead for a 100k+ member subreddit.

- Helped manage the community, including moderation, conflict resolution and enforcement of community standards
- Turned player feedback into structured discussions with the game team, planning Reddit and Twitter conversations and giving players a direct channel to PUBG Corp
- Coordinated community events, giveaways, bug reports and player feedback with PUBG Corp staff
- Gathered evidence for the Community Reporting team and submitted cases to the development team
- Ran Community Custom Games - hosted tournaments, managed leaderboards, streamed and cast matches live on Twitch
- Managed the PUBG Reddit Twitter account and built Discord bots in Python`,
    },
    {
      company: 'APT Solutions',
      job_title: 'Service Desk Agent',
      dates: 'November 2019 - December 2020',
      description: `One of three Service Desk Agents supporting customers with their membership software - from small taxi firms to large unions. Worked three shift patterns, including nights, to cover UK, Australian and New Zealand customers around the clock.

- Investigated incidents to find root causes and wrote clear, honest incident reports
- Supported customers from small businesses to huge organisations`,
    },
    {
      company: 'PriorsVLE',
      link: 'https://priorsvle.com',
      job_title: 'Director & VLE Technical Consultant',
      dates: '2017 - 2019',
      description: `Co-founded PriorsVLE - technical support, hosting and development services around Moodle, from custom plugin development to site migrations and upgrades.

- Main contact for clients; captured requirements and ensured delivery on time
- Built internal systems for efficient workflows, handled first-line support and invoicing
- Ran social media marketing and content`,
    },
    {
      company: 'HowToMoodle',
      link: 'https://howtomoodle.com',
      job_title: 'Support Technician',
      dates: '2012 - 2018',
      description: `Six years supporting Moodle and Totara customers - from site setups, upgrades and migrations to day-to-day troubleshooting and long-term client relationships.

- Site setups, upgrades and migrations to the Moodle/Totara platform
- 24/7 on-call for hosting servers, monitored with Nagios/Icinga
- Managed internal hosting servers (CentOS, Apache, PHP, MySQL/MariaDB, DirectAdmin) and external client servers (CentOS, Ubuntu, Gentoo, Windows Server)
- QA testing of plugins using JIRA; managed Git repos for Moodle/Totara code and custom themes
- Company IT: Windows Server 2012 domain rollout, desktop and laptop management, technical documentation`,
    },
    {
      company: 'Capita ITS (ex-i2Q Education)',
      job_title: 'Junior Technical Support',
      dates: '2008 - 2012',
      description: `Supported schools and colleges with their Moodle platform - helping with issues during term time and running the yearly school rollovers.

- QA testing for the OpenHive learning platform, using automated scripting and writing test plans`,
    },
    {
      group: 'Selected community, events and media work',
      company: 'EGX & epic.LAN',
      link: 'https://www.egx.net/egx/2019/watch-and-learn',
      job_title: 'Watch & Learn PUBG Professional',
      dates: '17th October - 20th October 2019',
      description: `Taught new players in epic.LAN's Watch & Learn area across all four days of EGX 2019 - 30-minute sessions covering the basics of PUBG and giving console players a taste of the PC version.

- Ran my own dedicated Watch & Learn station for all four days
- Helped set up and pack down EGX stages managed by epic.LAN`,
    },
    {
      company: 'Chicken4Charity - SpecialEffect',
      link: 'https://www.specialeffect.org.uk',
      job_title: 'PUBG Observer',
      dates: '26th July 2019',
      description: `Volunteered as an in-game observer for SpecialEffect's charity PUBG tournament - 20 teams from the UK games industry. Used the camera controls to capture the action for streaming on Steam, Twitch and Facebook. The event raised over £14,000.

- Captured gameplay for live streaming across multiple platforms
- Helped run a charity event that raised £14k+`,
    },
    {
      company: 'NovaFM',
      job_title: 'Volunteer Presenter / Producer',
      dates: '2012 - 2014',
      description: `Hosted and produced two weekly shows at Newport's community radio station - one for new and upcoming artists, one for dance, trance and UK hardcore music. Wrote and produced the weekend news bulletins and supported outside broadcasts at local festivals.

- Produced two weekly specialist music shows including news bulletins
- Outside broadcast support at festivals`,
    },
  ];
}
