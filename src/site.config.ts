// One place for everything that identifies you. Edit here, not in the templates.

export const SITE = {
  name: 'J.A. Simmons V',
  handle: 'jasimmonsv',
  url: 'https://jasimmonsv.com',
  tagline: 'I build secure systems and high-performing teams.',
  description:
    'Essays and field notes from J.A. Simmons V on security, leadership, learning, radio and books.',
  // Security contact published in /.well-known/security.txt. Set this mailbox up before launch.
  securityEmail: 'security@jasimmonsv.com',
};

export type Social = {
  label: string;
  url: string;
  /** Shown in the sidebar. Everything with show: true appears on /about. */
  sidebar?: boolean;
  /** rel="me" for identity verification (Mastodon, GitHub, etc.). */
  me?: boolean;
  /** false hides the link everywhere. Twitter and Keybase are off pending your audit. */
  show?: boolean;
};

export const SOCIAL: Social[] = [
  { label: 'Mastodon', url: 'https://hachyderm.io/@jasimmonsv', sidebar: true, me: true },
  { label: 'GitHub', url: 'https://github.com/jasimmonsv', sidebar: true, me: true },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/jasimmonsv', sidebar: true, me: true },
  { label: 'GitLab', url: 'https://gitlab.com/jasimmonsv', me: true },
  { label: 'Strava', url: 'https://www.strava.com/athletes/jasimmonsv' },
  { label: 'Instagram', url: 'https://www.instagram.com/jasimmonsv/' },
  { label: 'Hardcover', url: 'https://hardcover.app/@jasimmonsv' },
  { label: 'Goodreads', url: 'https://www.goodreads.com/user/show/2784493-j-a' },
  // Audit before re-enabling: is anything still posted there that you want tied to this site?
  { label: 'Twitter', url: 'https://twitter.com/jasimmonsv', show: false },
  { label: 'Keybase', url: 'https://keybase.io/jasimmonsv', show: false },
];

export const NAV = [
  { label: 'Writing', href: '/writing/', collection: 'writing' },
  { label: 'Notes', href: '/notes/', collection: 'notes' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Readme', href: '/readme/' },
  { label: 'Library', href: '/library/' },
  { label: 'About', href: '/about/' },
] as const;
