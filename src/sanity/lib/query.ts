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
