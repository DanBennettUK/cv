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

- Act as the day-to-day point of contact for PUBG WEST Partners, helping them understand program requirements, campaign expectations and available support
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
      description: `One of three Service Desk Agents supporting customers with their membership software. Deals with everyone from tiny taxi firms to massive unions.

I work three different shift patterns including a night shift, so we can cover support for UK, Australian and New Zealand customers around the clock.

Beyond just answering tickets, I dig into problems properly - figuring out what went wrong, how it happened, and how to stop it happening again. I write incident reports that are honest and clear, not full of corporate waffle.

- Supporting membership software across multiple time zones
- Writing clear, honest incident reports
- Helping customers from small businesses to huge organisations`,
    },
    {
      company: 'PriorsVLE',
      link: 'https://priorsvle.com',
      job_title: 'Director & VLE Technical Consultant',
      dates: '2017 - 2019',
      description: `Co-founded PriorsVLE - we provided technical support, hosting, and development services around Moodle. Handled everything from custom plugin development to site migrations and upgrades.

My role covered a bit of everything. I was the main contact for clients, making sure I understood what they actually needed and that we delivered on time. Built internal systems to keep our processes efficient and running smooth.

Also handled first-line support for client users when they had issues, and managed invoicing to make sure we actually got paid. Ran the social media accounts too - advertising what we offered while posting Moodle tips and news to build our reputation.

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
      description: `Six years of making sure Moodle and Totara customers got the best support possible. Did everything from initial setup to ongoing support, and built solid relationships with clients so they knew what was happening and when.

The technical side was pretty broad. I handled site setups, upgrades, and migrations to the Moodle/Totara platform. Automated a load of manual tasks with scripts to save time. Answered support calls through our Helpspot system. Troubleshot platform issues and guided clients through their Moodle journey.

On the server side, I was on-call 24/7 to make sure hosting stayed up, keeping clients informed when things went wrong. Managed all our internal hosting servers running CentOS (versions 5, 6, and 7), Apache, PHP, MySQL/MariaDB with DirectAdmin. Also looked after external client servers running CentOS, Ubuntu, Gentoo and Windows Server with various web servers.

Monitored everything with Icinga (based on Nagios) so we knew about problems before customers did. Ran local Git repos for Moodle/Totara code, custom plugins and themes. Did QA testing on new plugins using JIRA to track issues.

When I wasn't doing Moodle stuff, I was managing the company's IT - rolled us out to a Windows Server 2012 Domain Controller, managed all the desktops and laptops (troubleshooting, patches, hardware upgrades, asset tracking), and wrote proper documentation for all the technical changes to our hosting platform.

- Site setups, upgrades and migrations
- Automating manual tasks with scripts
- First-line support via Helpspot
- Troubleshooting platform issues
- 24/7 on-call for server monitoring
- Internal hosting server management (CentOS, Apache, PHP, MySQL, DirectAdmin)
- External client server support (CentOS, Ubuntu, Gentoo, Windows Server)
- Nagios/Icinga monitoring
- Git repository management
- JIRA QA testing and bug tracking
- Windows Server 2012 domain rollout
- Desktop and laptop management
- Technical documentation`,
    },
    {
      company: 'Capita ITS (ex-i2Q Education)',
      job_title: 'Junior Technical Support',
      dates: '2008 - 2012',
      description: `Started at i2Q which later became Capita ITS. My main job was supporting schools and colleges with their Moodle platform - helping them with any issues or questions that came up during term time.

Every year I handled the school rollovers - getting all the data ready for the new academic year in their custom Moodle environment.

Also worked with the development team on QA testing for their new learning platform, OpenHive. Used automated scripting and wrote test plans to make sure things worked properly.

- Supporting schools and colleges with Moodle
- Yearly school rollovers before term starts
- QA testing for new learning platform development
- Writing test plans and automated testing scripts`,
    },
    {
      group: 'Selected community, events and media work',
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
      company: 'Chicken4Charity - SpecialEffect',
      link: 'https://www.specialeffect.org.uk',
      job_title: 'PUBG Observer',
      dates: '26th July 2019',
      description: `SpecialEffect run charity tournaments to raise money for helping disabled gamers play. Their Chicken4Charity 2019 event had 20 teams from across the UK games industry battling it out in PUBG.

I volunteered my time to help set up and observe each game. Used the in-game camera controls to capture the action as it happened, so the matches could be streamed and enjoyed on Steam, Twitch and Facebook. The event raised over £14,000 for the charity.

- Setting up and managing the observer cameras during matches
- Capturing gameplay for live streaming across multiple platforms
- Helping run a charity event that raised £14k+`,
    },
    {
      company: 'NovaFM',
      job_title: 'Volunteer Presenter / Producer',
      dates: '2012 - 2014',
      description: `Hosted two weekly shows at Newport's community radio station. One focused on new, upcoming and rarely heard artists. The other was all about dance, trance and UK hardcore music. I produced both shows myself every week.

Also wrote and produced the Friday and Saturday news bulletins for every hour. Helped with outside broadcasts at local festivals including Newfest and The Pheztival.

- Hosting two weekly specialist music shows
- Producing shows including news bulletins
- Outside broadcast support at festivals`,
    },
  ];
}
