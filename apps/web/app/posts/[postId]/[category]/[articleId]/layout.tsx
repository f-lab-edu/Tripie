import { Container } from '@tripie-pyotato/design-system/@core';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { ParamProps } from 'models/Props';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { classNames } from 'wrapper/classNames';
import Style from './article-layout.module.scss';
import getParamData from './cachedParamData';

const cx = classNames.bind(Style);

export const dynamic = 'force-static';

export async function generateMetadata({ params }: ParamProps): Promise<Metadata> {
  const { articleId } = await params;
  const { id, title, description, images, path } = await getParamData({ params });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: images.replace('e_blur:2000,q_1', 'q_auto'),
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${id}/${path}/${articleId}`,
    },
  };
}

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Container fillAvailable={true} display="inline-flex" justifyContent="center">
      <Container
        withBorder={true}
        margin="xl"
        display="inline-flex"
        alignItems="center"
        applyMargin="top-bottom"
        padding="l"
        className={cx('fit-content')}
      >
        {children}
      </Container>
    </Container>
  );
}
