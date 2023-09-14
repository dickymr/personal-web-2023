import React from 'react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';

import Breadcrumbs from '@/components/breadcrumbs';
import { MarkdownComponents } from '@/components/markdown-components';

import { getArticleBySlug } from '@/sanity/lib/query';

import { Article } from '@/types';

interface ArticlePageProps {
  params: {
    slug: 'string';
  };
}

const ArticlePage = async ({ params: { slug } }: ArticlePageProps) => {
  const article: Article = await getArticleBySlug(slug);

  return (
    <div className="py-7">
      <section className="mb-6">
        <Breadcrumbs
          items={[
            { path: '/', label: 'Home' },
            { path: '/articles', label: 'Articles' },
            { path: '/', label: article.title },
          ]}
        />
      </section>
      <section className="mb-8">
        <h1 className="mb-2 text-2xl font-bold">{article.title}</h1>
        <p className="text-sm">
          {format(new Date(article.publishedAt), 'MMMM d, yyyy')}
          <span className="mx-2">•</span>
          {article.view} Views
          <span className="mx-2">•</span>
          {article.readingTime} min read
        </p>
      </section>
      <section>
        <ReactMarkdown components={MarkdownComponents}>{article.markdown}</ReactMarkdown>
      </section>
    </div>
  );
};

export default ArticlePage;
