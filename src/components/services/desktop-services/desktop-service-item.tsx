import type { TServiceItem } from "@/types";

interface DesktopServiceItemProps {
  item: TServiceItem;
}

export const DesktopServiceItem = ({ item }: DesktopServiceItemProps) => {
  return (
    <div className="bg-foreground w-full h-96 p-4 border rounded-lg hover:border-blue-300 transition">
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <item.Icon size={18} aria-label={`Icono de ${item.TITLE}`} />
          <span className="font-semibold">{item.TITLE}</span>
        </div>
        <p className="text-sm text-softgrey" aria-describedby={`service-desc-${item.TITLE}`}>
          {item.DESCRIPTION}
        </p>
      </div>
    </div>
  );
};
