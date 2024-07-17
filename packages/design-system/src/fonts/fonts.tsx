"use client";
import classNames from "classnames/bind";
import { HTMLAttributes, ReactNode } from "react";
import Style from "./fonts.module.scss";

import localFont from "@next/font/local";

export interface FontProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const maruBuri = localFont({ src: "./fonts/MaruBuri-Regular.ttf" });
const style = classNames.bind(Style);

const Fonts = ({ children, ...others }: FontProps) => {
  return (
    <div className={style("large", maruBuri.className)} {...others}>
      {children}
    </div>
  );
};
export default Fonts;
