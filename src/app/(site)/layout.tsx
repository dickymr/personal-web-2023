import React from 'react';
import '@/styles/global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import Providers from '@/components/layout/providers';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';

import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  robots: { follow: true, index: true },
  description: siteConfig.description,
  keywords: ['Dicky', 'Dickymr', 'Dicky Muhamad R', 'Frontend Engineer', 'Frontend Web Developer'],
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://analytics.umami.is/script.js" data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID} />
      </head>
      <body className={(inter.className, 'bg-background')}>
        <NextTopLoader height={2} color="#6D28D9" showSpinner={false} />
        <Providers>
          <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col">
            <SiteHeader />
            <main className="grow px-4 py-4 md:px-0">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
