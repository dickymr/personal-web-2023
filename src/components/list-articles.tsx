import React from 'react';
import Link from 'next/link';

import { Icons } from '@/components/icons';

import { getArticles } from '@/sanity/lib/query';

import { Article } from '@/types';

const ListArticles = async () => {
  const articles: Article[] = await getArticles(0, 5);

  return (
    <section>
      <div className="mb-4 flex justify-between">
        <h2 className="text-xl font-bold">List Articles</h2>
        <Link
          href="/articles"
          className="flex items-center text-sm text-foreground/70 transition-colors hover:text-foreground">
          View all articles <Icons.arrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      <div className="flex flex-col">
        {articles.map((article) => (
          <Link key={article._id} className="mb-3" href={`/articles/${article.slug}`}>
            <h3 className="mb-1 text-lg font-semibold text-primary">{article.title}</h3>
            <p className="truncate text-sm">{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ListArticles;
