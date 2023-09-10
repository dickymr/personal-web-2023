'use client';

import React from 'react';
import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      className="hover:bg-transparent"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Icons.sun className="h-5 w-5 dark:hidden" />
      <Icons.moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
