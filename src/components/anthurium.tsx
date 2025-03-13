"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface AnthuriumProps {
  className?: string;
}

export const Anthurium = ({ className }: AnthuriumProps) => {
  const goUp = () => window.scrollTo({ top: 0 });

  return (
    <button
      className={twMerge("font-semibold text-lg flex items-center", className)}
      onClick={goUp}
    >
      <Image
        src="/white-logo-no-bg.png"
        alt="Anthurium"
        className="size-10 select-none"
        draggable="false"
        width={1200}
        height={1200}
      />
      Anthurium Group
    </button>
  );
};
