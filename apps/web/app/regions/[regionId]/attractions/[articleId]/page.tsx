'use server';
import { Card, Container, TripieImage } from '@tripie-pyotato/design-system';

import getArticleDetail from 'app/api/articles/detail';
import AttractionTitle from 'app/regions/_components/shared/_sections/AttractionTitle';
import { sharedMetaData } from 'app/shared-metadata';
import classNames from 'classnames/bind';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { Metadata, ResolvingMetadata } from 'next';
import { getPreferredTitle } from 'utils/string';
import RegionBody from '../../../_components/RegionBody';
import Style from './attractions.module.scss';

const cx = classNames.bind(Style);

type Props = {
  params: Promise<{ regionId: string; articleId: string }>;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const regionId = (await params).regionId;
  const articleId = (await params).articleId;

  const { data } = await getArticleDetail('attraction', regionId, articleId);

  const previousImages = (await parent).openGraph?.images || [];

  const title = getPreferredTitle({ names: data?.source.names });
  const description = data?.source?.comment ?? '';

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images: [data?.source.image.sizes.full.url ?? '', ...previousImages],
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/${regionId}/attractions/${articleId}`,
    },
  };
}

const Attractions = async ({ params }: Props) => {
  const { blurredThumbnail, data } = await getArticleDetail(
    'attraction',
    (await params).regionId,
    (await params).articleId
  );

  if (data == null) {
    return <>missing...</>;
  }

  return (
    <Container applyMargin="top" margin="l" align="center">
      <Card.Content className={cx('fit-content')}>
        <Container margin="m" applyMargin="top-left-right">
          <AttractionTitle names={data.source.names} />
        </Container>
        <Container margin="m" applyMargin="all">
          <TripieImage
            blurDataURL={blurredThumbnail?.data}
            src={data.source.image.sizes.full.url}
            alt={`${data.source.image.sizes.full.url}의 썸네일`}
            sizes="large"
          />
        </Container>
        <Container margin="none">
          <RegionBody source={data.source} dataUrl={data.id} />
        </Container>
      </Card.Content>
    </Container>
  );
};

export default Attractions;
