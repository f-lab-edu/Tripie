import classNames from "classnames/bind";
import { ReactNode } from "react";
import Style from "./_container.module.scss";

export type ContainerProps = {
  margin?: "xl" | "l" | "m" | "sm" | "xsm" | "none";
  align?: "left" | "center" | "right";
  children?: ReactNode;
  applyMargin?:
    | "top-bottom"
    | "left-right"
    | "all"
    | "left"
    | "right"
    | "top"
    | "bottom";
} & Omit<React.ComponentProps<"div">, "children">;

const style = classNames.bind(Style);

const Container = ({
  children,
  className,
  align = "left",
  margin = "m",
  applyMargin = "all",
  ...props
}: ContainerProps) => {
  return (
    <div
      className={style(
        "layout-fill-available",
        `align-${align}`,
        "container",
        applyMargin,
        margin,
        className
      )}
      {...props}
    >
      {children}
      {/* <div>{children}</div> */}
    </div>
  );
};

export default Container;
