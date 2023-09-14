import React from 'react';

import { siteConfig } from '@/config/site';

export type LinkProps = {
  href: string;
  label: string;
  isExternal: boolean;
};

const Link = ({ href, label, isExternal }: LinkProps) => {
  return (
    <a
      className="text-end transition-colors hover:cursor-pointer hover:text-foreground"
      href={href}
      target={isExternal ? '_blank' : ''}
      rel="noreferrer">
      {label}
    </a>
  );
};

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  const links = siteConfig.footerLinks;

  return (
    <footer className="bg-red flex justify-between border-t px-4 pb-8 pt-4 text-sm text-foreground/70 md:px-0">
      <div>© {currentYear} Dicky Muhamad R</div>
      <div className="flex flex-col gap-2">
        {links.map(({ label, href = '', isExternal }) => (
          <Link key={label} label={label} href={href} isExternal={isExternal} />
        ))}
      </div>
    </footer>
  );
};

export default SiteFooter;
