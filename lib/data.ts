import { SiteConfig, Experience } from './types';

// Default config based on the original _config.yml
const defaultConfig: SiteConfig = {
  name: 'Dan Bennett',
  title: 'Partner Program Manager, PUBG WEST',
  tagline:
    'Creator partnerships, partner operations and community-led events across Western markets.',
  email: 'dan@danbennett.me',
  website: 'https://danbennett.me',
  twitter_username: 'DanBennettUK',
  github_username: 'DanBennettUK',
  instagram_username: 'danbennettuk',
  linkedin_username: 'danbennettuk',
  about_profile_image: 'assets/dan.jpg',
  about_content: `I manage the PUBG WEST Partner Program at KRAFTON, working with creators and community partners across Western markets. My work covers partner relationships, campaign and event delivery, cross-team coordination, support and program improvement.

I came into the role through years of PUBG community work, including a 100k+ member Reddit community, tournaments, live broadcasts and structured player feedback for the game team. I also bring a technical support background, which helps me turn messy operational problems into clear next steps.`,
  current_focus:
    'Partner relationships, campaign delivery, community events, cross-team operations, reporting and process improvement.',
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
      job_title: 'Partner Program Manager, PUBG WEST',
      dates: '2022 - Present',
      quote: 'The games company behind PUBG: BATTLEGROUNDS.',
      description: `Manage relationships with PUBG WEST Partners and creators across Western markets.

- Coordinate partner campaigns, community activations and events with marketing, esports, product and regional teams
- Turn Partner feedback and performance data into clear recommendations for internal teams
- Improve campaign guidance, support routes and operational workflows so Partners know what is expected and how to get help
- Handle partner issues and escalations with clear communication, documentation and follow-through`,
    },
    {
      company: 'PUBG Reddit (r/PUBATTLEGROUNDS)',
      link: 'https://www.reddit.com/r/pubattlegrounds',
      job_title: 'Volunteer Community Manager & Community Games Host',
      dates: '2018 - 2022',
      quote: "The biggest community for PLAYERUNKNOWN'S BATTLEGROUNDS on PC, Xbox and PlayStation.",
      description: `Started as a community member, got invited to join the mod team, ended up doing a lot more than just moderation.

The day-to-day involves keeping an eye on our 100k+ members - making sure people follow the rules, helping resolve conflicts between users, and generally keeping things civil. I deal with toxic behaviour quickly and fairly.

A big part of the job is turning player feedback into structured discussions with the game team - planning Reddit and Twitter conversations and giving players a direct channel to PUBG Corp, while keeping the conversation constructive.

I also run our Community Custom Games - fun tournaments with custom modes we invent ourselves. I host these, manage the leaderboards, and stream everything live on Twitch while casting the matches to make it entertaining for viewers.

On top of that, I work directly with PUBG Corp staff on subreddit stuff - coordinating community events, running giveaways, passing on bug reports and feedback. I also joined their Community Reporting team to gather evidence on cheaters and send it straight to the devs so they can ban them quickly, and I manage the PUBG Reddit Twitter account.

- Discord Community Management
- Subreddit moderation for 100k+ members
- Social media management
- PUBG Games Host & Observer
- Twitch casting and streaming
- Self-taught Python to build Discord bots`,
    },
    {
      company: 'APT Solutions',
      job_title: 'Service Desk Agent',
      dates: '2019 - 2022',
      quote: 'Membership software for unions, professional bodies, charities and sporting organisations - anywhere from 1,000 to 1.5 million members.',
      description: `One of three Service Desk Agents supporting customers with their membership software. Deals with everyone from tiny taxi firms to massive unions.

I work three different shift patterns including a night shift, so we can cover support for UK, Australian and New Zealand customers around the clock.

Beyond just answering tickets, I dig into problems properly - figuring out what went wrong, how it happened, and how to stop it happening again. I write incident reports that are honest and clear.

- Supporting membership software across multiple time zones
- Writing clear, honest incident reports
- Helping customers from small businesses to huge organisations`,
    },
    {
      company: 'EGX & epic.LAN',
      link: 'https://www.egx.net/egx/2019/watch-and-learn',
      job_title: 'Watch & Learn PUBG Professional',
      dates: '17th October - 20th October 2019',
      quote: "UK's biggest gaming show.",
      description: `epic.LAN brought me in to teach new players in their Watch & Learn area during EGX 2019. I spent four days running 30-minute sessions, teaching people the basics of PUBG and giving console players a chance to try the PC version.

- Ran my own dedicated Watch & Learn station for all four days
- Helped set up and pack down multiple EGX stages managed by epic.LAN
- Promoted the sessions on my own social media to drive interest`,
    },
    {
      company: 'Chicken4Charity - SpecialEffect',
      link: 'https://www.specialeffect.org.uk',
      job_title: 'PUBG Observer',
      dates: '26th July 2019',
      quote: "SpecialEffect's charity PUBG tournament - 20 teams from the UK games industry competing to raise money.",
      description: `SpecialEffect run charity tournaments to raise money for helping disabled gamers play. Their Chicken4Charity 2019 event had 20 teams from across the UK games industry battling it out in PUBG.

I volunteered to set up and observe each game, using the in-game camera controls to capture the action so the matches could be streamed on Steam, Twitch and Facebook. The event raised over £14,000 for the charity.

- Setting up and managing the observer cameras during matches
- Capturing gameplay for live streaming across multiple platforms
- Helping run a charity event that raised £14k+`,
    },
    {
      company: 'PriorsVLE',
      link: 'https://priorsvle.com',
      job_title: 'Director & VLE Technical Consultant',
      dates: '2017 - 2019',
      quote: 'VLE (Virtual Learning Environment) specialists with 15+ years combined experience supporting, managing and hosting Moodle sites for schools, colleges and businesses.',
      description: `Co-founded PriorsVLE - technical support, hosting and development services around Moodle, from custom plugin development to site migrations and upgrades.

I was the main contact for clients, making sure I understood what they needed and that we delivered on time. Built internal systems to keep processes efficient, handled first-line support, managed invoicing, and ran the social media accounts.

- Talking to clients to understand their requirements
- Building internal systems for efficient workflows
- First-line customer support
- Invoice management and chasing payments
- Social media marketing and content`,
    },
    {
      company: 'HowToMoodle',
      link: 'https://howtomoodle.com',
      job_title: 'Support Technician',
      dates: '2012 - 2018',
      quote: 'End-to-end learning solutions for UK and European organisations - helping them create engaging learning experiences.',
      description: `Six years supporting Moodle and Totara customers - from site setups, upgrades and migrations to day-to-day troubleshooting and long-term client relationships.

- Site setups, upgrades and migrations to the Moodle/Totara platform
- 24/7 on-call for hosting servers, monitored with Nagios/Icinga
- Managed internal hosting servers (CentOS, Apache, PHP, MySQL/MariaDB, DirectAdmin) and external client servers (CentOS, Ubuntu, Gentoo, Windows Server)
- QA testing of plugins using JIRA; managed Git repos for Moodle/Totara code and custom themes
- Company IT: Windows Server 2012 domain rollout, desktop and laptop management, technical documentation`,
    },
    {
      company: 'NovaFM',
      job_title: 'Volunteer Presenter / Producer',
      dates: '2012 - 2014',
      quote: "Newport's local community radio station.",
      description: `Hosted two weekly shows at Newport's community radio station - one for new and upcoming artists, one for dance, trance and UK hardcore music. Produced both shows myself every week, wrote and produced the weekend news bulletins, and helped with outside broadcasts at local festivals.

- Hosting two weekly specialist music shows
- Producing shows including news bulletins
- Outside broadcast support at festivals`,
    },
    {
      company: 'Capita ITS (ex-i2Q Education)',
      job_title: 'Junior Technical Support',
      dates: '2008 - 2012',
      description: `Started at i2Q which later became Capita ITS. My main job was supporting schools and colleges with their Moodle platform - helping with any issues or questions that came up during term time, and running the yearly school rollovers.

I also worked with the development team on QA testing for their new learning platform, OpenHive, using automated scripting and writing test plans.

- Supporting schools and colleges with Moodle
- Yearly school rollovers before term starts
- QA testing for new learning platform development
- Writing test plans and automated testing scripts`,
    },
  ];
}
