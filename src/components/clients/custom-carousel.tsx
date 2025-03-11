"use client";

import Autoplay from "embla-carousel-autoplay";
import { ClientItem } from "@/components";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components";
import { TESTIMONIALS } from "@/constants";
import type { TTestimonial } from "@/types";

export const CustomCarousel = () => {
  const renderClientItem = (testimonial: TTestimonial, index: number) => {
    const { COMMENT, NAME, COMPANY } = testimonial;
    return <ClientItem key={index} comment={COMMENT} name={NAME} company={COMPANY} />;
  };

  return (
    <Carousel
      className="mb-16 select-none"
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
    >
      <CarouselContent>{TESTIMONIALS.map(renderClientItem)}</CarouselContent>
      <CarouselPrevious className="hidden 2xl:flex" />
      <CarouselNext className="hidden 2xl:flex" />
    </Carousel>
  );
};
