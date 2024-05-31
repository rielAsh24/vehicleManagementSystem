import Link from "next/link";
import {
  NavigationLink,
  NavigationMenu,
  NavigationMenuList,
  NavigationTrigger,
} from "../imports/NavClient";

export default function Navigation() {
  return (
    <NavigationMenu className="container h-20 border-b-[1px]">
      <Link className="text-3xl" href="/">
        VMS
      </Link>
      <NavigationMenuList>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationTrigger href="/transfer">Transfer</NavigationTrigger>
        <NavigationTrigger href="/driver">Drivers</NavigationTrigger>
        <NavigationTrigger href="/vehicle">Vehicles</NavigationTrigger>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
