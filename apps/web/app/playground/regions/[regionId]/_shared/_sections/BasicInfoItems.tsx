'use server';
import { Container } from '@tripie-pyotato/design-system';
import ArticleDivider from 'app/regions/_components/Elements/Divider';
import ArticleHeading from 'app/regions/_components/Elements/Header';
import ArticleText from 'app/regions/_components/Elements/Text';
import { AttractionArticle, Geolocation } from 'models/Attraction';
import BasicInfo, { BasicInfoProps } from '../../_components/BasicInfo';
import SinglePinMap from '../../_components/SinglePinMap';

const BasicInfoItems = ({
  coordinates,
  directions,
  basicInfo,
}: {
  coordinates: Geolocation['coordinates'];
  directions: AttractionArticle['source']['directions'];
  basicInfo: BasicInfoProps;
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
        />
      </Container>
      <ArticleHeading item={{ type: 'heading3', value: { text: '가는방법' } }} />
      <ArticleText item={{ type: 'text', value: { text: directions } }} />
      <ArticleDivider item={{ type: 'hr2' }} />
    </>
  );
};
export default BasicInfoItems;
