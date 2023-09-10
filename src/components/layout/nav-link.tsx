import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

interface NavLinkProps {
  children?: React.ReactNode;
  href: string;
  onClick?: () => void;
}

const NavLink = ({ children, href, onClick }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        'text-foreground/70 transition-colors hover:text-foreground',
        pathname.includes(href) && 'text-foreground',
      )}
      onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
