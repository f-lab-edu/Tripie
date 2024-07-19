"use client";

import classNames from "classnames/bind";
import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import Style from "./mybutton.module.scss";

const style = classNames.bind(Style);
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const MyButton = ({ children, className, ...others }: ButtonProps) => {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      type="button"
      className={style(className, "button")}
      onClick={() => setClicked(!clicked)}
      {...others}
    >
      {children}
    </button>
  );
};
export default MyButton;
