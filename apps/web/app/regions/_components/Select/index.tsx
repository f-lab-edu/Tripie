'use client';

import { AnimatedButton, Card, Container, Divider, List } from '@tripie-pyotato/design-system';

import classNames from 'wrapper';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { useRouter } from 'next/navigation';

import Style from './region-select.module.scss';
const cx = classNames.bind(Style);

const RegionSelect = ({ selected, selectedRegion }: { selected: string; selectedRegion?: string }) => {
  const navigate = useRouter();

  return (
    <Container margin="none" className={cx('selected-wrap')}>
      <Container applyMargin="top" margin="sm">
        <Card.Content className={cx('card-wrap')}>
          <Container margin="none" className={cx('carousel')}>
            <Container applyMargin="top-bottom" className={cx('carousel-inner')}>
              {Object.keys(TRIPIE_REGION_BY_LOCATION).map(place => (
                <AnimatedButton
                  selected={selected === place}
                  withBorder={true}
                  key={place}
                  className={cx('place-chip')}
                  withMinWidth={true}
                  onClick={() => {
                    if (selected == place) {
                      return;
                    }
                    navigate.push(`/regions/${place}`);
                  }}
                >
                  {place}
                </AnimatedButton>
              ))}
            </Container>
          </Container>

          <Divider />

          <List.Grid className={cx('grid-wrap')}>
            {TRIPIE_REGION_BY_LOCATION[selected as keyof typeof TRIPIE_REGION_BY_LOCATION].map(place => (
              <AnimatedButton
                selected={TRIPIE_REGION_IDS[selectedRegion as keyof typeof TRIPIE_REGION_IDS] === place}
                withBorder={true}
                key={place}
                className={cx('chip-wrap')}
                onClick={() => {
                  const selectedLocation = Object.keys(TRIPIE_REGION_IDS).filter(
                    key => TRIPIE_REGION_IDS[key as keyof typeof TRIPIE_REGION_IDS] === place
                  )?.[0];
                  navigate.push(`/regions/${selected}/location/${selectedLocation}`);
                }}
              >
                {place}
              </AnimatedButton>
            ))}
          </List.Grid>
        </Card.Content>
      </Container>
    </Container>
  );
};
export default RegionSelect;
