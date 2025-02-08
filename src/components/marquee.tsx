export const Marquee = () => {
  return (
    <div className="pb-14 md:pb-24">
      <div className="relative flex overflow-hidden max-w-2xl mx-auto">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-2xl mx-4 sm:text-3xl">Marquee Item 1</span>
          <span className="text-2xl mx-4 sm:text-3xl">Marquee Item 2</span>
          <span className="text-2xl mx-4 sm:text-3xl">Marquee Item 3</span>
          <span className="text-2xl mx-4 sm:text-3xl">Marquee Item 4</span>
          <span className="text-2xl mx-4 sm:text-3xl">Marquee Item 5</span>
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
          <span className="text-2xl mx-4 sm:text-3xl">Marquee Item 1</span>
          <span className="text-2xl mx-4 sm:text-3xl">Marquee Item 2</span>
          <span className="text-2xl mx-4 sm:text-3xl">Marquee Item 3</span>
          <span className="text-2xl mx-4 sm:text-3xl">Marquee Item 4</span>
          <span className="text-2xl mx-4 sm:text-3xl">Marquee Item 5</span>
        </div>
      </div>

      <p className="w-full text-center text-sm mt-6 lg:mt-8">
        Elegida por empresas en crecimiento para impulsar su transformación
        digital.
      </p>
    </div>
  );
};
