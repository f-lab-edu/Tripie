import localFont from "next/font/local";
import { ReactNode } from "react";

const maruBuri = localFont({
  src: [
    {
      path: "../fonts/MaruBuri-Regular.woff",
      style: "normal",
    },
  ],
});

export default function FontProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <body className={maruBuri.className}>{children}</body>;
}
