'use client'

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((open) => !open);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className={`flex flex-col lg:flex-row items-center xs:items-start gap-12 absolute lg:static left-0 z-[-1] lg:z-auto px-6 py-5 bg-white w-full lg:w-auto transition-all duration-500 ease-in ${open ? 'top-16 opacity-100' : 'top-[-300px] opacity-0 lg:opacity-100'} shadow-2xl lg:shadow-none`}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div
        className="inline-block lg:hidden cursor-pointer"
        onClick={handleMenu}
      >
        <Image src="/menu.svg" alt="menu" width={32} height={32} />
      </div>
    </nav>
  );
}
