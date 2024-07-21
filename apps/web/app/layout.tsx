import "./globals.scss";

import ThemeToggleButton from "../components/ThemeToggleButton";
import Provider from "../provider/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <ThemeToggleButton />
        {children}
      </Provider>
    </html>
  );
}
