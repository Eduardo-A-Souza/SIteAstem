"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type BoxTitle = string | "none";

type LinkItem = {
  href: string;
  label: string;
  className?: string;
};

type SideBoxProps = {
  links: LinkItem[];
  title?: BoxTitle;
};

export function SideBox({ links, title = "none" }: SideBoxProps) {
  const pathName = usePathname();
  const showTitle = () => {
    if (title != "none") {
      return <h3 className="text-3xl">{title}</h3>;
    } else {
      return "";
    }
  };
  console.log(showTitle());

  return (
    <div className="flex flex-col items-center mix-w-90 max-w-120 w-fit bg-backgroundBox gap-8 py-8 rounded-3xl px-12 shadow-lg shadow-[#bbb]">
      {showTitle()}
      {links.map((link, index) => {
        const isActive = () => {
          if (link.href == pathName) {
            return "text-white bg-bgSelected";
          } else return "hover:bg-bgSelected/10 ";
        };

        return (
          <Link
            key={index}
            href={link.href}
            className={`text-xl px-8 py-3 rounded-tr-xl rounded-bl-xl duration-300 min-w-70 ${
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
