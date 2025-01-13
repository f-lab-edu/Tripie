'use client';
import { Container, Headings } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import RESOURCE from 'constants/resources';
import { TRIPIE_REGION_BY_LOCATION, TRIPIE_REGION_IDS } from 'constants/tripie-country';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useMemo } from 'react';
import Accordion from 'shared/components/Accordian/Accordian';
import Card from 'shared/components/Card/Card';
import Chip from 'shared/components/Chip/Chip';
import Divider from 'shared/components/Divider/Divider';
import { ACCORDIAN_VARIANTS } from 'shared/components/Divider/variants';
import List from 'shared/components/List/List';
import AnimatedText from 'shared/components/Text/Text';
import Style from './companion.module.scss';

const cx = classNames.bind(Style);

export function RegionSelect({
  isLoading,
  setSelected, // Props must be serializable for components in the "use client" entry file, "setSelected" is invalid. https://github.com/vercel/next.js/discussions/46795#discussioncomment-5248407
  selected,
  selectedRegion,
  setSelectedRegion,
}: Readonly<{
  isLoading?: boolean;
  setSelected?: Dispatch<SetStateAction<string>>;
  selected: string;
  selectedRegion: string;
  setSelectedRegion?: Dispatch<SetStateAction<string>>;
}>) {
  const navigate = useRouter();
  // 도시들 리스트
  const cities = useMemo(() => {
    return TRIPIE_REGION_BY_LOCATION[selected as keyof typeof TRIPIE_REGION_BY_LOCATION];
  }, [selected]);

  // 지역을 변경하면 첫 도시를 선택한 것으로
  useEffect(() => {
    if (setSelectedRegion != null) {
      setSelectedRegion(cities[0]);
    }
  }, [selected, cities]);

  return (
    <Card>
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
                  disabled={isLoading}
                  selected={selected === place}
                  key={place}
                  onClick={() => {
                    if (setSelected != null) {
                      setSelected(place);
                    }
                    // navigate.push(`/regions/${place}`);
                    navigate.push(`/regions`);
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
              {cities.map(city => (
                <Chip
                  className={cx('chip-wrap')}
                  disabled={isLoading}
                  selected={selectedRegion === city}
                  key={city}
                  onClick={() => {
                    if (setSelectedRegion != null) {
                      setSelectedRegion(city);
                    }

                    const id = Object.keys(TRIPIE_REGION_IDS).filter(
                      key => TRIPIE_REGION_IDS[key as keyof typeof TRIPIE_REGION_IDS] === city
                    )?.[0];

                    if (id != null) {
                      navigate.push(`/regions/${id}`);
                      // navigate.push(`/location/${selected}/regions/${id}`);
                    }
                  }}
                >
                  <AnimatedText className={cx('animated-text', 'chip')} withBorder={false} otherChild={city}>
                    {city}
                  </AnimatedText>
                </Chip>
              ))}
            </List.Grid>
          </Accordion.Body>
        </Accordion>
      </Card.Content>
    </Card>
  );
}
