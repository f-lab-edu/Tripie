'use client';
import { Stack } from '@tripie-pyotato/design-system/@core';
import Text from '@tripie-pyotato/design-system/@core/Text';
import { classNames } from '../../../wrapper/classNames';

import NavButton from 'shared/components/NavButton';
import Style from './region-title.module.scss';

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
    <Stack
      margin={regionId == null ? 'xl' : 'none'}
      className={cx('page-heading-wrap')}
      direction="column"
      padding="sm"
      applyMargin={regionId == null ? 'top' : 'all'}
      applyPadding="all"
    >
      <Stack
        direction="row"
        display="inline-flex"
        margin="none"
        className={cx('heading-wrap')}
        padding="none"
        flexWrapOn={'wrap-sm'}
        applyPadding="top"
        alignItems="center"
        justifyContent="start"
      >
        {withNavigation ? <NavButton /> : null}
        <Text size="h2" bold={true} noGapUnderText={true}>
          도시 별&nbsp;
        </Text>
        <Text.Accented size="h2" bold={true} noGapUnderText={true}>
          여행&nbsp;
        </Text.Accented>
        <Text size="h2" bold={true} noGapUnderText={true}>
          정보
        </Text>
        {regionId != null || city != null ? (
          <Text size="h2" bold={true} noGapUnderText={true} alignItems="start">
            &nbsp;{`>`}&nbsp;
          </Text>
        ) : (
          ''
        )}
        {regionId != null && city != null ? (
          <Text
            size="h2"
            bold={true}
            noGapUnderText={true}
            alignItems="start"
            className={cx('page-heading-wrap', 'region-id')}
          >
            <Stack direction="column" alignItems="start" margin="none">
              <Text size="h2" bold={true} noGapUnderText={true} className={cx('text-heading', 'sub-region-title')}>
                <Text size="tiny" noGapUnderText={true} padding="none">
                  {regionId}
                </Text>
              </Text>
              <Text.Accented size="h2" bold={true} noGapUnderText={true}>
                {city}
              </Text.Accented>
            </Stack>
          </Text>
        ) : (
          <Text size="h2" bold={true} noGapUnderText={true}>
            <Text.Accented size="h2" bold={true} noGapUnderText={true}>
              {regionId}
            </Text.Accented>
          </Text>
        )}
      </Stack>
    </Stack>
  );
};

export default RegionTitle;
