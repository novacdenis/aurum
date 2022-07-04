import { HeartIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/outline";
import { Drawer } from "components";
import React from "react";

import NavigationLinks from "./NavigationLinks";

interface NavigationSidebarProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ visible, setVisible }) => {
  return (
    <Drawer className="navigation__sidebar" isOpen={visible} onClose={() => setVisible(false)}>
      <div className="navigation__actions">
        <button className="navigation__action">
          <span>Корзина</span>
          <ShoppingBagIcon className="h-4 w-4" />
        </button>
        <button className="navigation__action">
          <span>Фавориты</span>
          <HeartIcon className="h-4 w-4" />
        </button>
        <button className="navigation__action">
          <span>Аккаунт</span>
          <UserIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="my-6 h-[1px] w-full bg-[#B5AEAD]" />

      <NavigationLinks />
    </Drawer>
  );
};

export default NavigationSidebar;
