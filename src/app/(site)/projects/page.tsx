import React from 'react';
import type { Metadata } from 'next';

import Breadcrumbs from '@/components/breadcrumbs';
import ButtonFilter from '@/components/btn-filter';
import ButtonSort from '@/components/btn-sort';
import CardProject from '@/components/card-project';

import { getProjects } from '@/sanity/lib/query';

import { Project } from '@/types';

export const metadata: Metadata = {
  title: 'Projects',
};

interface ProjectsPageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const ProjectsPage = async ({ searchParams }: ProjectsPageProps) => {
  const { sort, order } = searchParams;

  const projects: Project[] = await getProjects({ sort, order });

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
      <section className="mb-6">
        <h1 className="mb-2 text-xl font-bold">Projects</h1>
        <p>Here are a few projects I&apos;ve worked on recently</p>
      </section>
      <section className="mb-6 flex gap-2">
        <ButtonFilter />
        <ButtonSort />
      </section>
      <section className="flex flex-wrap justify-between">
        {projects.map(({ slug, images, title, tags, description }) => (
          <CardProject
            key={slug}
            slug={slug}
            thumbnail={images[0].secure_url}
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
