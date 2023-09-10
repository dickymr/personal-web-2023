import React from 'react';
import Link from 'next/link';

import { Icons } from '@/components/icons';

import { projects } from '@/lib/mocks';

const ListProjects = () => {
  return (
    <section>
      <div className="mb-4 flex justify-between">
        <h2 className="text-xl font-bold">List Projects</h2>
        <Link
          href="/projects"
          className="flex items-center text-sm text-foreground/70 transition-colors hover:text-foreground">
          View all projects <Icons.arrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      <div className="flex flex-col">
        {projects.map((project) => (
          <Link key={project.id} className="mb-3" href={`/projects/${project.slug}`}>
            <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
            <p className="truncate">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ListProjects;
