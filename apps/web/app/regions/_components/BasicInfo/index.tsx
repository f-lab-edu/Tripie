'use client';
import { Card, TripieContainer } from '@tripie-pyotato/design-system';
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
        <TripieContainer applyMargin="bottom" className={cx('basic-info-flex-wrap')}>
          <TripieContainer margin="none" className={cx('item-name')}>
            주소
          </TripieContainer>
          <TripieContainer margin="none">{addresses.local ?? addresses.ko}</TripieContainer>
        </TripieContainer>
      ) : null}
      {phoneNumber != null ? (
        <TripieContainer applyMargin="bottom" className={cx('basic-info-flex-wrap')}>
          <TripieContainer margin="none" className={cx('item-name')}>
            전화
          </TripieContainer>
          <TripieContainer margin="none">{phoneNumber}</TripieContainer>
        </TripieContainer>
      ) : null}
      {officialSiteUrl != null ? (
        <TripieContainer margin="none" className={cx('basic-info-flex-wrap')}>
          <TripieContainer margin="none" className={cx('item-name')}>
            홈페이지
          </TripieContainer>
          <ArticleLink
            item={{
              type: 'links',
              value: { links: [{ href: officialSiteUrl, label: officialSiteUrl }] },
            }}
            regionId={regionId}
            dataUrl={dataUrl}
          />
        </TripieContainer>
      ) : null}
    </Card.Content>
  );
};

export default BasicInfo;
