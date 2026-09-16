import {
  CapabilityGroup,
  Experience,
  ImpactHighlight,
  PublicProject,
  ResumeRole,
  SiteConfig,
} from './types';

export const impactHighlights: ImpactHighlight[] = [
  {
    title: 'Make Partner support clearer',
    label: 'Partner operations',
    description:
      'Turn requirements, recurring questions and evidence into practical guidance, support routes and follow-up that Partners can act on.',
  },
  {
    title: 'Make campaign progress visible',
    label: 'Campaign delivery',
    description:
      'Coordinate briefing, delivery, submission, review, completion tracking and reporting across creators, agencies and internal teams.',
  },
  {
    title: 'Improve the system around the work',
    label: 'AI and operational systems',
    description:
      'Move repeatable work towards clearer data flows, source-grounded AI support, human review and recoverable handovers.',
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'Creator and Partner operations',
    items: [
      'Relationship management',
      'Campaign lifecycle ownership',
      'Support and escalation',
      'Cross-functional coordination',
    ],
  },
  {
    title: 'AI and systems practice',
    items: [
      'Source-grounded research',
      'CLI, MCP and REST tool integration',
      'Provenance and human review',
      'Recoverable task handovers',
    ],
  },
  {
    title: 'Reporting and delivery',
    items: [
      'KPI and OKR reporting',
      'Data quality and workflow design',
      'Feedback and evidence reviews',
      'Community operations',
    ],
  },
];

export const publicProjects: PublicProject[] = [
  {
    name: 'Open Second Brain',
    label: 'Open-source memory system',
    href: 'https://github.com/DanBennettUK/open-second-brain',
    description:
      'Built and maintain an Obsidian-native memory layer for AI agents, using plain Markdown, deterministic CLI and MCP tools, provenance, lifecycle controls and cross-runtime integrations.',
    bullets: [
      'Keeps memory, preferences and evidence inspectable, versionable and owned by the person using the system.',
      'Treats source identity, trust, scoped access and recoverable writes as part of the product rather than as afterthoughts.',
    ],
  },
  {
    name: 'Hermes Todo',
    label: 'Open-source operational tooling',
    href: 'https://github.com/DanBennettUK/hermes-todo',
    description:
      'Designed a shared task board for Hermes Desktop and agents, with SQLite as the authority and a namespaced CLI and REST surface for agent-writable work.',
    bullets: [
      'Durable handovers carry the brief, next action, closure condition, artefacts and waiting context into the next work session.',
      'Revision checks, append-only history and explicit completion evidence make automation safer to operate and easier to audit.',
    ],
  },
  {
    name: 'Voice Note to MIDI',
    label: 'Machine-learning project',
    href: 'https://github.com/DanBennettUK/voice-note-to-midi',
    description:
      'Built a local audio pipeline that turns humming and voice notes into quantised MIDI using harmonic/percussive separation, Spotify Basic Pitch, key detection and post-processing.',
    bullets: [
      'Combines key-aware correction, harmonic pruning, legato merging and configurable timing grids.',
      'Published as a usable CLI with documented setup, workflow and limitations.',
    ],
  },
];

export const resumeRoles: ResumeRole[] = [
  {
    company: 'KRAFTON',
    title: 'Associate Creator Partnerships Manager, PUBG West',
    dates: 'February 2024 to present',
    summary:
      'Manage creator relationships, campaign delivery and day-to-day Partner Program operations for PUBG: BATTLEGROUNDS across Western markets.',
    bullets: [
      'Operate Partner support across Western markets, translating requirements into usable guidance and clear follow-up.',
      'Plan, launch and report on streaming and short-form creator campaigns with Partners, agencies, HQ, Marketing, Media Ops and regional teams.',
      'Coordinate briefing, content submission, review, completion tracking and reporting across the full campaign lifecycle.',
      'Maintain shared operational views and reporting workflows for Partner activity, campaign progress, completion and next actions.',
      'Design feedback and escalation routes and lead evidence reviews that turn Partner, campaign and community input into prioritised actions.',
      'Improve repeatable work through clearer data flows, workflow design, data quality checks and applied AI support.',
    ],
  },
  {
    company: 'HowToMoodle',
    title: 'Support Technician',
    dates: '2012 to 2018',
    bullets: [
      'Supported Moodle and Totara customers through setup, upgrades, migrations and troubleshooting, including 24/7 hosting on-call cover.',
      'Managed Linux hosting with Apache, PHP, MySQL/MariaDB and monitoring, and supported customer servers across Linux and Windows environments.',
      'Debugged application issues in PHP and MySQL, tested plugins with JIRA, managed Git repositories and documented platform changes.',
      'Rolled out a Windows Server 2012 domain controller and managed company devices, patching, upgrades and asset tracking.',
    ],
  },
  {
    company: 'PriorsVLE',
    title: 'Director & VLE Technical Consultant',
    dates: '2017 to 2019',
    bullets: [
      'Co-founded a Moodle technical support, hosting and development business delivering plugin development, migrations and upgrades.',
      'Managed client relationships, requirements, internal workflows, support, invoicing and service communications.',
    ],
  },
  {
    company: 'PUBG Reddit (r/PUBATTLEGROUNDS)',
    title: 'Volunteer Community Manager & Community Games Host',
    dates: '2018 to December 2020',
    bullets: [
      'Progressed from community member to moderator and wider community operations lead for a 100k+ member subreddit.',
      'Ran moderation, player feedback, community events, custom games, tournaments, live streams and Discord bot support in Python.',
    ],
  },
  {
    company: 'Capita ITS (ex-i2Q Education)',
    title: 'Junior Technical Support',
    dates: '2008 to 2012',
    bullets: [
      'Supported schools and colleges using Moodle and worked with developers on QA for OpenHive through test plans and automated test scripts.',
    ],
  },
];

// Default config based on the original _config.yml
const defaultConfig: SiteConfig = {
  name: 'Dan Bennett',
  title: 'Associate Creator Partnerships Manager, PUBG West',
  tagline:
    'Creator partnerships and Partner Program operations for PUBG: BATTLEGROUNDS, supported by practical reporting, workflow design and applied AI systems.',
  email: 'dan@danbennett.me',
  website: 'https://danbennett.me',
  twitter_username: 'DanBennettUK',
  github_username: 'DanBennettUK',
  instagram_username: 'danbennettuk',
  linkedin_username: 'danbennettuk',
  about_profile_image: 'assets/dan.jpg',
  about_content: `I manage creator relationships and day-to-day Partner Program operations for PUBG WEST at KRAFTON. Working across Western markets, I coordinate campaigns and community events with creators, agencies and internal teams, and help Partners navigate requirements, resolve issues and get clear follow-up.

My community and technical support background shapes the way I work. Alongside relationships and delivery, I improve the reporting, guidance and workflows that support the work, turning campaign activity and feedback into practical next steps.

Alongside my role, I build practical AI and operational systems for research, documentation, coding and task coordination. I am interested in the useful layer around the model: clear inputs, reliable sources, safe handovers, human review and work that can be inspected after it is done.`,
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
      description: `Manage creator relationships, campaign delivery and day-to-day Partner Program operations for PUBG: BATTLEGROUNDS across Western markets. The work combines Partner support with the operating systems behind delivery: translating requirements into practical guidance, coordinating cross-functional work, maintaining reliable reporting, and turning evidence into next actions. Previously EMEA Streamer Partnership Coordinator in 2022.`,
      clusters: [
        {
          title: 'Partner relationships and support',
          bullets: [
            'Act as the day-to-day contact for PUBG WEST Partners, clarifying program requirements, campaign expectations and available support.',
            'Translate recurring questions and requirements into Partner-facing guidance, campaign instructions and clear support routes, and coordinate follow-up when issues depend on multiple teams.',
          ],
        },
        {
          title: 'Campaigns and activations',
          bullets: [
            'Plan, launch and report on streaming and short-form creator campaigns with HQ, regional teams, Marketing, Media Ops, agencies and creators.',
            'Coordinate briefing, requirements, content submission, review, completion tracking and follow-up across the full campaign lifecycle.',
            'Align Partner needs, assets, announcements and timelines across marketing, esports, product and community teams, including creator and community activations.',
          ],
        },
        {
          title: 'Reporting and data quality',
          bullets: [
            'Maintain operational trackers that give teams a shared view of Partner activity, campaign progress, completion and next actions.',
            'Turn creator and campaign activity into performance reporting and recommendations, separating program-controlled actions from wider product and market factors.',
            'Improve reporting workflows, data quality and automation so repeatable operational checks are easier to maintain and review.',
          ],
        },
        {
          title: 'Feedback and evidence-led reviews',
          bullets: [
            'Design practical feedback and escalation routes so creators can raise issues, provide evidence and receive follow-up.',
            'Lead cross-functional evidence reviews that turn campaign, Partner and community feedback into prioritised actions for PUBG WEST.',
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

- Moderated the community, resolving conflicts and applying community standards fairly
- Turned player feedback into structured discussions with the game team through Reddit and Twitter
- Worked with PUBG Corp staff on community events, giveaways, bug reports and player feedback
- Gathered evidence for the Community Reporting team and submitted cases to the development team
- Ran Community Custom Games, including tournaments, leaderboards, live streams and casting on Twitch
- Managed the PUBG Reddit Twitter account and built Discord bots in Python to support community operations`,
    },
    {
      category: 'employment',
      company: 'APT Solutions',
      job_title: 'Service Desk Agent',
      dates: 'November 2019 - December 2020',
      description: `Supported membership software as one of three Service Desk Agents, working with customers from small taxi firms to large unions.

- Covered UK, Australian and New Zealand customers across three shift patterns, including nights
- Investigated incidents, identified causes and considered how to prevent recurrence
- Wrote clear customer-facing incident reports and supported customers across multiple time zones`,
    },
    {
      category: 'employment',
      company: 'PriorsVLE',
      link: 'https://priorsvle.com',
      job_title: 'Director & VLE Technical Consultant',
      dates: '2017 - 2019',
      description: `Co-founded a Moodle technical support, hosting and development business, delivering custom plugin development, site migrations and upgrades.

- Managed client relationships and captured requirements through to agreed delivery
- Built internal systems to support efficient day-to-day workflows and applied LEAN process thinking
- Provided first-line support for client users and coordinated technical follow-up
- Managed invoicing and payment follow-up
- Ran social media marketing, sharing Moodle tips, news and service information`,
    },
    {
      category: 'employment',
      company: 'HowToMoodle',
      link: 'https://howtomoodle.com',
      job_title: 'Support Technician',
      dates: '2012 - 2018',
      description: `Supported Moodle and Totara customers through setup, upgrades, migrations and ongoing troubleshooting. Maintained client relationships and kept customers informed during incidents, including 24/7 hosting on-call cover.

- Automated manual setup and support tasks with scripts and provided first-line support through Helpspot
- Provided Moodle/Totara administrator and technical server support for customer sites hosted in-house or by third parties
- Managed internal CentOS hosting (versions 5, 6 and 7) with Apache, PHP, MySQL/MariaDB and DirectAdmin, plus client servers running CentOS, Ubuntu, Gentoo and Windows Server with HTTPD, Apache2 and Nginx
- Monitored sites and servers with Icinga/Nagios and kept customers informed when issues affected service
- Debugged Moodle/Totara application issues in PHP and MySQL, raised issues against the Moodle/Totara Tracker and tested plugins with JIRA
- Managed Git repositories for Moodle/Totara code, custom plugins and themes, and documented technical changes to the hosting platform
- Rolled out a Windows Server 2012 domain controller and managed company desktops and laptops, including troubleshooting, patching, hardware/software upgrades and asset tracking`,
    },
    {
      category: 'employment',
      company: 'Capita ITS (ex-i2Q Education)',
      job_title: 'Junior Technical Support',
      dates: '2008 - 2012',
      description: `Joined i2Q Education, later Capita ITS, supporting schools and colleges using Moodle and handling annual data rollovers in their customised environment before the new academic year.

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
