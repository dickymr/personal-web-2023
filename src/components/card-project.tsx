import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export type CardProjectProps = {
  title: string;
  slug: string;
  description: string;
  tags: { name: string }[];
  thumbnail: string;
};

const CardProject = ({ slug, thumbnail, tags, title, description }: CardProjectProps) => {
  return (
    <Link key={slug} className="mb-7  w-full md:w-[48%]" href={`projects/${slug}`}>
      <Card className="h-full rounded-lg shadow-none">
        <CardContent className="px-5 py-5">
          <div className="relative mb-5 h-48 w-full">
            <Image className="rounded object-cover" src={thumbnail} alt="image" fill />
          </div>
          <h2 className="mb-1 truncate text-lg font-semibold leading-6">{title}</h2>
          <div className="mb-2">
            {tags.map((tag) => (
              <Badge key={tag.name} className="mr-2 px-1 py-0 text-xs uppercase" variant="outline">
                {tag.name}
              </Badge>
            ))}
          </div>
          <p className="truncate">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardProject;
