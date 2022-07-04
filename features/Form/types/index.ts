import { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export interface FormControlProps extends HTMLAttributes<HTMLDListElement> {
  className?: string;
  label?: string;
  name: string;
  error?: string;
  children: ReactNode;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement>;
