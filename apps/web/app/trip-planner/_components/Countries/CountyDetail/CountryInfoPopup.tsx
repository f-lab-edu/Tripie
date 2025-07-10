import { Card, MapPopup } from '@tripie-pyotato/design-system/@components';
import { Container, Stack, Table, Text } from '@tripie-pyotato/design-system/@core';
import { classNames, useMap } from '@tripie-pyotato/design-system/@wrappers';

import { Continentl } from 'models/Continentl';

import { Dispatch, SetStateAction, useEffect, useMemo } from 'react';

import Style from './countries.module.scss';

const cx = classNames.bind(Style);

const CountryInfoPopup = ({
  coordinates,
  capital,
  officialLanguage,
  showPopup,
  name,
  code,
  setShowPopup,
}: {
  coordinates: { lng: number; lat: number };
  capital: Continentl['capital'];
  code: Continentl['code'];
  name: Continentl['name'];
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

  const columns = useMemo(() => {
    return [
      {
        label: 'country name',
        headerName: '국가 이름',
        field: (
          <Text bold={true}>
            {name}&nbsp;({code})
          </Text>
        ),
        width: 10,
      },
      {
        label: 'capital name',
        headerName: '수도',
        field: <Text bold={true}>{capital}</Text>,
        width: 30,
      },
      {
        label: 'languages',
        headerName: '공식 언어',
        field:
          officialLanguage != null ? (
            <Stack
              display="grid"
              cols={officialLanguage.length >= 4 ? 4 : officialLanguage.length}
              gap="default"
              margin="none"
            >
              {officialLanguage.map((language: string) => (
                <Container key={language} padding="xsm" margin="none" withBorder={true} alignItems="center">
                  {language}
                </Container>
              ))}
            </Stack>
          ) : null,
        width: 40,
      },
    ];
  }, [capital, officialLanguage]);

  return (
    <MapPopup
      showPopup={showPopup}
      coordinates={coordinates}
      onClose={() => setShowPopup(false)}
      content={
        <Card.Description padding={'sm'} className={cx('map-popup-content')}>
          <Table applyMargin="top" margin="m" padding="none">
            <Table.Body>
              {columns.map(col => {
                return (
                  <Table.Row key={col.headerName} applyPadding="bottom" padding="m">
                    <Table.Data width={col.width} margin="none" padding="sm" applyPadding="right">
                      <Text.Accented bold={true} className={cx('header-name')}>
                        {col.headerName}
                      </Text.Accented>
                    </Table.Data>
                    <Table.Data width={100 - col.width} margin="none">
                      {col.field}
                    </Table.Data>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Card.Description>
      }
    />
  );
};
export default CountryInfoPopup;
