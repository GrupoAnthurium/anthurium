import { DesktopServiceItem } from "@/components";
import { SERVICES_ITEMS } from "@/constants";

export const DesktopServices = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex gap-3">
        <div className="bg-foreground w-full h-96 p-4 border rounded-lg">
          <DesktopServiceItem item={SERVICES_ITEMS[0]} />
        </div>
        <div className="w-full flex gap-3">
          <div className="bg-foreground w-full h-96 p-4 border rounded-lg">
            <DesktopServiceItem item={SERVICES_ITEMS[1]} />
          </div>
          <div className="bg-foreground w-full h-96 p-4 border rounded-lg">
            <DesktopServiceItem item={SERVICES_ITEMS[2]} />
          </div>
        </div>
      </div>
      <div className="w-full flex gap-3">
        <div className="w-full bg-foreground h-96 p-4 border rounded-lg">
          <DesktopServiceItem item={SERVICES_ITEMS[3]} />
        </div>
        <div className="w-full bg-foreground h-96 p-4 border rounded-lg">
          <DesktopServiceItem item={SERVICES_ITEMS[4]} />
        </div>
        <div className="w-full bg-foreground h-96 p-4 border rounded-lg">
          <DesktopServiceItem item={SERVICES_ITEMS[5]} />
        </div>
      </div>
    </div>
  );
};
