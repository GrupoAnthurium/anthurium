"use client";

import Link from "next/link";
import { useMediaQuery } from "@/hooks";
import { MobileDrawer, MenuList } from "@/components";

export const Navbar = () => {
  const isMobile = useMediaQuery(640);

  return (
    <nav className="w-full flex items-center justify-center h-16 border-b bg-foreground sticky top-0 z-50">
      <div className="max-w-7xl w-full flex items-center justify-between px-6">
        <Link href="#" className="font-semibold text-lg">
          Anthurium
        </Link>

        {isMobile ? <MobileDrawer /> : <MenuList />}
      </div>
    </nav>
  );
};
