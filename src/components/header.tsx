import React from 'react';

import { format } from 'date-fns';

import { Icons } from '@/components/icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { getProfile } from '@/sanity/lib/query';

import { siteConfig } from '@/config/site';

import { Link, Profile } from '@/types';

const Header = async () => {
  const renderIcon = (icon: keyof typeof Icons) => {
    const Icon = Icons[icon];
    return <Icon className="h-5 w-5 opacity-70 hover:opacity-100" />;
  };

  const profile: Profile = await getProfile();

  const links = siteConfig.headerLinks;

  return (
    <section>
      <div className="mb-2 text-xl font-bold">Hi, Happy {format(new Date(), 'EEEE')}!</div>
      <div className="mb-3 text-3xl font-bold">
        I&apos;m <span className="text-primary">{profile.name}.</span>
      </div>
      <p className="mb-4">{profile.short_desc}</p>
      <div>
        {links.map((link: Link) => (
          <TooltipProvider key={link.key}>
            <Tooltip>
              <TooltipTrigger className="mr-3">
                <a href={profile['github']} target="_blank" rel="noreferrer">
                  {renderIcon(link.icon)}
                </a>
              </TooltipTrigger>
              <TooltipContent align="center" sideOffset={5}>
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </section>
  );
};

export default Header;
