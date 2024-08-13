"use client";
import classNames from "classnames";
import { HTMLAttributes, ReactNode } from "react";

export interface BodyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

import localFont from "next/font/local";

export const maruBuri = localFont({
  src: [
    {
      path: "../styles/font/MaruBuri-Regular.woff2",
      style: "normal",
    },
  ],
});

export default function ThemeProvider({
  children,
  className,
  ...props
}: BodyProps) {
  return (
    <section {...props}>
      <div className={classNames("background-container")}>
        <div className={classNames("stars")}></div>
        <div className={classNames("twinkling")}></div>
      </div>
      <div className={classNames("layout-wrap")}>{children}</div>
    </section>
  );
}
