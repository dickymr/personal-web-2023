import React from 'react';

import Breadcrumbs from '@/components/breadcrumbs';
import CardArticle from '@/components/card-article';

import { getArticles } from '@/sanity/lib/query';

import { Article } from '@/types';

const ArticlesPage = async () => {
  const articles: Article[] = await getArticles();

  return (
    <div className="py-7">
      <section className="mb-6">
        <Breadcrumbs
          items={[
            { path: '/', label: 'Home' },
            { path: '/', label: 'Articles' },
          ]}
        />
      </section>
      <section className="mb-10">
        <h1 className="mb-2 text-xl font-bold">Articles</h1>
        <p>Posts related to some of the latest technologies</p>
      </section>
      <section>
        {articles.map((article) => (
          <CardArticle
            key={article.slug}
            slug={article.slug}
            description={article.description}
            title={article.title}
            date={article.publishedAt}
          />
        ))}
      </section>
    </div>
  );
};

export default ArticlesPage;
