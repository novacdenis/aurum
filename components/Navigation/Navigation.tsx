import React from "react";

import { NavigationDesktopBar } from "./NavigationDesktopBar";
import { NavigationMobileBar } from "./NavigationMobileBar";

export const Navigation: React.FC = () => {
  return (
    <>
      <NavigationDesktopBar />
      <NavigationMobileBar />
    </>
  );
};
