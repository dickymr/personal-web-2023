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
