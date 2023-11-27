"use client";

import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const ListItem = ({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={'py-2 px-3 rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none'}>
          <p>{title}</p>
          {children}
        </NavigationMenuLink>
      </Link>
    </>
  );
};

export default ListItem;
