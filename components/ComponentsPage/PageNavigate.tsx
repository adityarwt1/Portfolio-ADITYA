import React from 'react'
import { NavigationMenuItem } from '../ui/navigation-menu';
import { NavigationMenuLink } from '../ui/navigation-menu';
import Link from 'next/link';

interface PageNavigate {
  slug: string;
  title: string;
}
const PageNavigate: React.FC<PageNavigate> = ({ slug, title }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href={"/components/" + slug}>{title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default PageNavigate;