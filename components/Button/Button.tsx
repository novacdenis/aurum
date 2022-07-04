import { Spinner } from "components";
import React, { ButtonHTMLAttributes } from "react";
import { classNames } from "utils";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: "rounded" | "default";
  htmlType?: "button" | "submit" | "reset";
  loading?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, type = "default", htmlType = "button", loading, children, ...rest } = props;

  return (
    <button className={classNames("btn", className, type)} type={htmlType} {...rest}>
      {typeof children === "string" ? <span>{children}</span> : children}
      {loading && (
        <span className="btn__loading">
          <Spinner />
        </span>
      )}
    </button>
  );
};
