import Link from "next/link";
import { MENU_ITEMS } from "@/constants";

const renderListItem = (text: string) => (
  <li key={text}>
    <Link href="#services" className="p-2 transition-all hover:text-blue-400">
      {text}
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
