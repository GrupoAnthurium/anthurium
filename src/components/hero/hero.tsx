import { Button } from "@/components";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-2 container mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-2">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl">
          <span className="block">Tu empresa al</span>
          <span className="block text-blue-400">siguiente nivel</span>
        </h1>
        <p className="pt-2 my-3 text-sm text-balance font-medium sm:mt-5 lg:mb-0 sm:text-base lg:text-lg">
          Cada proyecto merece una solución única y personalizada. Te
          acompañamos en cada paso para convertir desafíos en oportunidades de
          éxito. Juntos, hacemos realidad tus ideas.
        </p>

        <div className="flex gap-2 pt-2 my-3">
          <Button variant="custom" aria-label="Comenzar ahora">
            Comenzar ahora
          </Button>
          <Button variant="outline" aria-label="Contactanos">
            Contactanos
          </Button>
        </div>
      </div>
    </div>
  );
};
