import React from "react";
import { classNames } from "utils";

import type { InputProps } from "../types";

export const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return <input className={classNames("form-input", className)} {...rest} />;
};
