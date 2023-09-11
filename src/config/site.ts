import { Link } from '@/types';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Dicky Muhamad R',
  description:
    'Dicky Muhamad R, an Associate Frontend Engineer at Garena Indonesia with 2 years of experience. Passionate about technology and building user-friendly web applications. Always learning and eager to take on new challenges.',
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
  links: {
    repo: 'https://github.com/dickymr/personal-web-2023',
  },
  headerLinks: [
    { key: 'email', icon: 'email', label: 'Email' },
    { key: 'github', icon: 'github', label: 'Github' },
    { key: 'linkedin', icon: 'linkedin', label: 'LinkedIn' },
    { key: 'cv', icon: 'cv', label: 'CV' },
  ] as Link[],
};
