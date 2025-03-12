"use client";

import { useMediaQuery } from "@/hooks";
import { MobileDrawer, MenuList, Anthurium } from "@/components";
import Image from "next/image";

export const Navbar = () => {
  const isMobile = useMediaQuery(640);

  return (
    <nav className="w-full flex items-center justify-center h-16 border-b bg-softwhite sticky top-0 z-50">
      <div className="max-w-7xl w-full flex items-center justify-between px-6">
        <div className="flex space-x-1">
          <Image src="/white-logo-no-bg.png" alt="Anthurium" className="h-10 w-10" width={1200} height={1200} />
          <Anthurium />
        </div>

        {isMobile ? <MobileDrawer /> : <MenuList />}
      </div>
    </nav>
  );
};
