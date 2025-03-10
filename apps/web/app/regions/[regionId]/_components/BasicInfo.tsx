'use client';
import { Card, Container } from '@tripie-pyotato/design-system';
import ArticleLink from 'app/regions/[regionId]/_components/Elements/Link';
import { AttractionArticle } from 'models/Attraction';
import { useMemo } from 'react';
import InfoItem, { InfoTagType } from './InfoTag';

export type BasicInfoProps = Pick<
  AttractionArticle['source'],
  'addresses' | 'phoneNumber' | 'officialSiteUrl' | 'regionId'
> & { dataUrl: string };

const BasicInfo = ({ addresses, phoneNumber, officialSiteUrl, regionId, dataUrl }: BasicInfoProps) => {
  const INFO_TAG_CONTENT: Record<keyof InfoTagType, React.ReactNode | null> = useMemo(
    () => ({
      주소: addresses ? <Container margin="none">{addresses.local ?? addresses.ko}</Container> : null,
      전화: phoneNumber ? <Container margin="none">{phoneNumber}</Container> : null,
      홈페이지: officialSiteUrl ? (
        <ArticleLink
          item={{ type: 'links', value: { links: [{ href: officialSiteUrl, label: officialSiteUrl }] } }}
          regionId={regionId}
          dataUrl={dataUrl}
        />
      ) : null,
    }),
    [addresses, phoneNumber, officialSiteUrl, regionId, dataUrl]
  );

  return (
    <Card.Content>
      {Object.entries(INFO_TAG_CONTENT).map(([key, content]) =>
        content ? <InfoItem key={key} item={key as keyof InfoTagType} content={content} /> : null
      )}
    </Card.Content>
  );
};

export default BasicInfo;
