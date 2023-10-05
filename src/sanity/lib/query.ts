import { groq } from 'next-sanity';
import { client } from './client';
import { searchParamType } from '@/types';

export async function getProfile() {
  const resp = client.fetch(
    groq`*[_type == "profile"][0]{
    _id,
    name,
    image,
    avatar {
      secure_url
    },
    title,
    company,
    company_url,
    short_desc,
    long_desc,
    email,
    github,
    linkedin,
    cv
  }`,
    { next: { revalidate: 0 } },
  );

  return resp;
}

export async function getArticles({ sort = 'date', order = 'desc', start = 0, end = 100 }: searchParamType = {}) {
  const resp = client.fetch(
    groq`*[_type == "articles"] | order(${sort === 'date' ? 'publishedAt' : sort} ${order}) [${start}...${end}]{
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    readingTime,
    view,
    description,
    content
  }`,
    { next: { revalidate: 0 } },
  );

  return resp;
}

export async function getArticleBySlug(slug: string) {
  const resp = client.fetch(
    groq`*[_type == "articles" && slug.current == "${slug}"][0]{
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    readingTime,
    view,
    description,
    markdown
  }`,
    { next: { revalidate: 0 } },
  );

  return resp;
}

export async function getProjects({ sort = 'date', order = 'desc', start = 0, end = 100 }: searchParamType = {}) {
  const resp = client.fetch(
    groq`*[_type == "projects"] | order(${sort} ${order}) [${start}...${end}]{
    _id,
    title,
    "slug": slug.current,
    date,
    description,
    previewUrl,
    feGithub,
    beGithub,
    tags[]->{name},
    "language": language->name,
    feTechs[]->{name},
    beTechs[]->{name},
    deployments[]->{name},
    images[] {
      secure_url
    },
  }`,
    { next: { revalidate: 0 } },
  );

  return resp;
}

export async function getProjectBySlug(slug: string) {
  const resp = client.fetch(
    groq`*[_type == "projects" && slug.current == "${slug}"][0]{
    _id,
    title,
    "slug": slug.current,
    date,
    description,
    previewUrl,
    feGithub,
    beGithub,
    tags[]->{name},
    "language": language->name,
    feTechs[]->{name},
    beTechs[]->{name},
    deployments[]->{name},
    images[] {
      secure_url
    },
  }`,
    { next: { revalidate: 0 } },
  );

  return resp;
}
