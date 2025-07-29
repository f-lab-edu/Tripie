import Head from 'next/head';
import { ReactNode } from 'react';

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
        <link rel="preload" as="image" href={'https://res.cloudinary.com/'} />
        {links?.map(link => <link key={link} rel="preload" as="image" href={link} />)}
      </Head>
      {children}
    </>
  );
}
