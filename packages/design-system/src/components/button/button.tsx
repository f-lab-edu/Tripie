"use client";

import classNames from "classnames/bind";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { useAppTheme } from "../../hooks";
import Style from "./button.module.scss";

const style = classNames.bind(Style);
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "xl" | "l" | "m" | "sm" | "xsm" | "icon";
}

const Button = ({
  children,
  className,
  size = "m",
  ...others
}: ButtonProps) => {
  const { mode } = useAppTheme();
  return (
    <button
      className={style(className, "button", mode == null ? "os" : mode, size)}
      {...others}
    >
      {children}
    </button>
  );
};

export interface ToolTipButton extends Omit<ButtonProps, "children"> {
  icon?: string;
  tooltipContentOnHover?: ReactNode;
  tooltipContentOnClick?: ReactNode;
  iconOnClick?: string;
  iconOnHover?: string;
}

const ToolTip = ({
  className,
  size = "icon",
  tooltipContentOnHover,
  tooltipContentOnClick,
  icon,
  iconOnClick,
  iconOnHover,
  ...others
}: ToolTipButton) => {
  const { mode } = useAppTheme();
  return (
    <button
      className={style(
        className,
        "button",
        mode == null ? "os" : mode,
        size,
        "tooltip-button"
      )}
      {...others}
    >
      {tooltipContentOnHover != null ? (
        <span
          data-text-end={tooltipContentOnClick}
          data-text-initial={tooltipContentOnHover}
          className={style("tooltip")}
        />
      ) : null}

      <span>
        <svg
          viewBox="0 0 6.35 6.35"
          y="0"
          x="0"
          height="20"
          width="20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className={style("icon-before")}
        >
          <g>
            <path fill="currentColor" d={icon}></path>
          </g>
        </svg>
        <svg
          viewBox="0 0 24 24"
          y="0"
          x="0"
          height="18"
          width="18"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className={style("icon-after")}
        >
          <g>
            <path
              data-original="#000000"
              fill="currentColor"
              d={iconOnHover}
            ></path>
          </g>
        </svg>
        <svg
          viewBox="0 0 24 24"
          y="0"
          x="0"
          height="18"
          width="18"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className={style("icon-after")}
        >
          <g>
            <path
              data-original="#000000"
              fill="currentColor"
              d={iconOnClick}
            ></path>
          </g>
        </svg>
      </span>
    </button>
  );
};

Button.ToolTip = ToolTip;

export default Button;
