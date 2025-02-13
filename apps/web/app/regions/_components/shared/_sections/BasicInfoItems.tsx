'use client';
import { Container, Divider } from '@tripie-pyotato/design-system';
import ArticleHeading from 'app/regions/_components/Elements/Header';
import ArticleText from 'app/regions/_components/Elements/Text';
import { AttractionArticle } from 'models/Attraction';
import { Geolocation } from 'models/Geo';
import BasicInfo, { BasicInfoProps } from '../../BasicInfo';
import SinglePinMap from '../../SinglePinMap';

const BasicInfoItems = ({
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
      <SinglePinMap
        locations={[
          {
            lat: coordinates[1],
            lng: coordinates[0],
            label: 'attraction',
            info: '',
            index: '0-0',
            parent: '0',
          },
        ]}
        center={{
          longitude: coordinates[0],
          latitude: coordinates[1],
        }}
      />
      <Container applyMargin="top">
        <BasicInfo
          addresses={basicInfo.addresses}
          phoneNumber={basicInfo.phoneNumber}
          officialSiteUrl={basicInfo.officialSiteUrl}
          regionId={basicInfo.regionId}
          dataUrl={dataUrl}
        />
      </Container>
      <ArticleHeading item={{ type: 'heading3', value: { text: '가는방법' } }} />
      <ArticleText item={{ type: 'text', value: { text: directions } }} />
      <Divider.Article item={{ type: 'hr2' }} />
    </>
  );
};
export default BasicInfoItems;
