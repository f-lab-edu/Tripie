'use client';
import { Headings, TripieImage } from '@tripie-pyotato/design-system';

import classNames from 'classnames/bind';
import { Continentl } from 'models/Continentl';
import Style from './country-name.module.scss';

const cx = classNames.bind(Style);

const CountryName = ({
  name,
  code,
  flagImage,
  blurDataUrl,
}: {
  name: Continentl['name'];
  code: Continentl['code'];
  flagImage: Continentl['flag-image'];
  blurDataUrl: Continentl['blurDataURL'];
}) => {
  return (
    <li className={cx('list-item')}>
      <TripieImage
        className={cx('flag-image')}
        src={flagImage[0]}
        alt={name}
        withBorder={false}
        blurDataURL={blurDataUrl.data}
        sizes="icon"
      />
      <Headings.H2>{name}</Headings.H2> <Headings.H4 className={cx('accented')}>({code})</Headings.H4>
    </li>
  );
};

export default CountryName;
