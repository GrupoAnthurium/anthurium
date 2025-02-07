import { DesktopServiceItem } from "@/components";
import { SERVICES_ITEMS } from "@/constants";

export const DesktopServices = () => {
  return (
    <section className="w-full flex flex-col gap-3">
      <div className="w-full flex gap-3">
        <DesktopServiceItem item={SERVICES_ITEMS[0]} />
        <div className="w-full flex gap-3">
          <DesktopServiceItem item={SERVICES_ITEMS[1]} />
          <DesktopServiceItem item={SERVICES_ITEMS[2]} />
        </div>
      </div>
      <div className="w-full flex gap-3">
        <DesktopServiceItem item={SERVICES_ITEMS[3]} />
        <DesktopServiceItem item={SERVICES_ITEMS[4]} />
        <DesktopServiceItem item={SERVICES_ITEMS[5]} />
      </div>
    </section>
  );
};
