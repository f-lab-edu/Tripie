'use client';
import { Headings, List, Text, TripieImage } from '@tripie-pyotato/design-system';

import { Continentl } from 'models/Continentl';
import classNames from 'wrapper';
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
    <List.Item alignItems="center">
      <TripieImage
        className={cx('flag-image')}
        src={flagImage[0]}
        alt={name}
        withBorder={false}
        blurDataURL={blurDataUrl.data}
        sizes="icon"
      />
      <Headings.H2>{name}</Headings.H2>{' '}
      <Headings.H4>
        <Text.Accented>({code})</Text.Accented>
      </Headings.H4>
    </List.Item>
  );
};

export default CountryName;
