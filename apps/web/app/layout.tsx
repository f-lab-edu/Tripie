import type { Metadata } from 'next';

import Provider from '../provider/layout';

export const metadata: Metadata = {
  title: 'Tripie ✈️',
  description: 'AI enhanced trip planner',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
