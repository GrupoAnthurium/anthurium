"use client";

import { useMediaQuery } from "@/hooks";
import { DesktopServices, MobileServices } from "@/components";

export const Services = () => {
  const isMobile = useMediaQuery(1280);

  return isMobile ? <MobileServices /> : <DesktopServices />;
};
