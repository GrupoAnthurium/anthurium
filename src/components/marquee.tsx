import { MARQUEE_ITEMS } from "@/constants";

const renderMarqueeItem = (item: string, index: number) => {
  return (
    <span key={index} className="text-2xl mx-4 sm:text-3xl">
      {item}
    </span>
  );
};

export const Marquee = () => {
  return (
    <section className="pb-14 md:pb-24">
      <div className="relative flex overflow-hidden max-w-2xl mx-auto">
        <div className="animate-marquee whitespace-nowrap text-softgrey">
          {MARQUEE_ITEMS.map(renderMarqueeItem)}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap text-softgrey">
          {MARQUEE_ITEMS.map(renderMarqueeItem)}
        </div>
      </div>

      <p className="w-full text-center text-sm mt-6 font-light tracking-wide text-softgrey lg:mt-8">
        Elegidos por empresas en crecimiento para impulsar su transformación
        digital.
      </p>
    </section>
  );
};
