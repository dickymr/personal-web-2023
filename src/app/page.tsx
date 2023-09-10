import React from 'react';

import Header from '@/components/header';
import ListProjects from '@/components/list-projects';
import ListArticles from '@/components/list-articles';

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
