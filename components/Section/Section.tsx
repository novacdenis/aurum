import React from "react";
import { classNames } from "utils";

import { SectionHeader } from "./SectionHeader";

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionComposition {
  Header: React.FC<SectionHeader>;
}

export const Section: React.FC<SectionProps> & SectionComposition = (props) => {
  const { className, children } = props;

  return <section className={classNames("section", className)}>{children}</section>;
};

Section.Header = SectionHeader;
