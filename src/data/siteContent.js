import { Service } from '../models/Service.js'
import { NavItem } from '../models/NavItem.js'

/**
 * Every piece of copy on the site lives here so you can edit words without
 * touching layout code. Text is taken from the AVE. Figma file.
 */
export const brand = {
  name: 'AVE.',
  subtitle: 'The Avenue',
  domain: 'thisistheave.com',
  email: 'hello@thisistheave.com', // update to your real inbox
  location: 'New York',
  tagline: 'The Marketing Team Behind Your Business.',
}

export const navItems = [
  new NavItem('What is AVE.', '#about'),
  new NavItem('Services', '#services'),
  new NavItem('Consultation', '#consultation'),
  new NavItem('Contact', '#contact'),
]

export const hero = {
  eyebrow: 'Let’s Talk Business..',
  headline: 'This is the Avenue.',
  tagline: brand.tagline,
  ctaLabel: 'Schedule a consultation',
  ctaHref: '#contact',
}

export const about = {
  heading: 'What is AVE. Marketing Agency ?',
  body:
    'AVE. is a traditional marketing team for modern businesses. A collective of ' +
    'specialists working across every essential pillar of marketing, assembled ' +
    'around your business to provide the expertise, consistency, and direction of ' +
    'a dedicated in-house team.',
  fitHeadline: 'If this is you.',
  fitSubhead: 'This is the Avenue.',
}

export const servicesSection = {
  heading: 'What does the AVE. Team Handle ?',
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
  cta: 'Schedule a consultation with AVE.',
}

export const contact = {
  eyebrow: 'Let’s Talk Business..',
  heading: 'Tell us about your business.',
  body: 'Share a few details and the AVE. team will be in touch to arrange your consultation.',
  successTitle: 'Thank you.',
  successBody: 'Your message is with the AVE. team — we’ll be in touch shortly.',
}
