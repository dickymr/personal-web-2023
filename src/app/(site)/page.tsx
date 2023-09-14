import React from 'react';
import type { Metadata } from 'next';

import Header from '@/components/header';
import ListProjects from '@/components/list-projects';
import ListArticles from '@/components/list-articles';

export const metadata: Metadata = {
  title: 'Personal Website | Dicky Muhamad R',
};

const HomePage = () => {
  return (
    <div className="pt-7">
      <Header />
      <div className="my-12" />
      <ListProjects />
      <div className="my-12" />
      <ListArticles />
      <div className="my-12" />
    </div>
  );
};

export default HomePage;
