'use server';

import { Container } from '@tripie-pyotato/design-system';
import { AttractionArticle } from 'models/Attraction';
import BusinessHours from '../../_components/BusinessHours';
import ExternalLinks from '../../_components/ExternalLinks';
import RestaurantRecommendationList from '../../_components/RestaurantRecommendationList';
import AttractionDescription from '../../_shared/_sections/AttractionDescription';
import AttractionThumbnail from '../../_shared/_sections/AttractionThumbnail';
import BasicInfoItems from '../../_shared/_sections/BasicInfoItems';
import FeeDescription from '../../_shared/_sections/FeeDescription';
import TipDescription from '../../_shared/_sections/TipDescription';

const AttractionBody = ({
  source,
  today,
  dataUrl,
}: {
  source: AttractionArticle['source'];
  today: number;
  dataUrl: string;
}) => {
  return (
    <>
      <AttractionThumbnail sizes={source?.image?.sizes} />
      <Container margin="l" applyMargin="left-right">
        <AttractionDescription comment={source.comment} />
        <RestaurantRecommendationList
          restaurantRecommendations={source.recommendations}
          regionId={source.regionId}
          dataUrl={dataUrl}
        />
        <BasicInfoItems
          coordinates={source.geolocation.coordinates}
          directions={source.directions}
          basicInfo={{
            addresses: source.addresses,
            phoneNumber: source.phoneNumber,
            officialSiteUrl: source.officialSiteUrl,
            regionId: source.regionId,
          }}
        />
        <BusinessHours readableBusinessHours={source.readableBusinessHours} today={today} />
        <FeeDescription feeComment={source.feeComment} />
        <TipDescription tips={source.tips} />
        <ExternalLinks externalLinks={source.externalLinks} />
      </Container>
    </>
  );
};

export default AttractionBody;
