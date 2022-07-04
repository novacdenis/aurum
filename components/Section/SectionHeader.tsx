import React from "react";
import { classNames } from "utils";

export interface SectionHeader {
  subtitle?: string;
  title: string;
  align?: "left" | "center" | "right";
}

export const SectionHeader: React.FC<SectionHeader> = (props) => {
  const { title, subtitle, align = "left" } = props;

  return (
    <div className={classNames("section__header", align)}>
      {subtitle && <p className="section__header-subtitle">{subtitle}</p>}
      <h1 className="section__header-title">{title}</h1>
    </div>
  );
};
