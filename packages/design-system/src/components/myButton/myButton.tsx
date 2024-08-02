"use client";

import classNames from "classnames/bind";
import { ButtonHTMLAttributes, useState } from "react";
import Text from "../typography/text";
import Style from "./mybutton.module.scss";

const style = classNames.bind(Style);
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const MyButton = ({ children, className, ...others }: ButtonProps) => {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      className={style(className, "button", clicked && "clicked")}
      onClick={() => setClicked(!clicked)}
      {...others}
    >
      <Text>{children}</Text>
    </button>
  );
};
export default MyButton;
