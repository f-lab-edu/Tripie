import { Card, Chip, Container, List, Text } from '@tripie-pyotato/design-system';
import Description from 'app/home/_components/our-process/_components/Description';
import classNames from 'classnames/bind';
import { Continentl } from 'models/Continentl';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Popup, useMap } from 'react-map-gl/maplibre';

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
        <li className={cx('list-item')}>
          <Text className={cx('accented', 'capital', 'verticle-center')}>수도</Text>
          <div className={cx('capital-name')}>{capital}</div>
        </li>
      ),
    },
    {
      label: 'languages',
      content: (
        <li className={cx('list-item')}>
          <Text className={cx('accented', 'language', 'center', 'verticle-center')}>공식 언어</Text>
          {officialLanguage != null ? (
            <List className={cx('flex')}>
              {officialLanguage.map((language: string) => (
                <li key={language}>
                  <Chip>{language}</Chip>
                </li>
              ))}
            </List>
          ) : null}
        </li>
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
      <Container margin="none" className={cx('wrap')}>
        {countryInfo.map(({ content, label }) => (
          <Card.Description key={label} className={cx('card-wrap', 'with-border')}>
            <Description>{content}</Description>
          </Card.Description>
        ))}
      </Container>
    </Popup>
  ) : null;
};
export default CountryInfoPopup;
