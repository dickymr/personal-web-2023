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
      className="text-center transition-colors hover:cursor-pointer hover:text-foreground md:text-end"
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
    <footer className="bg-red flex flex-col-reverse border-t px-4 pb-8 pt-4 text-sm text-foreground/70 md:flex-row md:justify-between md:px-0">
      <div className="text-center md:text-left">© {currentYear} Dicky Muhamad R</div>
      <div className="mb-4 flex flex-col gap-2 md:mb-0">
        {links.map(({ label, href = '', isExternal }) => (
          <Link key={label} label={label} href={href} isExternal={isExternal} />
        ))}
      </div>
    </footer>
  );
};

export default SiteFooter;
