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
    { icon: 'mail', link: 'mailto:dickymr.dev@gmail.com', text: 'Email' },
    { icon: 'github', link: 'https://github.com/dickymr', text: 'Github' },
    { icon: 'linkedin', link: 'https://linkedin.com/in/dickymr', text: 'LinkedIn' },
    { icon: 'fileText', link: 'https://dickymr.read.cv/', text: 'CV' },
  ],
};
