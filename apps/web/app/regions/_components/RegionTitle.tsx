'use client';
import { Container, Text } from '@tripie-pyotato/design-system/@core';

import { classNames } from 'wrapper';

import { Icon } from '@tripie-pyotato/design-system/@components';
import Style from './title.module.scss';

const cx = classNames.bind(Style);

const RegionTitle = ({
  city,
  regionId,
  withNavigation = true,
}: {
  regionId?: string;
  city?: string | null;
  withNavigation?: boolean;
}) => {
  return (
    <Container margin="none" alignItems="center" justifyContent="start" className={cx('title-wrap')}>
      <Text size="h2" bold={true} isButtonText={true}>
        {withNavigation ? <Icon.Navigate /> : null}
      </Text>
      <Text size="h2" bold={true} isButtonText={true}>
        <span>
          도시 별 <Text.Accented isButtonText={true}>여행</Text.Accented> 정보
          {regionId == null ? (
            ''
          ) : (
            <>
              {`\n >`} <Text.Accented isButtonText={true}>{regionId}</Text.Accented>
            </>
          )}
          {city == null ? (
            ''
          ) : (
            <>
              {` > `}
              <Text.Accented isButtonText={true}>{city}</Text.Accented>
            </>
          )}
        </span>
      </Text>
    </Container>
  );
};

export default RegionTitle;
