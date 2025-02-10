import type { TServiceItem } from "@/types";

interface DesktopServiceItemProps {
  item: TServiceItem;
}

export const DesktopServiceItem = ({ item }: DesktopServiceItemProps) => {
  const { Icon, TITLE, DESCRIPTION } = item;

  return (
    <div className="bg-foreground w-full h-96 p-4 border rounded-lg hover:border-primary transition">
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Icon
            size={18}
            aria-label={`Icono de ${TITLE}`}
            className="text-primary"
          />
          <span className="font-semibold">{TITLE}</span>
        </div>
        <p
          className="text-sm text-softgrey"
          aria-describedby={`service-desc-${TITLE}`}
        >
          {DESCRIPTION}
        </p>
      </div>
    </div>
  );
};
