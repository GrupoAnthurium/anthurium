import { ClientLogo } from "@/components";
import { CustomCarousel } from "@/components/clients/custom-carousel";
import { CLIENT_LOGOS } from "@/constants";

const renderClientLogo = (logo: string, index: number) => {
  return <ClientLogo key={index} src={logo} alt={`Client logo ${index + 1}`} />;
};

export const Clients = () => {
  return (
    <section id="clientes" className="pb-14 md:pb-24">
      <p className="px-1 py-2 font-medium text-sm text-softgrey">
        Nuestros clientes
      </p>

      <CustomCarousel />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {CLIENT_LOGOS.map(renderClientLogo)}
      </div>
    </section>
  );
};
