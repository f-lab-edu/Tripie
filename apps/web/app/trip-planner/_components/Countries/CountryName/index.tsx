'use client';

import { BlurImageOnLoad } from '@tripie-pyotato/design-system/@components';
import { Stack, Text } from '@tripie-pyotato/design-system/@core';
import { Continentl } from 'models/Continentl';
import { classNames } from 'wrapper';
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
  blurDataUrl?: Continentl['blurDataURL'];
}) => {
  return (
    <Stack alignItems="center" applyMargin="bottom" justifyContent="flex-start" padding="none" gap="default">
      <BlurImageOnLoad withBorder={false} className={cx('flag-image')} src={flagImage[0]} alt={name} sizes="icon" />
      <Stack margin="none" gap="sm" justifyContent="start">
        <Text size="h4" bold={true} isButtonText={true}>
          {name}
        </Text>
        <Text.Accented bold={true} isButtonText={true}>
          ({code})
        </Text.Accented>
      </Stack>
    </Stack>
  );
};

export default CountryName;
