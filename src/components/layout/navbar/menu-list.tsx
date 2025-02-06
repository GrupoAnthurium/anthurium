import { MENU_ITEMS } from "@/constants";

const renderListItem = (text: string) => (
  <li key={text}>
    <a className="p-2 transition-all hover:text-blue-500" href="#">
      {text}
    </a>
  </li>
);

export const MenuList = () => {
  return (
    <ul className="flex space-x-1 font-semibold text-sm">
      {MENU_ITEMS.map(renderListItem)}
    </ul>
  );
};
