import dynamic from "next/dynamic";
import { ReactNode } from "react";

const ThemeWrapper = dynamic(
  () => import("@tripie/design-system/components/body/body"),
  { ssr: false }
);

export default function ThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <ThemeWrapper>{children}</ThemeWrapper>;
}
