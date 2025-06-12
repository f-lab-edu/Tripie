'use client';
import NavigationButton from '@tripie-pyotato/design-system/@components/NavigationButton';
import { Container, Stack } from '@tripie-pyotato/design-system/@core';
import Text from '@tripie-pyotato/design-system/@core/Text';

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
    <Stack margin="none" direction="column">
      <Container margin="none" alignItems="end" justifyContent="start">
        {withNavigation ? <NavigationButton sizes="large" /> : null}
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
          <Text size="h2" bold={true} noGapUnderText={true} alignItems="start">
            <Stack direction="column" alignItems="start" margin="none">
              <Text size="h2" bold={true} noGapUnderText={true}>
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
      </Container>
    </Stack>
  );
};

export default RegionTitle;
