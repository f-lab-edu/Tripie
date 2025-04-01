'use server';

import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { ParamProps } from 'models/Props';
import { Metadata, ResolvingMetadata } from 'next';
import { ReactNode } from 'react';
import { pageParamData } from '../../page-param-data';

export async function generateMetadata({ params }: ParamProps, parent: ResolvingMetadata): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];
  const { title, description, postId, articleId, images, path } = await pageParamData({ params });

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images: [images ?? '', ...previousImages],
      url: `${API.BASE_URL}${ROUTE.POSTS.href}/${postId}/${path}/${articleId}`,
    },
  };
}

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
