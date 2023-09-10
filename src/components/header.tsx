import React from 'react';

import { format } from 'date-fns';

import { Icons } from '@/components/icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { siteConfig } from '@/config/site';

const Header = () => {
  const renderIcon = (icon: keyof typeof Icons) => {
    const Icon = Icons[icon];
    return <Icon className="h-5 w-5" />;
  };

  const links = siteConfig.headerLinks;

  return (
    <div>
      <div className="mb-2 text-xl font-bold">Hi, Happy {format(new Date(), 'EEEE')}!</div>
      <div className="mb-3 text-3xl font-bold">
        I&apos;m <span className="text-primary">Dicky Muhamad R.</span>
      </div>
      <p className="mb-4">
        My work is to create, execute, and improve code. It&apos;s as simple as that. Do you want more details? I can
        craft amazing things and turn any vision into reality. So, how can I help you?
      </p>
      <div className="">
        {links.map(({ icon, link, text }) => (
          <TooltipProvider key={text}>
            <Tooltip>
              <TooltipTrigger className="mr-3">
                <a href={link} target="_blank">
                  {renderIcon(icon)}
                </a>
              </TooltipTrigger>
              <TooltipContent align="center" sideOffset={5}>
                <p>{text}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default Header;
