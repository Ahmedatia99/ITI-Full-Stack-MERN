"use client";
import Link from "../links";
import { Routes } from "@/constants/enums";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Login } from "../signin/index";

interface NavLink {
  id: string;
  title: string;
  href: Routes;
  onlyMobile?: boolean; // Optional property
}

function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  const links: NavLink[] = [
    { id: crypto.randomUUID(), title: "Menu", href: Routes.ROOT, onlyMobile: true },
    { id: crypto.randomUUID(), title: "About", href: Routes.ABOUT },
    { id: crypto.randomUUID(), title: "Contact", href: Routes.CONTACT, onlyMobile: false },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav>
      <div className={`${openMenu ? "mt-5" : "flex mt-5"}`}>
        <Button
          className="absolute top-6 right-10 z-50 lg:hidden"
          onClick={toggleMenu}
        >
          {openMenu ? <XIcon /> : <Menu />}
        </Button>
        <ul
          className={`relative lg:static ${
            openMenu
              ? "left-0 z-10 h-[calc(100vh-105px)]"
              : "-left-full hidden lg:flex"
          } top-0 pt-10 py-0 lg:p-0 bg-background transition-all duration-200 lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-center gap-10`}
        >
          {links.map((item) => (
            <li
              key={item.id}
              className={`block relative font-rufina font-bold text-2xl uppercase transition-colors hover:text-primary ${
                item.onlyMobile ? "lg:hidden" : ""
              } lg:leading-5 lg:hover:text-primary xl:px-12`}
            >
              <Link
                href={item.href}
                className="!px-8 !py-6 !tracking-widest !rounded-full hover:text-primary duration-200 transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <Login />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;