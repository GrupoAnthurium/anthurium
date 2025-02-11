import { MobileServiceItem } from "@/components";
import { SERVICES_ITEMS } from "@/constants";
import type { TServiceItem } from "@/types";

const renderMobileServiceItem = (item: TServiceItem, index: number) => {
  return <MobileServiceItem key={index} item={item} />;
};

export const MobileServices = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      {SERVICES_ITEMS.map(renderMobileServiceItem)}
    </div>
  );
};
