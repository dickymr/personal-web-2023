import { PortableTextBlock } from 'sanity';

export interface Nav {
  key: string;
  label: string;
  href: string;
}

export interface Link {
  key: string;
  label: string;
  icon: 'email' | 'github' | 'linkedin' | 'cv';
}

export interface searchParamType {
  sort?: string | undefined;
  order?: string | undefined;
  tags?: string | undefined;
  start?: number;
  end?: number;
}

export type Profile = {
  _id: string;
  name: string;
  avatar: {
    image: string;
  };
  title: string;
  company: string;
  company_url: string;
  short_desc: string;
  long_desc: PortableTextBlock[];
  email: string;
  github: string;
  linkedin: string;
  cv: string;
};

export type Article = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  readingTime: number;
  view: number;
  description: string;
  markdown: string;
};

export type Project = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  description: string;
  previewUrl: string;
  feGithub: string;
  beGithub: string;
  tags: { name: string }[];
  language: string;
  feTechs: { name: string }[];
  beTechs: { name: string }[];
  deployments: { name: string }[];
  images: { url: string }[];
};
