'use client';
import { Container } from '@tripie-pyotato/design-system';

import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Style from './basic-info.module.scss';

const cx = classNames.bind(Style);

export type InfoTagType = {
  주소: ReactNode | null;
  전화: ReactNode | null;
  홈페이지: ReactNode | null;
};

const InfoItem = ({ item, content }: { item: keyof InfoTagType; content?: ReactNode | null }) => {
  if (content == null) {
    return null;
  }
  return (
    <Container applyMargin="bottom" className={cx('info-wrap')}>
      <Container margin="none" className={cx('item-name')}>
        {item}
      </Container>
      {content}
    </Container>
  );
};

export default InfoItem;
