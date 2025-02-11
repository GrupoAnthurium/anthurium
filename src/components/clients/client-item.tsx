"use client";

import { useState } from "react";
import { CarouselItem } from "@/components/ui/carousel";

interface ClientItemProps {
  comment: string;
  name: string;
  company: string;
}

export const ClientItem = ({ comment, name, company }: ClientItemProps) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <CarouselItem
      className={`${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
      onMouseDown={() => setIsGrabbing(true)}
      onMouseUp={() => setIsGrabbing(false)}
      onMouseLeave={() => setIsGrabbing(false)}
    >
      <figure className="w-full bg-foreground p-4 border rounded-lg hover:border-primary transition">
        <blockquote className="text-lg mb-4">&quot;{comment}&quot;</blockquote>
        <figcaption className="text-right flex flex-col gap-1">
          <p className="font-semibold text-primary">{name}</p>
          <p className="text-softgrey">{company}</p>
        </figcaption>
      </figure>
    </CarouselItem>
  );
};
