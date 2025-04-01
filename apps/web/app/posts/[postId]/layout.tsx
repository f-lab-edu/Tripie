import { ReactNode } from 'react';
import PostLayout from '../_components/PostSection';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <PostLayout>{children}</PostLayout>;
}
