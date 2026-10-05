import {
  CapabilityGroup,
  Experience,
  ImpactHighlight,
  ResumeRole,
  SiteConfig,
} from './types';

export const impactHighlights: ImpactHighlight[] = [
  {
    title: 'Partner support',
    label: 'Partner operations',
    description:
      'I turn Partner requirements, repeat questions and evidence into guidance, a support route and a follow-up.',
  },
  {
    title: 'Campaign delivery',
    label: 'Campaigns',
    description:
      'I coordinate briefing, delivery, submission, review, completion tracking and reporting with creators, agencies and internal teams.',
  },
  {
    title: 'Repeat work',
    label: 'AI and tools',
    description:
      'I use AI on repeat tasks where the source is written down. A person reviews the result, and the handover can be picked up again.',
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'Creator and Partner operations',
    items: [
      'Creator relationships',
      'Campaigns from brief to report',
      'Support and escalation',
      'Work across teams',
    ],
  },
  {
    title: 'AI and tools',
    items: [
      'Research with the source linked',
      'CLI, MCP and REST tools',
      'Source notes and a human check',
      'Handovers another person can continue',
    ],
  },
  {
    title: 'Reporting and delivery',
    items: [
      'KPI and OKR reporting',
      'Data checks and workflow design',
      'Feedback and evidence reviews',
      'Community operations',
    ],
  },
];

export const resumeRoles: ResumeRole[] = [
  {
    company: 'KRAFTON',
    title: 'Associate Creator Partnerships Manager, PUBG West',
    dates: 'December 2020 to present',
    titles: [
      {
        title: 'EMEA Streamer Partnership Coordinator',
        dates: '2022',
      },
      {
        title: 'Associate Creator Partnerships Manager, PUBG West',
        dates: 'February 2024 to present',
      },
    ],
    summary:
      'I manage creator relationships, campaign delivery and day-to-day Partner Program operations for PUBG: BATTLEGROUNDS across Western markets.',
    bullets: [
      'I run Partner support across Western markets, and I turn requirements into guidance and a clear follow-up.',
      'I plan, launch and report on streaming and short-form creator campaigns with Partners, agencies, HQ, Marketing, Media Ops and regional teams.',
      'I coordinate the brief, content submission, review, completion tracking and the report.',
      'I keep shared trackers for Partner activity, campaign progress, completion and next actions.',
      'I set up feedback and escalation routes, and I lead reviews that turn Partner, campaign and community input into a priority list.',
      'I make repeat work easier to check, with clearer data, workflow changes, data checks and AI where it helps.',
    ],
  },
  {
    company: 'APT Solutions',
    title: 'Service Desk Agent',
    dates: 'November 2019 to December 2020',
    bullets: [
      'I supported membership software as one of three Service Desk Agents. Customers included small taxi firms and large unions, and not-for-profit membership organisations.',
      'Covered UK, Australian and New Zealand customers across three shift patterns, including nights.',
      'Investigated incidents, wrote customer-facing reports and supported customers across multiple time zones.',
    ],
  },
  {
    company: 'HowToMoodle',
    title: 'Support Technician',
    dates: '2012 to 2018',
    concurrentWith: 'PriorsVLE (2017 to 2019)',
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
    concurrentWith: 'HowToMoodle (2012 to 2018)',
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
      'I joined as a community member, then moderated, then led community operations for a 100k+ member subreddit.',
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
    'Creator partnerships and Partner Program operations for PUBG: BATTLEGROUNDS. I also keep the reporting, and I use AI on the repeat work.',
  email: 'dan@danbennett.me',
  website: 'https://danbennett.me',
  twitter_username: 'DanBennettUK',
  github_username: 'DanBennettUK',
  instagram_username: 'danbennettuk',
  linkedin_username: 'danbennettuk',
  about_profile_image: 'assets/dan.jpg',
  about_content: `I manage creator relationships and day-to-day Partner Program operations for PUBG WEST at KRAFTON. I work across Western markets. I coordinate campaigns and community events with creators, agencies and internal teams. I help Partners with requirements, issues and follow-up.

I came into this work from technical support and from PUBG community roles. That included a 100k+ member Reddit community, tournaments, live broadcasts and player feedback for the game team. I still write the reporting and the guidance, and I turn campaign feedback into the next step.

As well as the KRAFTON job, I build AI tools for research, documentation, coding and task coordination. I write down the inputs and the sources. A person reviews the result. I write the handover so the next person can check it and continue.`,
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
      dates: 'December 2020 to present',
      titles: [
        {
          title: 'EMEA Streamer Partnership Coordinator',
          dates: '2022',
        },
        {
          title: 'Associate Creator Partnerships Manager, PUBG West',
          dates: 'February 2024 to present',
        },
      ],
      description: `I joined KRAFTON in December 2020, on streamer and creator partnerships for the PUBG Partner Program on PUBG: BATTLEGROUNDS in the western region.

I manage creator relationships, campaign delivery and day-to-day Partner Program operations across Western markets. I write the guidance from the requirements. I keep the reporting up to date. I work with the other teams, and I turn the evidence into the next action.`,
      clusters: [
        {
          title: 'Partner relationships and support',
          bullets: [
            'I am the day-to-day contact for PUBG WEST Partners. I explain program requirements, campaign expectations and the support available. That covers communications, feedback, sentiment and campaign participation across the Partner Program.',
            'I write Partner guidance and campaign instructions from the questions that keep coming back. When an issue needs more than one team, I coordinate the follow-up.',
          ],
        },
        {
          title: 'Campaigns and activations',
          bullets: [
            'I plan, launch and report on streaming and short-form creator campaigns with HQ, regional teams, Marketing, Media Ops, agencies and creators.',
            'I coordinate the brief, the requirements, content submission, review, completion tracking and follow-up.',
            'I match Partner needs, assets, announcements and timelines with marketing, esports, product and community teams. That includes creator and community activations.',
          ],
        },
        {
          title: 'Reporting and data quality',
          bullets: [
            'I keep operational trackers so teams can see Partner activity, campaign progress, what is finished and what happens next.',
            'I turn creator and campaign activity into performance reports and recommendations. I separate what the program controlled from wider product and market factors.',
            'I improve the reporting workflows, the data checks and the automation, so the same operational checks are easier to run and review. I am moving manual checks onto tools that use our data and can take more of the load.',
          ],
        },
        {
          title: 'Feedback and evidence reviews',
          bullets: [
            'I set up routes for creators to raise an issue, send evidence and get a follow-up.',
            'I lead evidence reviews with the other teams. We turn campaign, Partner and community feedback into prioritised actions for PUBG WEST.',
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
      description: `I joined as a community member, then became a moderator, then led community operations for a 100k+ member subreddit. The community covered PLAYERUNKNOWN'S BATTLEGROUNDS on PC, Xbox One and PlayStation 4.

- Moderated the community, resolving conflicts and applying community standards fairly
- Turned player feedback into structured discussions with the game team through Reddit and Twitter
- Worked with PUBG Corp staff on community events, giveaways, bug reports and player feedback
- Gathered evidence for the Community Reporting team and submitted cases to the development team. Later joined that team, providing evidence of rule-breaking, including cheating
- Ran Community Custom Games, including tournaments, leaderboards, live streams and casting on Twitch. Some modes were created with the team and players
- Managed the PUBG Reddit Twitter account and built Discord bots in Python to support community operations`,
    },
    {
      category: 'employment',
      company: 'APT Solutions',
      job_title: 'Service Desk Agent',
      dates: 'November 2019 - December 2020',
      description: `I supported membership software as one of three Service Desk Agents. Customers included small taxi firms and large unions. The software is for not-for-profit membership organisations, including trade unions, professional institutions, sporting bodies and charities.

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
      concurrentWith: 'HowToMoodle (2012 to 2018)',
      description: `I co-founded a Moodle technical support, hosting and development business. We built plugins, migrated sites and ran upgrades. PriorsVLE is a virtual learning environment (VLE) business. We worked with schools, colleges and businesses, including sites owned by the customer or by third parties.

- Managed client relationships and took requirements through to the work we had agreed
- Built internal systems for the day-to-day work and used LEAN on those workflows
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
      concurrentWith: 'PriorsVLE (2017 to 2019)',
      description: `I supported Moodle and Totara customers with setup, upgrades, migrations and troubleshooting. I maintained client relationships and kept customers informed during incidents, including 24/7 hosting on-call cover. We agreed the timescales, and the work was done to them.

- Automated manual setup and support tasks with scripts and provided first-line support through Helpspot. Designed and implemented that automation for most of the manual setup work
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
      description: `I joined i2Q Education, later Capita ITS. I supported schools and colleges using Moodle, and I handled the annual data rollovers in their customised environment before the new academic year. i2Q Education was part of Synetrix.

- Resolved platform questions and issues during term time
- Worked with developers on QA for OpenHive, writing test plans and automated test scripts`,
    },
    {
      category: 'community',
      company: 'EGX & epic.LAN',
      link: 'https://www.egx.net/egx/2019/watch-and-learn',
      job_title: 'Watch & Learn PUBG Professional',
      dates: '17th October - 20th October 2019',
      description: `epic.LAN brought me in to teach new players in their Watch & Learn area during EGX 2019. I spent four days running 30-minute sessions, teaching people the basics of PUBG, showing them how to improve, and giving console players a chance to try the PC version. PUBG is PLAYERUNKNOWN'S BATTLEGROUNDS.

- Helped set up and pack down multiple EGX stages managed by epic.LAN
- Ran my own dedicated Watch & Learn station for all four days
- Taught complete beginners the basics
- Posted the sessions on my own social media`,
    },
    {
      category: 'community',
      company: 'Chicken4Charity - SpecialEffect',
      link: 'https://www.specialeffect.org.uk',
      job_title: 'PUBG Observer',
      dates: '26th July 2019',
      description: `I volunteered at SpecialEffect's Chicken4Charity 2019 PUBG tournament. It had 20 teams from the UK games industry. The event raised over £14,000 to help disabled gamers play.

- Helped set up matches and managed in-game observer cameras to capture live action
- Supported broadcasts on Steam, Twitch and Facebook`,
    },
    {
      category: 'community',
      company: 'NovaFM',
      job_title: 'Volunteer Presenter / Producer',
      dates: '2012 - 2014',
      description: `I hosted and produced two weekly shows at Newport's community radio station. One covered new, upcoming and rarely heard artists. The other focused on dance, trance and UK hardcore.

- Wrote and produced hourly Friday and Saturday news bulletins
- Supported outside broadcasts at local festivals, including Newfest and The Pheztival, in 2012 and 2013`,
    },
  ];
}
