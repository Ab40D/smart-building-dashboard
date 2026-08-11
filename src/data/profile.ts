// Centralized profile / personal information
// Single source of truth for personal data — edit this to update the entire site.

export const profile = {
  name: 'Abdelkhalek Mammeri',
  firstName: 'Abdelkhalek',
  lastName: 'MAMMERI',
  title: 'Electronics Engineer',
  // Short headline used in the hero / meta tags
  tagline: 'Smart Buildings · Building Automation · Industrial IoT · Embedded Systems',
  // Slightly longer one-liner used on the hero
  heroLine:
    'I design and integrate the full chain — from sensors and microcontrollers to KNX, MQTT, edge infrastructure and the dashboards people actually use.',
  location: 'El Bayadh, Algeria',
  email: 'abdelkhalekmammeri@gmail.com',
  phone: '+213 669 31 84 80',
  // Path to the profile photo. Drop your file at public/images/profile.jpg
  // and this path will work as-is. While it's missing, a monogram placeholder is shown.
  photo: '/images/profile.jpg',
  // Short intro for the hero (1-2 sentences)
  shortIntro:
    'Electronics engineer working on smart buildings, building automation (BMS / KNX), industrial IoT and embedded systems. I build hardware, wire the protocols, and ship the software on top.',
  // Channel description (YouTube)
  youtubeBio:
    'Just a simple guy who prefers building over talking. I share what I learn — tech, ideas, real experiences. No trends, no noise. Just useful stuff.',
  links: {
    github: 'https://github.com/Ab40D',
    githubOrg: 'https://github.com/Ab40D?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/abdelkhalekmammeri/',
    youtube: 'https://www.youtube.com/@abdelkhalekmammeri',
    // Add your TikTok URL here when you're ready (leave empty string to hide it).
    tiktok: '',
  },
  summary: {
    intro:
      'Electronics engineer specializing in smart buildings, building automation (BMS / KNX), industrial IoT and embedded systems. I design, build and integrate the full chain — from sensors and microcontrollers to KNX bus devices, MQTT messaging, edge/server infrastructure and web dashboards.',
    profile:
      'My work sits at the intersection of electronics, automation and software: hardware prototypes (Arduino, ESP32), industrial and building protocols (KNX, MQTT), automation platforms (Node-RED, Home Assistant) and modern web front-ends (React, TypeScript).',
    closing:
      'Currently completing a Licence in Industrial Equipment Electronics (graduating June 2026), with a final-year Smart Room project graded 19.5/20 and an industrial internship at SAEGD in SCADA and automation environments.',
  },
  // "Now" / current focus band on the homepage
  now: [
    { label: 'Building', value: 'Smart Building & Room Dashboard (React + TypeScript)' },
    { label: 'Learning', value: 'Industrial automation patterns and SCADA integration' },
    { label: 'Studying', value: 'Licence in Industrial Equipment Electronics — graduating June 2026' },
    { label: 'Open to', value: 'Internships · graduate programs · junior engineering roles' },
  ],
}
