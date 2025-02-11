import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/constants";
import type { TSocialLink } from "@/types";

const renderSocialLink = (item: TSocialLink) => {
  const { NAME, HREF, Icon } = item;

  return (
    <Link
      key={NAME}
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-softgrey transition-all hover:text-primary"
    >
      <Icon className="size-5" />
      <span>{NAME}</span>
    </Link>
  );
};

export const InfoCard = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-between bg-foreground p-4 border rounded-lg min-h-[405px]">
      <div className="w-full flex flex-col gap-2">
        <h3 className="text-md font-semibold mb-2 text-softgrey">
          Seguinos en redes sociales
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {SOCIAL_LINKS.map(renderSocialLink)}
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="text-md font-semibold mb-2 text-softgrey">Horario de atención</h4>
        <p className="text-sm text-softgrey">{CONTACT_INFO.WEEKDAYS}</p>
        <p className="text-sm text-softgrey">{CONTACT_INFO.WEEKENDS}</p>
      </div>

      <Separator />

      <div>
        <h4 className="text-md font-semibold mb-2 text-softgrey">Contacto directo</h4>
        <p className="text-sm text-softgrey">Email: {CONTACT_INFO.EMAIL}</p>
        <p className="text-sm text-softgrey">Teléfono: {CONTACT_INFO.PHONE}</p>
      </div>
    </div>
  );
};
