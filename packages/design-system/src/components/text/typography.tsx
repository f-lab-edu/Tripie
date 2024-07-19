// import * as CSS from "csstype";

import { Text } from "./text";

export function H1() {
  return <Text>H1</Text>;
}

// export type H1Props = TextProps & {
//   href?: string;
//   headline?: string;
//   emphasize?: boolean;
//   textAlign?: CSS.Property.TextAlign;
// };

// export type H2Props = TextProps;
// export type H3Props = TextProps;
// export type H4Props = TextProps;
// export type ParagraphProps = TextProps;

// export function H1({
//   href,
//   headline,
//   emphasize,
//   textAlign,
//   children,
//   ...props
// }: H1Props) {
//   return (
//     <>
//       {headline && (
//         <Text center bold size="tiny" color="primary" margin={{ bottom: 3 }}>
//           {headline}
//         </Text>
//       )}
//       <Text bold center size="huge" color={emphasize ? "blue" : "gray"}>
//         {children}
//       </Text>
//     </>
//   );
// }

// export function H2({ children, ...props }: H2Props) {
//   return (
//     <Text size="big" color="gray" {...props}>
//       {children}
//     </Text>
//   );
// }

// export function H3({ children, ...props }: H3Props) {
//   return (
//     <Text bold size="large" color="gray" {...props}>
//       {children}
//     </Text>
//   );
// }

// export function H4({ children, ...props }: H4Props) {
//   return (
//     <Text bold size="large" color="blue" {...props}>
//       {children}
//     </Text>
//   );
// }

// export function Paragraph({ children, ...props }: ParagraphProps) {
//   return (
//     <Text lineHeight={1.63} alpha={0.9} {...props}>
//       {children}
//     </Text>
//   );
// }
