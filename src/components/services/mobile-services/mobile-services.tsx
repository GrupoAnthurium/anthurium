import { SERVICES_ITEMS } from "@/constants";

export const MobileServices = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      {SERVICES_ITEMS.map(({ TITLE, DESCRIPTION, Icon }, index) => (
        <div
          key={index}
          className="w-full flex flex-col gap-2 h-28 p-4 bg-foreground rounded-lg border"
        >
          <div className="flex items-center gap-2">
            <Icon className="text-blue-500" size={18} />
            <span className="font-semibold">{TITLE}</span>
          </div>
          <p className="text-sm">{DESCRIPTION}</p>
        </div>
      ))}
    </div>
  );
};
