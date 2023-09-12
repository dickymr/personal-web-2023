import { groq } from 'next-sanity';
import { client } from './client';

export async function getProfile() {
  const resp = client.fetch(groq`*[_type == "profile"][0]{
    _id,
    name,
    avatar {
      "image": asset->url
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
  }`);

  return resp;
}

export async function getArticles(start = 0, end = 100) {
  const resp = client.fetch(groq`*[_type == "articles"] | order(publishedAt desc) [${start}...${end}]{
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    readingTime,
    view,
    description,
    content
  }`);

  return resp;
}

export async function getArticleBySlug(slug: string) {
  const resp = client.fetch(groq`*[_type == "articles" && slug.current == "${slug}"][0]{
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    readingTime,
    view,
    description,
    markdown
  }`);

  return resp;
}
