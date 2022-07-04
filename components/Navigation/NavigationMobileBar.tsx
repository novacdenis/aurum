import { MenuIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/svgs/logo.svg";
import React from "react";

import NavigationSidebar from "./NavigationSidebar";

export const NavigationMobileBar: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <header id="mobile-header" className="navigation bg-aurum-black py-5 px-4">
        <div className="navigation__inner flex items-center justify-between">
          <button className="navigation__action" onClick={() => setVisible(!visible)}>
            <MenuIcon className="h-6 w-6" />
          </button>
          <Link href="/">
            <a className="flex items-center justify-center">
              <Image src={logo} alt="Aurum" width={96} />
            </a>
          </Link>
          <button className="navigation__action">
            <ShoppingBagIcon className="h-6 w-6" />
          </button>
        </div>
      </header>
      <NavigationSidebar visible={visible} setVisible={setVisible} />
    </>
  );
};
