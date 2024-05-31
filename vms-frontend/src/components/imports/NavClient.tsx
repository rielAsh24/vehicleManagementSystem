"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuContent,
} from "../ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navigationTriggerStyle: string = navigationMenuTriggerStyle();

function NavigationTrigger({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenuItem className={navigationTriggerStyle}>
      <Popover>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent className="grid max-w-32 grid-rows-2 gap-y-4">
          <NavigationMenuLink asChild active={isActive}>
            <Link href={href}>View</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild active={isActive}>
            <Link href={`${href}/add`}>Add</Link>
          </NavigationMenuLink>
        </PopoverContent>
      </Popover>
    </NavigationMenuItem>
  );
}

function NavigationLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        className={navigationTriggerStyle}
        asChild
        active={isActive}
      >
        <Link href={href}>{children}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export {
  // NavLogo,
  NavigationLink,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationTrigger,
};
