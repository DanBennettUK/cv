import { SiteConfig, Experience } from './types';

// Default config based on the original _config.yml
const defaultConfig: SiteConfig = {
  name: 'Dan Bennett',
  title: 'Partner Program Manager - PUBG WEST at KRAFTON',
  email: 'dan@danbennett.me',
  website: 'https://danbennett.me',
  twitter_username: 'DanBennettUK',
  github_username: 'DanBennettUK',
  instagram_username: 'danbennettuk',
  linkedin_username: 'danbennettuk',
  about_profile_image: '/assets/dan.jpg',
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
      company: 'KRAFTON',
      link: 'https://www.krafton.com',
      job_title: 'Partner Program Manager - PUBG WEST',
      dates: '2022 - Present',
      quote: 'The games company behind PUBG: BATTLEGROUNDS.',
      description: `I work on the PUBG WEST partner program - basically handling creator partnerships and community stuff across Western markets.

- Working with creators, streamers, and content makers
- Helping run community events and tournaments
- Cross-team work with marketing, esports, and product teams
- Managing partner relationships and support`,
    },
    {
      company: 'PUBG Reddit (r/PUBATTLEGROUNDS)',
      link: 'https://www.reddit.com/r/pubattlegrounds',
      job_title: 'Volunteer Community Manager & Community Games Host',
      dates: '2018 - 2022',
      quote: "The biggest community for PLAYERUNKNOWN'S BATTLEGROUNDS on PC, Xbox and PlayStation.",
      description: `Started as a community member, got invited to join the mod team, ended up doing a lot more than just moderation.

The day-to-day involves keeping an eye on our 100k+ members - making sure people follow the rules, helping resolve conflicts between users, and generally keeping things civil. I deal with toxic behaviour quickly and fairly.

A big part of the job is helping the community get their voice heard by the developers. I work with the team to plan discussions on Reddit and Twitter, find ways for players to share feedback with PUBG Corp directly, and keep those conversations constructive rather than just angry rants.

I also run our Community Custom Games - basically fun tournaments with custom modes we invent ourselves. I host these, manage the leaderboards, and stream everything live on Twitch while casting the matches to make it entertaining for viewers.

On top of that, I work directly with PUBG Corp staff on subreddit stuff - coordinating community events, running giveaways, passing on bug reports and feedback. Recently joined their Community Reporting team to gather evidence on cheaters and send it straight to the devs so they can ban them quickly.

I also manage the PUBG Reddit Twitter account - posting relevant content, starting conversations, and generally keeping the community engaged.

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

Beyond just answering tickets, I dig into problems properly - figuring out what went wrong, how it happened, and how to stop it happening again. I write incident reports that are honest and clear, not full of corporate waffle.

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
      quote: "SpecialEffect's charity PUBG tournament - 20 teams from the UK games industry competing to raise money.",
      description: `SpecialEffect run charity tournaments to raise money for helping disabled gamers play. Their Chicken4Charity 2019 event had 20 teams from across the UK games industry battling it out in PUBG.

I volunteered my time to help set up and observe each game. Used the in-game camera controls to capture the action as it happened, so the matches could be streamed and enjoyed on Steam, Twitch and Facebook. The event raised over £14,000 for the charity.

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
      quote: 'End-to-end learning solutions for UK and European organisations - helping them create engaging learning experiences.',
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
      company: 'NovaFM',
      job_title: 'Volunteer Presenter / Producer',
      dates: '2012 - 2014',
      quote: "Newport's local community radio station.",
      description: `Hosted two weekly shows at Newport's community radio station. One focused on new, upcoming and rarely heard artists. The other was all about dance, trance and UK hardcore music. I produced both shows myself every week.

Also wrote and produced the Friday and Saturday news bulletins for every hour. Helped with outside broadcasts at local festivals including Newfest and The Pheztival.

- Hosting two weekly specialist music shows
- Producing shows including news bulletins
- Outside broadcast support at festivals`,
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
  ];
}
