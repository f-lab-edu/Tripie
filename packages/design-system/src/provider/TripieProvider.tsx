import Head from 'next/head';
import { ReactNode } from 'react';
import { CLOUDINARY_URL } from 'shared';

export default function TripieThemeProvider({
  links,
  children,
}: Readonly<{
  children: ReactNode;
  links?: string[];
}>) {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={CLOUDINARY_URL()} />
        {links?.map(link => <link key={link} rel="preload" as="image" href={link} />)}
      </Head>
      {children}
    </>
  );
}
