"use client";

import { useAppTheme } from "@tripie/hooks";
import classNames from "classnames";
import localFont from "next/font/local";
import { HTMLAttributes, ReactNode } from "react";
import "./_body.scss";

export interface BodyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const maruBuri = localFont({
  src: [
    {
      path: "../../static/fonts/MaruBuri-Regular.woff",
      style: "normal",
    },
  ],
});

const Body = ({ children, className, ...props }: BodyProps) => {
  const { mode } = useAppTheme();

  return (
    <section
      className={classNames(className, mode, maruBuri.className)}
      {...props}
    >
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <div className="layout-wrap">{children}</div>
    </section>
  );
};
export default Body;
