import { Link } from '@/types';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Dicky Muhamad R',
  description:
    'This is the online portfolio and blog of me, where you can find my projects and my opinions on website development.',
  url: 'https://dickymr.com/',
  icons: {
    appleTouch: '',
    small: '',
    large: '',
  },
  navItems: [
    { key: 'projects', label: 'Projects', href: '/projects' },
    { key: 'articles', label: 'Articles', href: '/articles' },
    { key: 'about', label: 'About', href: '/about' },
  ],
  headerLinks: [
    { key: 'email', icon: 'email', label: 'Email' },
    { key: 'github', icon: 'github', label: 'Github' },
    { key: 'linkedin', icon: 'linkedin', label: 'LinkedIn' },
    { key: 'cv', icon: 'cv', label: 'CV' },
  ] as Link[],
  footerLinks: [
    { label: 'Source Code', href: 'https://github.com/dickymr/personal-web-2023', isExternal: true },
    { label: 'Analytics', href: process.env.NEXT_PUBLIC_SHARE_URL, isExternal: true },
  ],
};
