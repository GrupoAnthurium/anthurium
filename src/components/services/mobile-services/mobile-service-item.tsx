import type { TServiceItem } from "@/types";

interface MobileServiceItemProps {
  item: TServiceItem;
}

export const MobileServiceItem = ({ item }: MobileServiceItemProps) => {
  const { Icon, TITLE, DESCRIPTION } = item;

  return (
    <div className="w-full flex flex-col gap-2 h-28 p-4 bg-foreground rounded-lg border">
      <div className="flex items-center gap-2">
        <Icon className="text-blue-500" size={18} />
        <span className="font-semibold">{TITLE}</span>
      </div>
      <p className="text-sm">{DESCRIPTION}</p>
    </div>
  );
};
