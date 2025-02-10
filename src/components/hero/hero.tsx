import { Button } from "@/components";

export const Hero = () => {
  return (
    <header className="flex flex-col gap-2 container mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-2">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
          <span className="block bg-clip-text text-transparent bg-gradient-to-b from-softblack to-softblack/80 duration-500 animate-in fade-in-5 slide-in-from-bottom-2">
            Tu empresa al
          </span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#12415B] via-[#5AB39D] to-[#AAD9A0] duration-700 animate-in fade-in-5 slide-in-from-top-2 leading-tight">
            siguiente nivel
          </span>
        </h1>

        <p className="pt-2 my-3 text-sm text-balance font-light tracking-wide sm:mt-5 lg:mb-0 sm:text-base lg:text-lg">
          Cada proyecto merece una solución única y personalizada. Te
          acompañamos en cada paso para convertir desafíos en oportunidades de
          éxito. Juntos, hacemos realidad tus ideas.
        </p>

        <div className="flex gap-2 pt-2 my-3">
          <Button variant="custom" aria-label="Empezá tu proyecto con nosotros">
            Comenzar ahora
          </Button>
          <Button
            variant="outline"
            aria-label="Contactanos para mas información"
          >
            Contactanos
          </Button>
        </div>
      </div>
    </header>
  );
};
