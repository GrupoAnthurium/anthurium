import Link from "next/link";
import { Anthurium } from "@/components/anthurium";
import { SOCIAL_LINKS, FOOTER_SECTIONS } from "@/constants";
import type { TSocialLink, TFooterSection } from "@/types";

const renderSocialLink = (item: TSocialLink) => {
  const { Icon, HREF, NAME } = item;

  return (
    <Link
      key={NAME}
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="text-softgrey transition-all hover:scale-110 hover:text-primary"
    >
      <Icon size={20} />
    </Link>
  );
};

const renderFooterSection = (section: TFooterSection) => {
  const { title, items } = section;

  return (
    <div key={title}>
      <h6>{title}</h6>
      <ul className="mt-4 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-softgrey">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="relative sm:py-18 container mx-auto px-6 mt-20 md:py-24 lg:px-16 lg:py-24 xl:px-20 py-8 before:absolute before:inset-0 before:-top-1 before:h-[1px] before:w-full before:bg-gradient-to-r before:from-transparent before:via-zinc-200 before:to-transparent">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8 xl:col-span-1">
          <Anthurium />
          <div className="flex space-x-5">
            {SOCIAL_LINKS.map(renderSocialLink)}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {FOOTER_SECTIONS.map(renderFooterSection)}
          </div>
        </div>
      </div>
      <div className="mt-32 flex justify-between border-t pt-8">
        <p className="text-xs">© Anthurium</p>
      </div>
    </footer>
  );
};
