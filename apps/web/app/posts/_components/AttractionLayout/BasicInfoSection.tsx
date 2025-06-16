'use client';

import { Divider } from '@tripie-pyotato/design-system/@components';
import { AwsMap } from '@tripie-pyotato/design-system/@components/x';
import { Container } from '@tripie-pyotato/design-system/@core/layout';
import { API_KEY } from 'constants/maps';
import { AttractionArticle } from 'models/Attraction';
import { Geolocation } from 'models/Geo';
import ArticleHeading from '../ArticleLayout/Header';
import ArticleText from '../ArticleLayout/Text/Text';
import BasicInfo, { BasicInfoProps } from './BasicInfo';

const BasicInfoSection = ({
  coordinates,
  directions,
  basicInfo,
  dataUrl,
}: {
  coordinates: Geolocation['coordinates'];
  directions: AttractionArticle['source']['directions'];
  basicInfo: BasicInfoProps;
  dataUrl: string;
}) => {
  return (
    <>
      <ArticleHeading item={{ type: 'heading2', value: { text: '기본정보' } }} />
      <AwsMap
        apiKey={API_KEY}
        locationMarker={[
          {
            lat: coordinates[1],
            lng: coordinates[0],
            label: 'attraction',
            info: '',
            index: '0-0',
            parent: '0',
          },
        ]}
        style={{ height: '40vh' }}
        center={{
          longitude: coordinates[0],
          latitude: coordinates[1],
        }}
        currentMarker={'0-0'}
      />
      <Container applyMargin="top-bottom">
        <BasicInfo
          addresses={basicInfo.addresses}
          phoneNumber={basicInfo.phoneNumber}
          officialSiteUrl={basicInfo.officialSiteUrl}
          regionId={basicInfo.regionId}
          dataUrl={dataUrl}
        />
      </Container>
      <Divider.Article item={{ type: 'hr2' }} />
      <ArticleHeading item={{ type: 'heading3', value: { text: '가는방법' } }} />
      <ArticleText item={{ type: 'text', value: { text: directions } }} />
    </>
  );
};
export default BasicInfoSection;
