import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
  Button,
} from "@/components";
import { MENU_ITEMS } from "@/constants";
import { MenuIcon } from "lucide-react";

const renderButton = (item: string) => (
  <SheetClose asChild key={item}>
    <Link href="#">
      <Button
        className={`w-full ${item === "Contacto" ? "mt-2" : "justify-start"}`}
        variant={`${item === "Contacto" ? "outline" : "ghost"}`}
      >
        {item}
      </Button>
    </Link>
  </SheetClose>
);

export const MobileDrawer = () => {
  return (
    <Sheet>
      <SheetTitle className="hidden"></SheetTitle> {/*👈🏻required */}
      <SheetDescription className="hidden"></SheetDescription> {/*👈🏻required */}
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="[&_svg]:size-5">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="w-full mt-10">{MENU_ITEMS.map(renderButton)}</div>
      </SheetContent>
    </Sheet>
  );
};
