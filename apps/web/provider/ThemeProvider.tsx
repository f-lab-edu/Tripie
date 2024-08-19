import { ReactNode } from 'react';
export default function ThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <div className="layout-wrap">{children}</div>
    </>
  );
}
