import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col lg:flex-row gap-5">
        <NavigationMenuItem>
          <Link href={"/female"}>Female</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/male"}>Male</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/kids"}>Kids</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/products"}>All Products</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
