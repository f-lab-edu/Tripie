'use client';

import { Container, Headings } from '@tripie-pyotato/design-system';
import Accordion from 'shared/components/Accordian/Accordian';
import Card from 'shared/components/Card/Card';

import classNames from 'classnames/bind';
import RESOURCE from 'constants/resources';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { useRouter } from 'next/navigation';
import Chip from 'shared/components/Chip/Chip';
import Divider from 'shared/components/Divider/Divider';
import { ACCORDIAN_VARIANTS } from 'shared/components/Divider/variants';
import List from 'shared/components/List/List';
import AnimatedText from 'shared/components/Text/Text';
import Style from './region-select.module.scss';
const cx = classNames.bind(Style);

const RegionSelect = ({ selected, selectedRegion }: { selected: string; selectedRegion?: string }) => {
  const navigate = useRouter();

  return (
    <Card.Content className={cx('card-wrap')}>
      <Accordion>
        <Accordion.Header>
          <Container className={cx('flex')} margin="sm" applyMargin="top-bottom">
            <Headings.H3>
              어떤 <span className={cx('accented')}>지역</span>이 궁금하세요?
            </Headings.H3>
            <Accordion.Icon variants={ACCORDIAN_VARIANTS.BUTTON} src={RESOURCE.ARROW} />
          </Container>
        </Accordion.Header>
        <Accordion.Divider />
        <Accordion.Body className={cx('accordian-body')}>
          <List.Grid>
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
                <AnimatedText className={cx('animated-text', 'chip')} withBorder={false} otherChild={place}>
                  {place}
                </AnimatedText>
              </Chip>
            ))}
          </List.Grid>

          <Accordion.Header>
            <Container className={cx('flex')} margin="sm" applyMargin="top-bottom">
              <Headings.H4>{selected}</Headings.H4>
            </Container>
          </Accordion.Header>
          <Divider />
          <List.Grid>
            {TRIPIE_REGION_BY_LOCATION[selected as keyof typeof TRIPIE_REGION_BY_LOCATION].map(place => (
              <Chip
                className={cx('chip-wrap')}
                //   disabled={isLoading}
                selected={TRIPIE_REGION_IDS[selectedRegion as keyof typeof TRIPIE_REGION_IDS] === place}
                key={place}
                onClick={() => {
                  const selectedLocation = Object.keys(TRIPIE_REGION_IDS).filter(
                    key => TRIPIE_REGION_IDS[key as keyof typeof TRIPIE_REGION_IDS] === place
                  )?.[0];

                  navigate.push(`/regions/${selected}/location/${selectedLocation}`);
                }}
              >
                <AnimatedText className={cx('animated-text', 'chip')} withBorder={false} otherChild={place}>
                  {place}
                </AnimatedText>
              </Chip>
            ))}
          </List.Grid>
        </Accordion.Body>
      </Accordion>
    </Card.Content>
  );
};
export default RegionSelect;
