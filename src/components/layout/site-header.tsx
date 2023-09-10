import React from 'react';

import MainNav from '@/components/layout/main-nav';
import MobileNav from '@/components/layout/mobile-nav';
import ThemeToggle from '@/components/layout/theme-toggle';

import { siteConfig } from '@/config/site';

const SiteHeader = () => {
  return (
    <header className="sticky top-0 w-full border-b bg-background px-4 md:px-0">
      <div className="flex h-20 items-center justify-between">
        <MobileNav items={siteConfig.navItems} />
        <MainNav items={siteConfig.navItems} />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default SiteHeader;
