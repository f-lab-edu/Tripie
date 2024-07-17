import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.scss";

// const maruBuri = localFont({
//   src: [
//     {
//       path: "./fonts/MaruBuri-Bold.woff",
//     },
//   ],
// });

export const metadata: Metadata = {
  title: "Trippie",
  description: "AI Enhanced Trip Planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={maruBuri.className}> */}
      <body>
        <div className="background-container">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
        <div className="layout-wrap">{children}</div>
      </body>
    </html>
  );
}
