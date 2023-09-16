'use client';

import React from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const ButtonFilter = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          Filter <Icons.filter className="ml-2 h-3 w-3" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mb-4">
          <SheetTitle className="mb-4 mt-2">Filters</SheetTitle>
          <Separator className="mb-4" />
        </SheetHeader>
        <div className="flex h-[77.5%] flex-1 flex-col"></div>
        <Separator className="mb-4 md:mb-8" />
        <SheetFooter className="">
          <Button className="w-full" variant="outline">
            Clear Filters
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ButtonFilter;
