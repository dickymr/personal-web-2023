import React from 'react';
import Link from 'next/link';
import { Icons } from './icons';

export type CrumbItem = {
  label: React.ReactNode;
  path: string;
};

export type BreadcrumbsProps = {
  items: CrumbItem[];
};

export type BreadcrumbItemProps = {
  isHomeItem: boolean;
  isLastItem: boolean;
  crumb: CrumbItem;
};

const BreadcrumbItem = ({ crumb, isHomeItem, isLastItem }: BreadcrumbItemProps) => {
  if (isLastItem) {
    return <span className="truncate text-foreground/70">{crumb.label}</span>;
  }

  return (
    <>
      <Link href={crumb.path} className="text-primary hover:underline">
        {isHomeItem ? <Icons.home className="h-4 w-4 hover:border-b" strokeWidth={1.75} /> : crumb.label}
      </Link>
      <span>
        <Icons.chevronRight className="h-3 w-3" />
      </span>
    </>
  );
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      {items.map((crumb, i) => (
        <BreadcrumbItem key={i} crumb={crumb} isHomeItem={crumb.path === '/'} isLastItem={i === items.length - 1} />
      ))}
    </div>
  );
};

export default Breadcrumbs;
