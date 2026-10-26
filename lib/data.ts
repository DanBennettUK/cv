import {
  CapabilityGroup,
  Experience,
  ImpactHighlight,
  PublicRepo,
  SiteConfig,
} from './types';

export const headline = 'Creator partnerships and Partner Program owner, PUBG West (KRAFTON)';

export const tagline = 'I own the PUBG Partner Program for PUBG West end to end: around 350 creators (around 280 active in a typical month) across EMEA, Türkiye, CIS, North America and Latin America, on PC and console, across Twitch, Kick, YouTube and TikTok. I partner directly with HQ on programme direction and approvals, and I build the tooling the programme runs on.';

export const metaDescription = 'Creator partnerships and Partner Program owner, PUBG West (KRAFTON). I own the PUBG Partner Program end to end.';

export const aiLine = 'I also build the automations behind the programme, including a weekly report cut from about three hours to about five minutes.';

export const aiMethod = 'Everything AI-assisted has a written source and a human check before it ships.';

export const location = 'Amsterdam, Netherlands';

export const workRights = 'Right to work in the UK and the Netherlands. Open to remote.';

export const earlierWork = 'At KRAFTON since December 2020. Earlier work includes APT Solutions, PriorsVLE, HowToMoodle and Capita ITS, plus community roles with PUBG Reddit, EGX, SpecialEffect and NovaFM.';

export const usEarlierLine = 'Earlier experience includes service desk work at APT Solutions, a director role at PriorsVLE, Moodle support, Linux hosting and scripting at HowToMoodle, and junior technical support at Capita ITS.';

export const usCommunityLine = 'Community work includes leading a 100k+ member PUBG subreddit, plus EGX, SpecialEffect and NovaFM.';

const kraftonBulletText = {
  scope: 'Own the programme end to end across EMEA, Türkiye, CIS, North America and Latin America: creator selection, rules and benefits, quarterly activity audits, campaigns and Partner support.',
  commercial: 'Handle Partner contracts and agreements, and scope and negotiate agency work.',
  people: 'Manage external agencies on campaigns alongside hands-on roster work, and supervise an intern building a consolidated team dashboard and reporting tool.',
  campaign: 'Planned and oversaw a 16-creator regional streaming campaign delivered with an external agency, and prepared its social posts and assets: delivered all 64 contracted streams, with viewership and watch hours well above target.',
  completion: 'Ran update campaigns on PC and console. On a recent PC streaming campaign, 89 of 93 participating Partners completed.',
  regions: 'Delivered creator campaigns across multiple regions and languages with HQ, regional, marketing and media teams, agencies and creators.',
  tooling: 'Built the tooling that runs the programme: an automated weekly Partner sentiment report (about three hours of work cut to about five minutes of review), an automated player-report intake and triage system that I designed and operate, and a Partner dashboard that replaced spreadsheet-based Partner management.',
} as const;

export type KraftonBulletId = keyof typeof kraftonBulletText;

export const kraftonBullets: Record<KraftonBulletId, string> = kraftonBulletText;

const kraftonClusters: { title: string; ids: KraftonBulletId[] }[] = [
  { title: 'Partner programme', ids: ['scope', 'commercial', 'people'] },
  { title: 'Campaigns', ids: ['campaign', 'completion', 'regions'] },
  { title: 'Tooling', ids: ['tooling'] },
];

export const impactHighlights: ImpactHighlight[] = [
  {
    title: 'Partner Program',
    description: 'Around 350 creators (around 280 active in a typical month) across EMEA, Türkiye, CIS, North America and Latin America, on PC and console, owned end to end.',
  },
  {
    title: 'Campaigns',
    description: 'Delivered all 64 contracted streams on a 16-creator regional campaign, with viewership and watch hours well above target.',
  },
  {
    title: 'Automation',
    description: 'Cut a weekly Partner report from about three hours of work to about five minutes of review.',
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'Creator and Partner operations',
    items: [
      'Partner programme design (selection, rules, benefits, audits)',
      'Contracts and agency negotiation',
      'Twitch, Kick, YouTube and TikTok',
    ],
  },
  {
    title: 'AI and tools',
    items: [
      'Workflow automation and AI tooling',
      'Python, PHP and MySQL, Git and Linux',
    ],
  },
];

export const publicRepos: PublicRepo[] = [
  {
    name: 'hermes-todo',
    url: 'https://github.com/DanBennettUK/hermes-todo',
    description: 'A shared task board for Hermes Desktop and Hermes agents.',
  },
  {
    name: 'icloud-calendar-mcp',
    url: 'https://github.com/DanBennettUK/icloud-calendar-mcp',
    description: 'An MCP server for iCloud Calendar, Reminders and Contacts.',
  },
  {
    name: 'icloud-email-mcp',
    url: 'https://github.com/DanBennettUK/icloud-email-mcp',
    description: 'An MCP server for iCloud email, calendar and contacts.',
  },
];

export const earlierEmploymentOrder = [
  'APT Solutions',
  'PriorsVLE',
  'HowToMoodle',
  'Capita ITS (ex-i2Q Education)',
];

export const communityOrder = [
  'PUBG Reddit (r/PUBATTLEGROUNDS)',
  'EGX & epic.LAN',
  'Chicken4Charity for SpecialEffect',
  'NovaFM',
];

const defaultConfig: SiteConfig = {
  name: 'Dan Bennett',
  title: headline,
  tagline,
  location,
  workRights,
  earlierWork,
  email: 'dan@danbennett.me',
  website: 'https://danbennett.me',
  githubUrl: 'https://github.com/DanBennettUK',
  linkedinUrl: 'https://www.linkedin.com/in/danbennettuk',
  about_profile_image: 'assets/dan.jpg',
  aboutParagraphs: [
    'I came into this work from technical support and from PUBG community roles. That included a 100k+ member Reddit community, tournaments, live broadcasts and player feedback for the game team.',
    `${aiLine} ${aiMethod}`,
  ],
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
          title: 'Associate Creator Partnerships Manager, PUBG West',
          dates: 'February 2024 to present',
        },
        {
          title: 'Streamer Partnership Coordinator, EMEA',
          dates: 'December 2020 to February 2024',
        },
      ],
      description: 'At KRAFTON since December 2020, on creator partnerships for the PUBG Partner Program.',
      clusters: kraftonClusters.map((cluster) => ({
        title: cluster.title,
        bullets: cluster.ids.map((id) => kraftonBullets[id]),
      })),
    },
    {
      category: 'community',
      company: 'PUBG Reddit (r/PUBATTLEGROUNDS)',
      link: 'https://www.reddit.com/r/pubattlegrounds',
      job_title: 'Volunteer Community Manager & Community Games Host',
      dates: '2018 to December 2020',
      summaryLines: [
        'Led community operations for a 100k+ member PUBG subreddit, from community member to moderator to community lead.',
        'Ran moderation, player feedback, community events, custom games, tournaments and live streams, and built Discord bots in Python.',
      ],
      description: `I joined as a community member, then became a moderator, then led community operations for a 100k+ member subreddit. The community covered PLAYERUNKNOWN'S BATTLEGROUNDS on PC, Xbox One and PlayStation 4.

- Moderated the community, resolving conflicts and applying community standards fairly
- Turned player feedback into structured discussions with the game team
- Worked with PUBG Corp staff on community events, giveaways, bug reports and player feedback
- Gathered evidence for the Community Reporting team and submitted cases to the development team. Later joined that team, providing evidence of rule-breaking, including cheating
- Ran Community Custom Games, including tournaments, leaderboards, live streams and casting on Twitch. Some modes were created with the team and players
- Built Discord bots in Python to support community operations`,
    },
    {
      category: 'employment',
      company: 'APT Solutions',
      job_title: 'Service Desk Agent',
      dates: 'November 2019 to December 2020',
      summaryLines: [
        'Supported membership software for customers in the UK, Australia and New Zealand.',
      ],
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
      dates: '2017 to 2019',
      concurrentWith: 'HowToMoodle (2012 to 2018)',
      summaryLines: [
        'Co-founded a Moodle technical support, hosting and development business, alongside HowToMoodle.',
      ],
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
      dates: '2012 to 2018',
      concurrentWith: 'PriorsVLE (2017 to 2019)',
      summaryLines: [
        'Supported Moodle and Totara customers and managed Linux hosting, including scripting, upgrades and on-call cover.',
      ],
      detailLines: [
        'Automated manual setup and support tasks with scripts, and supported Moodle and Totara customers through setup, upgrades, migrations and troubleshooting, including hosting on-call cover.',
        'Managed Linux hosting with Apache, PHP, MySQL and MariaDB, and debugged application issues in PHP and MySQL.',
      ],
      description: `I supported Moodle and Totara customers with setup, upgrades, migrations and troubleshooting. I maintained client relationships and kept customers informed during incidents, including 24/7 hosting on-call cover. We agreed the timescales, and the work was done to them.

- Automated manual setup and support tasks with scripts and provided first-line support through Helpspot. Designed and implemented that automation for most of the manual setup work
- Provided Moodle and Totara administrator and technical server support for customer sites hosted in-house or by third parties
- Managed internal CentOS hosting (versions 5, 6 and 7) with Apache, PHP, MySQL and MariaDB and DirectAdmin, plus client servers running CentOS, Ubuntu, Gentoo and Windows Server with HTTPD, Apache2 and Nginx
- Monitored sites and servers with Icinga and Nagios and kept customers informed when issues affected service
- Debugged Moodle and Totara application issues in PHP and MySQL, raised issues against the Moodle and Totara Tracker and tested plugins with JIRA
- Managed Git repositories for Moodle and Totara code, custom plugins and themes, and documented technical changes to the hosting platform
- Rolled out a Windows Server 2012 domain controller and managed company desktops and laptops, including troubleshooting, patching, hardware and software upgrades and asset tracking`,
    },
    {
      category: 'employment',
      company: 'Capita ITS (ex-i2Q Education)',
      job_title: 'Junior Technical Support',
      dates: '2008 to 2012',
      summaryLines: [
        'Supported schools and colleges using Moodle, and wrote test plans and automated test scripts.',
      ],
      description: `I joined i2Q Education, later Capita ITS. I supported schools and colleges using Moodle, and I handled the annual data rollovers in their customised environment before the new academic year. i2Q Education was part of Synetrix.

- Resolved platform questions and issues during term time
- Worked with developers on QA for OpenHive, writing test plans and automated test scripts`,
    },
    {
      category: 'community',
      company: 'EGX & epic.LAN',
      link: 'https://www.egx.net/egx/2019/watch-and-learn',
      job_title: 'Watch & Learn PUBG Professional',
      dates: '17 October to 20 October 2019',
      summaryLines: [
        'Taught new players the basics of PUBG.',
      ],
      description: `epic.LAN brought me in to teach new players in their Watch & Learn area during EGX 2019. I spent four days running 30-minute sessions, teaching people the basics of PUBG, showing them how to improve, and giving console players a chance to try the PC version. PUBG is PLAYERUNKNOWN'S BATTLEGROUNDS.

- Helped set up and pack down multiple EGX stages managed by epic.LAN
- Ran my own dedicated Watch & Learn station for all four days
- Taught complete beginners the basics`,
    },
    {
      category: 'community',
      company: 'Chicken4Charity for SpecialEffect',
      link: 'https://www.specialeffect.org.uk',
      job_title: 'PUBG Observer',
      dates: '26 July 2019',
      summaryLines: [
        'Helped run matches and in-game cameras for the tournament.',
      ],
      description: `I volunteered at SpecialEffect's Chicken4Charity 2019 PUBG tournament. It had 20 teams from the UK games industry.

- Helped set up matches and managed in-game observer cameras to capture live action
- Supported broadcasts on Steam, Twitch and Facebook`,
    },
    {
      category: 'community',
      company: 'NovaFM',
      job_title: 'Volunteer Presenter and Producer',
      dates: '2012 to 2014',
      summaryLines: [
        'Hosted and produced weekly shows at Newport community radio.',
      ],
      description: `I hosted and produced two weekly shows at Newport's community radio station. One covered new, upcoming and rarely heard artists. The other focused on dance, trance and UK hardcore.

- Wrote and produced hourly Friday and Saturday news bulletins
- Supported outside broadcasts at local festivals, including Newfest and The Pheztival, in 2012 and 2013`,
    },
  ];
}

export function experienceByCompany(company: string): Experience {
  const experience = getExperience().find((item) => item.company === company);
  if (!experience) {
    throw new Error(`Missing experience entry: ${company}`);
  }
  return experience;
}
