'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { cn } from '@/lib/utils';

interface optionType {
  sort: 'date' | 'title';
  order: 'asc' | 'desc';
  label: string;
}

const sortOptions = [
  { sort: 'date', order: 'desc', label: 'Date: new to old' },
  { sort: 'date', order: 'asc', label: 'Date: old to new' },
  { sort: 'title', order: 'asc', label: 'Title: A to Z' },
  { sort: 'title', order: 'desc', label: 'Title: Z to A' },
] as optionType[];

const ButtonSort = () => {
  const createQueryString = (params: Record<string, string | number | null>) => {
    const newSearchParams = new URLSearchParams(searchParams?.toString());

    for (const [key, value] of Object.entries(params)) {
      if (value === null) {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, String(value));
      }
    }

    return newSearchParams.toString();
  };

  const handleOptionClick = (option: optionType) => {
    router.push(`${pathname}?${createQueryString({ sort: option.sort, order: option.order })}`, { scroll: false });
  };

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sort = searchParams.get('sort') ?? 'date';
  const order = searchParams.get('order') ?? 'desc';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          Sort <Icons.sort className="ml-2 h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="shadow-none">
        <DropdownMenuLabel className="text-xs">Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {sortOptions.map((option, i) => (
          <DropdownMenuItem
            key={i}
            className={cn('text-xs', sort === option.sort && order === option.order && 'font-bold')}
            onClick={() => handleOptionClick(option)}>
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ButtonSort;
