'use client';
import { Headings, Skeleton } from '@tripie-pyotato/design-system';

import classNames from 'classnames/bind';
import RESOURCE from 'constants/resources';
import { Continentl } from 'models/Continentl';
import { useState } from 'react';
import Style from './country-name.module.scss';

const cx = classNames.bind(Style);

const CountryName = ({
  name,
  code,
  flagImage,
}: {
  name: Continentl['name'];
  code: Continentl['code'];
  flagImage: Continentl['flag-image'];
}) => {
  // 국기 이미지 로드가 완료될때까지 보여줄 이미지와 로드 실패 시 보여줄 이미지
  const [isLoaded, setIsLoaded] = useState<'loading' | 'loaded' | 'error'>('loading');
  return (
    <li className={cx('list-item')}>
      {isLoaded === 'loading' && <Skeleton.Image className={cx('flag-image', 'flag-skeleton')} />}
      {isLoaded === 'error' && (
        <img src={RESOURCE.PLACEHOLDER} alt={RESOURCE.PLACEHOLDER} className={cx('flag-image', 'flag-skeleton')} />
      )}
      <img
        className={cx('flag-image', isLoaded)}
        src={flagImage[0]}
        alt={name}
        onLoad={() => setIsLoaded('loaded')}
        onError={() => setIsLoaded('error')}
      />
      <Headings.H2>{name}</Headings.H2> <Headings.H4 className={cx('accented')}>({code})</Headings.H4>
    </li>
  );
};

export default CountryName;
