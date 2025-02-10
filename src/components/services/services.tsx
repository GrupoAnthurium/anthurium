"use client";

import { useMediaQuery } from "@/hooks";
import { DesktopServices, MobileServices } from "@/components";

export const Services = () => {
  const isMobile = useMediaQuery(1280);

  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="pb-14 md:pb-24"
    >
      <p className="px-1 py-2 font-semibold text-sm text-softgrey">
        Nuestros servicios
      </p>
      {isMobile ? <MobileServices /> : <DesktopServices />}
    </section>
  );
};
