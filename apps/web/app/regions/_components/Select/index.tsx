'use client';

import {
  Accordion,
  AnimatedButton,
  Card,
  Chip,
  Container,
  Divider,
  Headings,
  List,
  Text,
} from '@tripie-pyotato/design-system';

import classNames from 'wrapper';

import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { useRouter } from 'next/navigation';

import Style from './region-select.module.scss';
const cx = classNames.bind(Style);

const RegionSelect = ({ selected, selectedRegion }: { selected: string; selectedRegion?: string }) => {
  const navigate = useRouter();

  return (
    <>
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
                  onClick={() => {
                    if (selected == place) {
                      return;
                    }
                    navigate.push(`/regions/${place}`);
                  }}
                  key={place}
                  className={cx('chip-wrap')}
                  selected={selected === place}
                >
                  <AnimatedButton.Text className={cx('animated-text', 'chip')}>{place}</AnimatedButton.Text>
                </Chip>
              ))}
            </List.Grid>
          </Accordion.Body>
        </Accordion>
      </Card.Content>
      <Container applyMargin="top" margin="sm">
        <Card.Content className={cx('card-wrap')}>
          <Accordion>
            <Accordion.Header>
              <Container className={cx('flex')} margin="sm" applyMargin="top-bottom">
                <Headings.H4>
                  {selected} {` > `}{' '}
                  <Text.Accented>{TRIPIE_REGION_IDS[selectedRegion as keyof typeof TRIPIE_REGION_IDS]}</Text.Accented>
                </Headings.H4>
              </Container>
            </Accordion.Header>
            <Divider />
            <Accordion.Body className={cx('accordian-body')}>
              <List.Grid className={cx('grid-wrap')}>
                {TRIPIE_REGION_BY_LOCATION[selected as keyof typeof TRIPIE_REGION_BY_LOCATION].map(place => (
                  <Chip
                    onClick={() => {
                      const selectedLocation = Object.keys(TRIPIE_REGION_IDS).filter(
                        key => TRIPIE_REGION_IDS[key as keyof typeof TRIPIE_REGION_IDS] === place
                      )?.[0];

                      navigate.push(`/regions/${selected}/location/${selectedLocation}`);
                    }}
                    key={place}
                    className={cx('chip-wrap')}
                    selected={TRIPIE_REGION_IDS[selectedRegion as keyof typeof TRIPIE_REGION_IDS] === place}
                  >
                    <AnimatedButton.Text className={cx('animated-text', 'chip')}>{place}</AnimatedButton.Text>
                  </Chip>
                ))}
              </List.Grid>
            </Accordion.Body>
          </Accordion>
        </Card.Content>
      </Container>
    </>
  );
};
export default RegionSelect;
