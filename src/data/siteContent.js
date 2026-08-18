import { Service } from '../models/Service.js'
import { NavItem } from '../models/NavItem.js'

/**
 * Every piece of copy on the site lives here so you can edit words without
 * touching layout code. Text and voice are taken from the
 * "ooo marketing collective" Figma file (branding + content pages).
 */
export const brand = {
  name: 'ooo',
  subtitle: 'marketing collective',
  domain: 'ooomarketing.co',
  email: 'hello@ooomarketing.co', // placeholder — update to your real inbox
  location: 'New York',
  tagline: 'The marketing team behind your business.',
}

export const navItems = [
  new NavItem('What is ooo', '#about'),
  new NavItem('Services', '#services'),
  new NavItem('Consultation', '#consultation'),
  new NavItem('Contact', '#contact'),
]

export const hero = {
  eyebrow: 'there’s a kind of business we like',
  headline: 'the ones that know they can be doing more.',
  tagline: brand.tagline,
  ctaLabel: 'Schedule a consultation',
  ctaHref: '#contact',
}

export const about = {
  heading: 'what is ooo marketing collective ?',
  body:
    'ooo is a marketing collective for modern businesses. A group of ' +
    'specialists working across every essential pillar of marketing, assembled ' +
    'around your business to provide the expertise, consistency, and direction of ' +
    'a dedicated in-house team.',
  fitHeadline: 'If this is you.',
  fitSubhead: 'This is ooo marketing collective.',
}

export const servicesSection = {
  heading: 'what does the ooo team handle ?',
  services: [
    new Service('Brand & Marketing', 'Positioning, messaging, and campaigns that make the brand unmistakable.'),
    new Service('Social Media & Content', 'A consistent voice and content engine across every platform that matters.'),
    new Service('Paid Ads & Performance', 'Media buying and optimisation focused on measurable return.'),
    new Service('Creative Direction', 'Art direction and design that keeps every touchpoint on-brand.'),
    new Service('Web Design & AI Development', 'Modern sites and AI-powered tools built to convert.'),
  ],
}

export const consultation = {
  intro: 'Every business has their own goals, opportunities, and challenges.',
  invite: 'Let’s sit down.',
  body: 'Learn about your business, and explore where it could go next.',
  cta: 'Schedule a consultation with ooo.',
}

export const contact = {
  eyebrow: 'let’s talk business..',
  heading: 'Tell us about your business.',
  body: 'Share a few details and the ooo team will be in touch to arrange your consultation.',
  successTitle: 'Thank you.',
  successBody: 'Your message is with the ooo team — we’ll be in touch shortly.',
}

/**
 * Imagery pulled from the Figma content page (stored in public/images).
 * Referenced by absolute path so Vite serves them from /images/*.
 */
export const media = {
  workspace: '/images/workspace.jpg',       // editorial desk / workspace shot (no text)
  campaign: '/images/campaign.jpg',          // collage: "the one's that know they can be doing more"
  ifThisIsYou: '/images/if-this-is-you.jpg', // subway shot: "if this is you. this is ooo"
}
