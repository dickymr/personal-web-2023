import React from 'react';
import type { Metadata } from 'next';
import { PortableText } from '@portabletext/react';

import Breadcrumbs from '@/components/breadcrumbs';
import { RichTextComponents } from '@/components/rich-text-components';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { getProfile } from '@/sanity/lib/query';

import { Profile } from '@/types';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = async () => {
  const profile: Profile = await getProfile();

  return (
    <div className="py-7">
      <section className="mb-6">
        <Breadcrumbs
          items={[
            { path: '/', label: 'Home' },
            { path: '/', label: 'About' },
          ]}
        />
      </section>
      <section className="mb-10 flex flex-col items-center justify-center md:flex-row md:justify-start">
        <Avatar className="mb-5 mr-5 h-24 w-24 md:mb-0">
          <AvatarImage className="object-cover" src={profile.avatar.image} />
          <AvatarFallback>DMR</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="mb-1 text-center text-xl font-bold md:text-left">{profile.name}</h1>
          <p className="text-center text-sm md:text-left">
            {profile.title} at{' '}
            <a className="hover:underline" href={profile.company_url} target="_blank" rel="noreferrer">
              {profile.company}
            </a>
          </p>
        </div>
      </section>
      <section>
        <PortableText value={profile.long_desc} components={RichTextComponents} />
      </section>
    </div>
  );
};

export default AboutPage;
