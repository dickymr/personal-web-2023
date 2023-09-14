import React from 'react';

import Breadcrumbs from '@/components/breadcrumbs';
import CardProject from '@/components/card-project';

import { getProjects } from '@/sanity/lib/query';

import { Project } from '@/types';

const ProjectsPage = async () => {
  const projects: Project[] = await getProjects();

  return (
    <div className="py-7">
      <section className="mb-6">
        <Breadcrumbs
          items={[
            { path: '/', label: 'Home' },
            { path: '/', label: 'Projects' },
          ]}
        />
      </section>
      <section className="mb-10">
        <h1 className="mb-2 text-xl font-bold">Projects</h1>
        <p>Here are a few projects I&apos;ve worked on recently</p>
      </section>
      <section className="flex flex-wrap justify-between">
        {projects.map(({ slug, images, title, tags, description }) => (
          <CardProject
            key={slug}
            slug={slug}
            thumbnail={images[0].url}
            title={title}
            tags={tags}
            description={description}
          />
        ))}
      </section>
    </div>
  );
};

export default ProjectsPage;
