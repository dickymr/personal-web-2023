import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import { Card, CardContent } from '@/components/ui/card';

export type CardArticleProps = {
  title: string;
  slug: string;
  description: string;
  date: string;
};

const CardArticle = ({ slug, title, description, date }: CardArticleProps) => {
  return (
    <Link key={slug} href={`articles/${slug}`}>
      <Card className="mb-5 rounded-lg shadow-none">
        <CardContent className="px-5 py-4">
          <div className="mb-1 text-xs text-foreground/70">{format(new Date(date), 'MMMM d, yyyy')}</div>
          <h2 className="mb-1 text-lg font-semibold">{title}</h2>
          <p className="truncate text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardArticle;
