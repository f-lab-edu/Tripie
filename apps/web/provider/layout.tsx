import { ReactNode } from "react";
import FontProvider from "./FontProvider";
import ThemeProvider from "./ThemeProvider";

export default function Provider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <FontProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </FontProvider>
  );
}
