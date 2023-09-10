'use client';

import React, { useState } from 'react';

import { Icons } from '@/components/icons';
import NavLink from '@/components/layout/nav-link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Nav } from '@/types';

interface MobileNavProps {
  items: Nav[];
}

const MobileNav = ({ items }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden">
          <Icons.menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <div className="flex flex-col space-y-10 px-7 pt-10">
          {items.map((nav: Nav) => (
            <NavLink key={nav.key} href={nav.href} setIsOpen={setIsOpen} onClick={() => setIsOpen(false)}>
              {nav.label}
            </NavLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
