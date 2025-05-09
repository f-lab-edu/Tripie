import { Card, Chip } from '@tripie-pyotato/design-system/@components';
import { List, Stack, Text } from '@tripie-pyotato/design-system/@core';
import { Continentl } from 'models/Continentl';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { classNames, Popup, useMap } from 'wrapper';

import Style from './country-info-popup.module.scss';

const cx = classNames.bind(Style);

const CountryInfoPopup = ({
  coordinates,
  capital,
  officialLanguage,
  showPopup,
  setShowPopup,
}: {
  coordinates: { lng: number; lat: number };
  capital: Continentl['capital'];
  officialLanguage: Continentl['official_language'];

  showPopup: boolean;
  setShowPopup: Dispatch<SetStateAction<boolean>>;
}) => {
  const { current: map } = useMap();

  // 선택한 국가로 좌표 이동
  useEffect(() => {
    if (map != null && coordinates != null) {
      map.flyTo({ center: [coordinates.lng, coordinates.lat] });
    }
  }, [coordinates]);

  const countryInfo = [
    {
      label: 'capital name',
      content: (
        <List.Item alignItems="center" gap="l" padding="m">
          <Text.Accented className={cx('capital', 'verticle-center')}>수도</Text.Accented>
          <span className={cx('capital-name')}>{capital}</span>
        </List.Item>
      ),
    },
    {
      label: 'languages',
      content: (
        <List.Item alignItems="center" gap="l" padding="m">
          <Text.Accented className={cx('language', 'center', 'verticle-center')}>공식 언어</Text.Accented>
          {officialLanguage != null ? (
            <List className={cx('flex')}>
              {officialLanguage.map((language: string) => (
                <List.Item key={language}>
                  <Chip>{language}</Chip>
                </List.Item>
              ))}
            </List>
          ) : null}
        </List.Item>
      ),
    },
  ];

  return showPopup ? (
    <Popup
      longitude={coordinates.lng}
      latitude={coordinates.lat}
      anchor="bottom"
      offset={10}
      focusAfterOpen={true}
      key={`popup-${coordinates.lng} + ${coordinates.lat}`}
      className={cx('popup')}
      closeOnClick={false}
      onClose={() => setShowPopup(false)}
    >
      <Stack gap={'default'} direction={'column'} margin="none" className={cx('wrap')}>
        {countryInfo.map(({ content, label }) => (
          <Card.Description key={label} className={cx('with-border')}>
            {content}
            {label}
          </Card.Description>
        ))}
      </Stack>
    </Popup>
  ) : null;
};
export default CountryInfoPopup;
