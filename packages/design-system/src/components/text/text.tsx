import { PropsWithChildren } from "react";

import classNames from "classnames";
import { MarginPadding } from "../../common";
import "./_text.scss";

// interface Theme {
//   colors: {
//     mint: "#ffffff";
//     "my-color": "#fc0404";
//   };
// }
// interface GlobalSizes {
//   huge: "3rem";
//   large: "2.5rem";
//   big: "2rem";
//   tiny: "0.6rem";
// }

// export type TextProps = PropsWithChildren<{
//   alpha?: number;
//   bold?: boolean;
//   center?: boolean;
//   color?: keyof Theme["colors"] | string;
//   cursor?: Property.Cursor;
//   ellipsis?: boolean;
//   floated?: Property.Float;
//   inline?: boolean;
//   inlineBlock?: boolean;
//   letterSpacing?: number;
//   lineHeight?: number | string;
//   margin?: MarginPadding;
//   maxLines?: number;
//   padding?: MarginPadding;
//   size?: keyof GlobalSizes | number;
//   //   size?: number;
//   strikethrough?: boolean;
//   textAlign?: Property.TextAlign;
//   textStyle?: string;
//   //   textStyle?: KeyOfTextStyleMap;
//   underline?: boolean;
//   whiteSpace?: Property.WhiteSpace;
//   wordBreak?: Property.WordBreak;
// }>;

// const style = classNames.bind(Style);

export const Text = ({ children, ...props }: PropsWithChildren) => {
  return (
    <div className={classNames("text")} {...props}>
      {children}
    </div>
  );
};

interface TextTitleBaseProps {
  margin?: MarginPadding;
  as?: string;
}

export type TextTitleProps = PropsWithChildren<TextTitleBaseProps>;

const TextTitleBase = ({ children, ...props }: TextTitleProps) => {
  return (
    <div className={classNames("text-title-base")} {...props}>
      {children}
    </div>
  );
};

export function TextTitle({ children, margin, ...props }: TextTitleProps) {
  return (
    <TextTitleBase as="h1" margin={margin} {...props}>
      {children}
    </TextTitleBase>
  );
}
