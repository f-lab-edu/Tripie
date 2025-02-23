'use client';

import { Accordion, Card, Chip, Container, Divider, Headings, List, Text } from '@tripie-pyotato/design-system';

import classNames from 'classnames/bind';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { useRouter } from 'next/navigation';

import Style from './region-select.module.scss';
const cx = classNames.bind(Style);

const RegionSelect = ({ selected, selectedRegion }: { selected: string; selectedRegion?: string }) => {
  const navigate = useRouter();

  return (
    <Card.Content className={cx('card-wrap')}>
      <Accordion>
        <Accordion.Header>
          <Container className={cx('flex')} margin="sm" applyMargin="top-bottom">
            <Headings.H4>
              어떤 <Text.Accented>지역</Text.Accented>이 궁금하세요?
              <Accordion.Icon />
            </Headings.H4>
          </Container>
        </Accordion.Header>
        <Accordion.Divider />
        <Accordion.Body className={cx('accordian-body')}>
          <List.Grid className={cx('grid-wrap')}>
            {Object.keys(TRIPIE_REGION_BY_LOCATION).map(place => (
              <Chip
                className={cx('chip-wrap')}
                selected={selected === place}
                key={place}
                onClick={() => {
                  if (selected == place) {
                    return;
                  }
                  navigate.push(`/regions/${place}`);
                }}
              >
                <Text.Animated className={cx('animated-text', 'chip')} withBorder={false} otherChild={place}>
                  {place}
                </Text.Animated>
              </Chip>
            ))}
          </List.Grid>

          <Accordion.Header>
            <Container className={cx('flex')} margin="sm" applyMargin="top-bottom">
              <Headings.H4>{selected}</Headings.H4>
            </Container>
          </Accordion.Header>
          <Divider />
          <List.Grid className={cx('grid-wrap')}>
            {TRIPIE_REGION_BY_LOCATION[selected as keyof typeof TRIPIE_REGION_BY_LOCATION].map(place => (
              <Chip
                className={cx('chip-wrap')}
                selected={TRIPIE_REGION_IDS[selectedRegion as keyof typeof TRIPIE_REGION_IDS] === place}
                key={place}
                onClick={() => {
                  const selectedLocation = Object.keys(TRIPIE_REGION_IDS).filter(
                    key => TRIPIE_REGION_IDS[key as keyof typeof TRIPIE_REGION_IDS] === place
                  )?.[0];

                  navigate.push(`/regions/${selected}/location/${selectedLocation}`);
                }}
              >
                <Text.Animated className={cx('animated-text', 'chip')} withBorder={false} otherChild={place}>
                  {place}
                </Text.Animated>
              </Chip>
            ))}
          </List.Grid>
        </Accordion.Body>
      </Accordion>
    </Card.Content>
  );
};
export default RegionSelect;
