import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Events',
      links: [
        {
          text: 'Upcoming Events',
          href: getPermalink('/future-events'),
        },
        {
          text: 'Past Events',
          href: getPermalink('/past-events'),
        },
      ],
    },
    {
      text: 'Journal',
      href: getPermalink('/journal'),
    },
    {
      text: 'Resources',
      href: getPermalink('/resources'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Join Us', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Navigate',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Upcoming Events', href: getPermalink('/future-events') },
        { text: 'Past Events', href: getPermalink('/past-events') },
        { text: 'Journal', href: getPermalink('/journal') },
        { text: 'Resources', href: getPermalink('/resources') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} Scholars for Human Rights. All rights reserved.
  `,
};
