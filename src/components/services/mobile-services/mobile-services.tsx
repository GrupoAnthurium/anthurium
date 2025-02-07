import { MobileServiceItem } from "@/components";
import { SERVICES_ITEMS } from "@/constants";

export const MobileServices = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      {SERVICES_ITEMS.map((item, index) => (
        <MobileServiceItem key={index} item={item} />
      ))}
    </div>
  );
};
