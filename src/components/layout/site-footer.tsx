import React from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

import { siteConfig } from '@/config/site';

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();
  const repoUrl = siteConfig.links.repo;

  return (
    <footer className="flex h-24 items-center justify-between border-t px-4 md:px-0">
      <div>
        © {currentYear} <span className="text-primary">Dicky Muhamad R</span>
      </div>
      <Button className="hover:bg-transparent" variant="ghost" size="icon">
        <a href={repoUrl} target="_blank" rel="noreferrer">
          <Icons.github className="h-5 w-5 opacity-70 hover:opacity-100" />
        </a>
      </Button>
    </footer>
  );
};

export default SiteFooter;
