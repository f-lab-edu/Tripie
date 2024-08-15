import classNames from "classnames/bind";
import { ComponentProps } from "react";
import Style from "./_grid.module.scss";

export type GridProps = ComponentProps<"div">;

const cx = classNames.bind(Style);

const Grid = ({ children, className, ...props }: GridProps) => {
  return (
    <div className={cx("grid", className)} {...props}>
      {children}
    </div>
  );
};

export default Grid;
