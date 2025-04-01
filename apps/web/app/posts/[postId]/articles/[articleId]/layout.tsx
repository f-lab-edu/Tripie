'use server';

import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { ParamProps } from 'models/Props';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { pageParamData } from '../../page-param-data';

export async function generateMetadata({ params }: ParamProps): Promise<Metadata> {
  const { postId, articleId, metadataContents, description, path, title } = await pageParamData({ params });

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      images: [metadataContents?.image.sizes?.full?.url ?? ''],
      url: `${API.BASE_URL}${ROUTE.POSTS.href}/${postId}/${path}/${articleId}`,
      title,
      description,
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
