// import {
//   SheetTrigger,
//   SheetContent,
//   Sheet,
//   SheetHeader,
// } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";

import Link from "next/link";
import {
  // NavLogo,
  NavigationMenu,
  NavigationMenuList,
  NavigationLink
} from "../imports/NavClient";
// import { NavMember, NavVisitor } from "./NavDefine";
import { Separator } from "../ui/separator";

// function MenuIcon() {
//   return (
//     <svg
//       className="h-6 w-6"
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="4" x2="20" y1="12" y2="12" />
//       <line x1="4" x2="20" y1="6" y2="6" />
//       <line x1="4" x2="20" y1="18" y2="18" />
//     </svg>
//   );
// }

export default function Navigation() {
  return (
    <>
      {/* <div className="flex w-full items-center justify-end max-lg:h-16 max-sm:px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="ghost">
              <MenuIcon />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <NavigationMenu className="flex-col items-start gap-y-8">
              <SheetHeader>
                <NavLogo />
              </SheetHeader>
              <NavigationMenuList className="flex-col items-start space-x-0">
                {isloggedIn ? <NavMember /> : <NavVisitor />}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div> */}
      <NavigationMenu className="hidden lg:flex lg:h-20 lg:justify-between">
        {/* <NavLogo /> */}
        <Link href="/">Logo</Link>
        <NavigationMenuList>
          <NavigationLink href="/">Home</NavigationLink>
          <NavigationLink href="/transfer">Transfer</NavigationLink>
          <NavigationLink href="/driver">Drivers</NavigationLink>
          <NavigationLink href="/vehicle">Vehicles</NavigationLink>
        </NavigationMenuList>
      </NavigationMenu>
      <Separator />
    </>
  );
}
