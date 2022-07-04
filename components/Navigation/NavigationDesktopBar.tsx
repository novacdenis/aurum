import {
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/svgs/logo.svg";
import React from "react";

import NavigationLinks from "./NavigationLinks";

export const NavigationDesktopBar: React.FC = () => {
  return (
    <header id="desktop-header" className="navigation bg-aurum-black px-8 py-4">
      <div className="navigation__inner flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center justify-center">
            <Image src={logo} alt="Aurum" />
          </a>
        </Link>

        <NavigationLinks />

        <div className="navigation__actions">
          <button className="navigation__action">
            <SearchIcon className="h-6 w-6" />
          </button>
          <button className="navigation__action">
            <HeartIcon className="h-6 w-6" />
          </button>
          <button className="navigation__action">
            <UserIcon className="h-6 w-6" />
          </button>
          <button className="navigation__action">
            <ShoppingBagIcon className="h-6 w-6" />
          </button>
          <button className="navigation__action">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
