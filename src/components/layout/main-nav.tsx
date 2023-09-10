'use client';

import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

import NavLink from '@/components/layout/nav-link';

import { Nav } from '@/types';

export interface MainNavProps {
  items: Nav[];
}

const MainNav = ({ items }: MainNavProps) => {
  return (
    <div className="flex w-full items-center justify-center md:mr-10 md:justify-between">
      <Link className="w-28 text-center md:text-left" href="/">
        <Typewriter
          options={{
            wrapperClassName: 'text-xl font-bold text-primary',
            strings: ['Dickymr.'],
            autoStart: true,
            loop: true,
          }}
        />
        <span className="sr-only">Home</span>
      </Link>
      <div className="hidden space-x-7 md:block">
        {items.map((nav: Nav) => (
          <NavLink key={nav.key} href={nav.href}>
            {nav.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MainNav;
