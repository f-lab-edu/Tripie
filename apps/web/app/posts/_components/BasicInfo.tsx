'use client';
import { Card } from '@tripie-pyotato/design-system';
import { Container, Table } from '@tripie-pyotato/design-system/@core';
import { AttractionArticle } from 'models/Attraction';
import { ReactNode, useMemo } from 'react';
import ArticleLink from './Elements/Link';

export type InfoTagType = {
  주소: ReactNode | null;
  전화: ReactNode | null;
  홈페이지: ReactNode | null;
};

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
      <Table>
        <Table.Body>
          {Object.entries(INFO_TAG_CONTENT).map(([key, content]) =>
            content ? (
              <Table.Row key={key}>
                <Table.Data applyMargin="right">{key}</Table.Data>
                <Table.Data>{content}</Table.Data>
              </Table.Row>
            ) : null
          )}
        </Table.Body>
      </Table>
    </Card.Content>
  );
};

export default BasicInfo;
