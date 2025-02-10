import Link from "next/link";
import { MENU_ITEMS } from "@/constants";

const renderListItem = (item: string) => (
  <li key={item}>
    <Link
      href={`#${item.toLowerCase()}`}
      className="p-2 transition-all hover:text-primary"
    >
      {item}
    </Link>
  </li>
);

export const MenuList = () => {
  return (
    <ul className="space-x-1 font-semibold text-sm hidden sm:flex">
      {MENU_ITEMS.map(renderListItem)}
    </ul>
  );
};
