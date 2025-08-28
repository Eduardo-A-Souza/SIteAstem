"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItem = {
  href: string;
  label: string;
  className?: string;
};

type SideBoxProps = {
  links: LinkItem[];
};

export function SideBox({ links }: SideBoxProps) {
  const pathName = usePathname();
  return (
    <div className="flex flex-col items-center max-w-90 w-full bg-backgroundBox gap-8 py-8 rounded-3xl mx-4 shadow-lg shadow-[#bbb]">
      {links.map((link, index) => {
        const isActive = () => {
          if (link.href == pathName) {
            return "text-white bg-bgSelected";
          } else return "hover:bg-bgSelected/10 border border-[#aaa]"
        };

        return (
          <Link
            key={index}
            href={link.href}
            className={`text-xl px-8 py-3 rounded-tr-xl rounded-bl-xl duration-300 ${
              link.className || ""
            } ${isActive()}`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
