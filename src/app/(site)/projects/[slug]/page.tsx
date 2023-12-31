import React from 'react';
import { format } from 'date-fns';

import Breadcrumbs from '@/components/breadcrumbs';
import Carousel from '@/components/carousel';
import { Icons } from '@/components/icons';
import { Badge } from '@/components/ui/badge';

import { getProjectBySlug } from '@/sanity/lib/query';

import { Project } from '@/types';

interface ProjectPageProps {
  params: {
    slug: 'string';
  };
}

export async function generateMetadata({ params: { slug } }: ProjectPageProps) {
  const project: Project = await getProjectBySlug(slug);

  return {
    title: project.title,
  };
}

const ProjectPage = async ({ params: { slug } }: ProjectPageProps) => {
  const project: Project = await getProjectBySlug(slug);

  return (
    <div className="py-7">
      <section className="mb-8">
        <Breadcrumbs
          items={[
            { path: '/', label: 'Home' },
            { path: '/projects', label: 'Projects' },
            { path: '/projects', label: project.title },
          ]}
        />
      </section>
      <section className="mb-12">
        <Carousel images={project.images} />
      </section>
      <section className="mb-10">
        <h1 className="mb-2 text-2xl font-bold">{project.title}</h1>
        <div className="mb-8">
          {project.tags.map((tag) => (
            <Badge key={tag.name} className="mr-1 px-1 py-0 text-xs uppercase" variant="outline">
              {tag.name}
            </Badge>
          ))}
          <span className="ml-1 mr-2">•</span>
          <span className="text-sm">{format(new Date(project.date), 'MMMM d, yyyy')}</span>
        </div>
        <p className="mb-8">{project.description}</p>

        {project.language && (
          <div className="mb-3 flex items-center">
            <div className="w-32">Prog. Language</div>
            <div className="mr-6">:</div>
            <div className="">
              <Badge className="mr-2 px-1 py-0" variant={'outline'}>
                {project.language}
              </Badge>
            </div>
          </div>
        )}

        {project.feTechs && (
          <div className="mb-3 flex">
            <div className="w-32">FE Techs</div>
            <div className="mr-6">:</div>
            <div className="flex flex-1 flex-wrap items-center pt-[0.35rem]">
              {project.feTechs.map((tech) => (
                <Badge key={tech.name} className="mb-2 mr-2 px-1 py-0" variant={'outline'}>
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {project.beTechs && (
          <div className="mb-3 flex items-center">
            <div className="w-32">BE Techs</div>
            <div className="mr-6">:</div>
            <div className="flex items-center">
              {project.beTechs.map((tech) => (
                <Badge key={tech.name} className="mr-2 px-1 py-0" variant={'outline'}>
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {project.deployments && (
          <div className="mb-3 flex items-center">
            <div className="w-32">Deployments</div>
            <div className="mr-6">:</div>
            <div className="flex items-center">
              {project.deployments.map((deployment) => (
                <Badge key={deployment.name} className="mr-2 px-1 py-0" variant={'outline'}>
                  {deployment.name}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {(project.feGithub || project.beGithub) && (
          <div className="mb-3 flex items-center">
            <div className="w-32">Repository</div>
            <div className="mr-6">:</div>
            <div className="flex items-center">
              {project.feGithub && (
                <a
                  className="mr-2 flex items-center hover:cursor-pointer hover:underline"
                  href={project.feGithub}
                  target="_blank"
                  rel="noreferrer"
                  data-umami-event={`Preview: ${project.feGithub}`}>
                  <Badge className="px-1 py-0" variant={'outline'}>
                    Frontend <Icons.external className="ml-1 h-3 w-3" />
                  </Badge>
                </a>
              )}
              {project.beGithub && (
                <a
                  className="flex items-center hover:cursor-pointer hover:underline"
                  href={project.beGithub}
                  target="_blank"
                  rel="noreferrer"
                  data-umami-event={`Preview: ${project.beGithub}`}>
                  <Badge className="px-1 py-0" variant={'outline'}>
                    Backend <Icons.external className="ml-1 h-3 w-3" />
                  </Badge>
                </a>
              )}
            </div>
          </div>
        )}
      </section>
      <section>
        {project.previewUrl && (
          <div className="flex">
            <a
              className="flex items-center text-lg font-semibold hover:cursor-pointer hover:underline"
              href={project.previewUrl}
              target="_blank"
              rel="noreferrer"
              data-umami-event={`Preview: ${project.previewUrl}`}>
              Preview <Icons.external className="ml-2 h-5 w-5" />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectPage;
