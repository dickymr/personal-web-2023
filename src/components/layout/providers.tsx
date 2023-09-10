'use client';

import React from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      {children}
    </NextThemesProvider>
  );
};

export default Providers;
