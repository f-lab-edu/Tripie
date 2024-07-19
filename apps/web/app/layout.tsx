import "./globals.scss";

import Provider from "../provider/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>{children}</Provider>
    </html>
  );
}
