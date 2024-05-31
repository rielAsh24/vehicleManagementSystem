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
  NavigationMenuViewport
} from "../ui/navigation-menu";
// import Logo from "../Logo";

const navigationTriggerStyle: string = navigationMenuTriggerStyle();

function NavigationLink({
  href,
  children
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

// function NavLogo() {
//   return (
//     <Link href="/" className="size-fit">
//       <Logo />
//     </Link>
//   );
// }

export {
  // NavLogo,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationLink,
  NavigationMenuViewport
};
