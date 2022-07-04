import React from "react";
import { classNames } from "utils";

import { FormControlProps, InputProps } from "../types";
import { Input } from "./Input";

export const FormControl: React.FC<FormControlProps> = (props) => {
  const { className, name, label, error, children } = props;

  const ValidatedChildren = React.useMemo<React.ReactNode>(
    () =>
      React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if ((children as React.ReactElement<any>).type === Input) {
            return React.cloneElement(children as React.ReactElement<InputProps>, { name });
          }
        }

        return child;
      }),
    [children, name]
  );

  return (
    <div className={classNames("form-control", className)}>
      {label && <label form={name}>{label}</label>}
      {ValidatedChildren}
      {error && <span className="form-control__error">{error}</span>}
    </div>
  );
};
