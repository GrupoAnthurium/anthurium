import type { TServiceItem } from "@/types";

interface MobileServiceItemProps {
  item: TServiceItem;
}

export const MobileServiceItem = ({ item }: MobileServiceItemProps) => {
  const { Icon, TITLE, DESCRIPTION } = item;

  return (
    <article className="w-full flex flex-col gap-2 h-28 p-4 bg-foreground rounded-lg border transition-all hover:border-blue-300">
      <div className="flex items-center gap-2">
        <Icon
          className="text-blue-400"
          size={18}
          aria-label={`Ícono de ${TITLE}`}
        />
        <h3 className="font-semibold">{TITLE}</h3>
      </div>
      <p className="text-sm">{DESCRIPTION}</p>
    </article>
  );
};
