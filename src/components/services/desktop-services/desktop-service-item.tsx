import type { TServiceItem } from "@/types";

interface DesktopServiceItemProps {
  item: TServiceItem;
}

export const DesktopServiceItem = ({ item }: DesktopServiceItemProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <item.Icon className="text-blue-500" size={18} />
        <span className="font-semibold">{item.TITLE}</span>
      </div>
      <p className="text-sm">{item.DESCRIPTION}</p>
    </div>
  );
};
