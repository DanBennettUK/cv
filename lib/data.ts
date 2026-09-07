import { SiteConfig, Experience } from './types';

// Default config based on the original _config.yml
const defaultConfig: SiteConfig = {
  name: 'Dan Bennett',
  title: 'Associate Creator Partnerships Manager, PUBG West',
  tagline:
    'Creator partnerships and Partner Programme operations for PUBG: BATTLEGROUNDS, supported by practical reporting and delivery workflows.',
  email: 'dan@danbennett.me',
  website: 'https://danbennett.me',
  twitter_username: 'DanBennettUK',
  github_username: 'DanBennettUK',
  instagram_username: 'danbennettuk',
  linkedin_username: 'danbennettuk',
  about_profile_image: 'assets/dan.jpg',
  about_content: `I manage creator relationships and day-to-day Partner Programme operations for PUBG WEST at KRAFTON. Working across Western markets, I coordinate campaigns and community events with creators, agencies and internal teams, and help Partners navigate requirements, resolve issues and get clear follow-up.

My community and technical support background shapes the way I work. Alongside the relationships, I improve the reporting, guidance and workflows that support delivery, turning campaign activity and feedback into practical next steps.`,
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
      category: 'current',
      dates: 'February 2024 to present',
      tenure: 'At KRAFTON since December 2020',
      description: `Manage creator relationships, campaign delivery and day-to-day Partner Programme operations for PUBG: BATTLEGROUNDS across Western markets. Previously EMEA Streamer Partnership Coordinator in 2022.`,
      clusters: [
        {
          title: 'Partner relationships and guidance',
          bullets: [
            'Act as the day-to-day contact for PUBG WEST Partners, clarifying programme requirements, campaign expectations and available support.',
            'Create and improve Partner-facing guidance, campaign instructions and support routes.',
          ],
        },
        {
          title: 'Campaigns and activations',
          bullets: [
            'Plan, launch and report on streaming and short-form creator campaigns with HQ, regional teams, Marketing, Media Ops, agencies and creators.',
            'Coordinate briefing, requirements, content submission, review, completion tracking and follow-up. Align Partner needs, assets, announcements and timelines with marketing, esports, product and community teams.',
          ],
        },
        {
          title: 'Reporting and data quality',
          bullets: [
            'Turn creator and campaign activity into performance reporting and recommendations, separating programme-controlled actions from wider product and market factors.',
            'Maintain operational trackers for Partner activity, campaign progress, completion and follow-up. Improve reporting workflows, data quality and automation.',
          ],
        },
        {
          title: 'Feedback and evidence-led reviews',
          bullets: [
            'Design feedback and escalation routes so creators can raise issues, provide evidence and receive follow-up.',
            'Lead cross-functional reviews that turn campaign, Partner and community evidence into prioritised actions for PUBG WEST.',
          ],
        },
      ],
    },
    {
      category: 'community',
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
      category: 'employment',
      company: 'APT Solutions',
      job_title: 'Service Desk Agent',
      dates: 'November 2019 - December 2020',
      description: `Supported membership software as one of three Service Desk Agents, working with customers from small taxi firms to large unions. Covered UK, Australian and New Zealand customers across three shift patterns, including nights.

- Investigated problems, identified causes and considered how to prevent recurrence
- Wrote clear incident reports and supported customers across multiple time zones`,
    },
    {
      category: 'employment',
      company: 'PriorsVLE',
      link: 'https://priorsvle.com',
      job_title: 'Director & VLE Technical Consultant',
      dates: '2017 - 2019',
      description: `Co-founded a Moodle technical support, hosting and development business. Managed client relationships and requirements, custom plugin development, site migrations and upgrades.

- Built internal systems to support day-to-day workflows and coordinated delivery with clients
- Provided first-line user support and managed invoicing and payment follow-up
- Ran social media marketing, sharing Moodle tips, news and service information`,
    },
    {
      category: 'employment',
      company: 'HowToMoodle',
      link: 'https://howtomoodle.com',
      job_title: 'Support Technician',
      dates: '2012 - 2018',
      description: `Supported Moodle and Totara customers through setup, upgrades, migrations and ongoing troubleshooting. Maintained client relationships and kept customers informed during incidents, including 24/7 hosting on-call cover.

- Automated manual tasks with scripts and provided first-line support through Helpspot
- Managed internal CentOS hosting with Apache, PHP, MySQL/MariaDB and DirectAdmin, plus client servers running CentOS, Ubuntu, Gentoo and Windows Server
- Monitored hosting with Icinga/Nagios, managed Git repositories for platform code, plugins and themes, and tested plugins using JIRA for issue tracking
- Rolled out a Windows Server 2012 domain controller and managed desktop and laptop troubleshooting, patching, hardware upgrades and asset tracking
- Documented technical changes to the hosting platform`,
    },
    {
      category: 'employment',
      company: 'Capita ITS (ex-i2Q Education)',
      job_title: 'Junior Technical Support',
      dates: '2008 - 2012',
      description: `Joined i2Q Education, later Capita ITS, supporting schools and colleges using Moodle. Handled annual data rollovers in their customised Moodle environment before the new academic year.

- Resolved platform questions and issues during term time
- Worked with developers on QA for OpenHive, writing test plans and automated test scripts`,
    },
    {
      category: 'community',
      company: 'EGX & epic.LAN',
      link: 'https://www.egx.net/egx/2019/watch-and-learn',
      job_title: 'Watch & Learn PUBG Professional',
      dates: '17th October - 20th October 2019',
      description: `epic.LAN brought me in to teach new players in their Watch & Learn area during EGX 2019. I spent four days running 30-minute sessions, teaching people the basics of PUBG, showing them how to improve, and giving console players a chance to try the PC version.

- Helped set up and pack down multiple EGX stages managed by epic.LAN
- Ran my own dedicated Watch & Learn station for all four days
- Developed teaching skills showing complete beginners the ropes
- Promoted the sessions on my own social media to drive interest`,
    },
    {
      category: 'community',
      company: 'Chicken4Charity - SpecialEffect',
      link: 'https://www.specialeffect.org.uk',
      job_title: 'PUBG Observer',
      dates: '26th July 2019',
      description: `Volunteered at SpecialEffect's Chicken4Charity 2019 PUBG tournament, featuring 20 teams from the UK games industry. The event raised over £14,000 to help disabled gamers play.

- Helped set up matches and managed in-game observer cameras to capture live action
- Supported broadcasts on Steam, Twitch and Facebook`,
    },
    {
      category: 'community',
      company: 'NovaFM',
      job_title: 'Volunteer Presenter / Producer',
      dates: '2012 - 2014',
      description: `Hosted and produced two weekly shows at Newport's community radio station. One covered new, upcoming and rarely heard artists; the other focused on dance, trance and UK hardcore.

- Wrote and produced hourly Friday and Saturday news bulletins
- Supported outside broadcasts at local festivals, including Newfest and The Pheztival`,
    },
  ];
}
