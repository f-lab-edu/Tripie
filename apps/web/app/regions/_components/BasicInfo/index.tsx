'use client';
import { Card, Container } from '@tripie-pyotato/design-system';
import ArticleLink from 'app/regions/_components/Elements/Link';

import classNames from 'classnames/bind';
import { AttractionArticle } from 'models/Attraction';
import Style from './basic-info.module.scss';

const cx = classNames.bind(Style);

export type BasicInfoProps = Pick<
  AttractionArticle['source'],
  'addresses' | 'phoneNumber' | 'officialSiteUrl' | 'regionId'
>;

const BasicInfo = ({
  addresses,
  phoneNumber,
  officialSiteUrl,
  regionId,
  dataUrl,
}: BasicInfoProps & { dataUrl: string }) => {
  return (
    <Card.Content className={cx('basic-info')}>
      {addresses != null ? (
        <Container applyMargin="bottom" className={cx('basic-info-flex-wrap')}>
          <Container margin="none" className={cx('item-name')}>
            주소
          </Container>
          <Container margin="none">{addresses.local ?? addresses.ko}</Container>
        </Container>
      ) : null}
      {phoneNumber != null ? (
        <Container applyMargin="bottom" className={cx('basic-info-flex-wrap')}>
          <Container margin="none" className={cx('item-name')}>
            전화
          </Container>
          <Container margin="none">{phoneNumber}</Container>
        </Container>
      ) : null}
      {officialSiteUrl != null ? (
        <Container margin="none" className={cx('basic-info-flex-wrap')}>
          <Container margin="none" className={cx('item-name')}>
            홈페이지
          </Container>
          <ArticleLink
            item={{
              type: 'links',
              value: { links: [{ href: officialSiteUrl, label: officialSiteUrl }] },
            }}
            regionId={regionId}
            dataUrl={dataUrl}
          />
        </Container>
      ) : null}
    </Card.Content>
  );
};

export default BasicInfo;
