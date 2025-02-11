import { FormCard, InfoCard } from "@/components/contact";

export const Contact = () => {
  return (
    <section id="contacto" className="pb-14 md:pb-24">
      <p className="px-1 py-2 font-medium text-sm text-softgrey">Contactanos</p>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <FormCard />
        <InfoCard />
      </div>
    </section>
  );
};
