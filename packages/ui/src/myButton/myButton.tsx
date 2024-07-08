"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  appName: string;
}

const MyButton = ({ children, className, appName, ...others }: ButtonProps) => {
  return (
    <button className={className} {...others}>
      {children}
    </button>
  );
};
export default MyButton;
