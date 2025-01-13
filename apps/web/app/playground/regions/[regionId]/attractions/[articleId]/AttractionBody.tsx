'use server';

import { Container } from '@tripie-pyotato/design-system';
import BusinessHours from '../../_components/BusinessHours';

import { AttractionArticle } from 'models/Attraction';
import ExternalLinks from '../../_components/ExternalLinks';
import RestaurantRecommendationList from '../../_components/RestaurantRecommendationList';
import AttractionDescription from '../../_shared/_sections/AttractionDescription';
import AttractionThumbnail from '../../_shared/_sections/AttractionThumbnail';
import BasicInfoItems from '../../_shared/_sections/BasicInfoItems';
import FeeDescription from '../../_shared/_sections/FeeDescription';
import TipDescription from '../../_shared/_sections/TipDescription';

const AttractionBody = ({ source, today }: { source: AttractionArticle['source']; today: number }) => {
  return (
    <>
      <AttractionThumbnail sizes={source?.image?.sizes} />
      <Container margin="l" applyMargin="left-right">
        <AttractionDescription comment={source.comment} />
        <RestaurantRecommendationList restaurantRecommendations={source.recommendations} />
        <BasicInfoItems
          coordinates={source.geolocation.coordinates}
          directions={source.directions}
          basicInfo={{
            addresses: source.addresses,
            phoneNumber: source.phoneNumber,
            officialSiteUrl: source.officialSiteUrl,
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
