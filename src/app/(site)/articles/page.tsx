import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import { Card, CardContent } from '@/components/ui/card';

import { getArticles } from '@/sanity/lib/query';

import { Article } from '@/types';

const ArticlesPage = async () => {
  const articles: Article[] = await getArticles();

  return (
    <div className="py-7">
      <section className="mb-10">
        <h1 className="mb-2 text-xl font-bold">Articles</h1>
        <p>Posts related to some of the latest technologies</p>
      </section>
      <section>
        {articles.map((article) => (
          <Link key={article._id} href={`articles/${article.slug}`}>
            <Card className="mb-5 rounded-lg">
              <CardContent className="px-5 py-4">
                <div className="mb-1 text-xs text-foreground/70">
                  {format(new Date(article.publishedAt), 'MMMM d, yyyy')}
                </div>
                <h2 className="mb-1 text-lg font-semibold">{article.title}</h2>
                <p className="truncate text-sm">{article.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ArticlesPage;
