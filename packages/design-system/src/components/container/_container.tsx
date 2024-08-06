import classNames from "classnames/bind";
import Layout, { LayoutProps } from "../layout";
import Style from "./_container.module.scss";

export interface ContainerProps extends LayoutProps {
  margin?: "xl" | "l" | "m" | "sm" | "xsm";
  applyMargin?:
    | "top-bottom"
    | "left-right"
    | "all"
    | "left"
    | "right"
    | "top"
    | "bottom";
}

const style = classNames.bind(Style);

const Container = ({
  children,
  className,
  align = "left",
  margin = "m",
  applyMargin = "all",
  ...props
}: ContainerProps) => {
  const LayoutComponent =
    align === "center"
      ? Layout.Center
      : align === "right"
        ? Layout.Right
        : Layout;

  return (
    <LayoutComponent
      className={style(["container", margin, applyMargin, className])}
      {...props}
    >
      {children}
    </LayoutComponent>
  );
};

export default Container;
