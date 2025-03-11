import type { TServiceItem } from "@/types";

interface MobileServiceItemProps {
  item: TServiceItem;
}

export const MobileServiceItem = ({ item }: MobileServiceItemProps) => {
  const { Icon, TITLE, DESCRIPTION } = item;

  return (
    <article className="w-full flex flex-col gap-2 p-4 bg-foreground rounded-lg border transition-all hover:border-primary">
      <div className="flex items-center gap-2">
        <Icon
          size={18}
          aria-label={`Ícono de ${TITLE}`}
          className="text-primary"
        />
        <h3 className="font-semibold">{TITLE}</h3>
      </div>
      <p className="text-sm text-softgrey">{DESCRIPTION}</p>
    </article>
  );
};
