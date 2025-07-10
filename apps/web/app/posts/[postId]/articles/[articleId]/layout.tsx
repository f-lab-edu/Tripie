'use server';

import { ParamProps } from 'models/Props';
import { Metadata } from 'next';
import { cache, ReactNode } from 'react';
import { pageParamData } from '../../page-param-data';

export const generateMetadata = async ({ params }: ParamProps): Promise<Metadata> => {
  const { postId, articleId, title, description, images, path } = await pageParamData({ params });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      url: `https://tripie.store/posts/${postId}/${path}/${articleId}`,
    },
  };
};

export const getParamData = cache(pageParamData);

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
