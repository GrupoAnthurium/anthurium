"use client";

import { twMerge } from "tailwind-merge";

interface AnthuriumProps {
  className?: string;
}

export const Anthurium = ({ className }: AnthuriumProps) => {
  const goUp = () => window.scrollTo({ top: 0 });

  return (
    <button
      className={twMerge("font-semibold text-lg", className)}
      onClick={goUp}
    >
      Anthurium Group
    </button>
  );
};
