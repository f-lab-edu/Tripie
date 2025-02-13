'use server';

import { TripieContainer } from '@tripie-pyotato/design-system';

import { AttractionArticle } from 'models/Attraction';
import BusinessHours from './BusinessHours';
import ExternalLinks from './ExternalLinks';
import RestaurantRecommendationList from './RestaurantRecommendationList';
import AttractionDescription from './shared/_sections/AttractionDescription';
import BasicInfoItems from './shared/_sections/BasicInfoItems';
import FeeDescription from './shared/_sections/FeeDescription';
import TipDescription from './shared/_sections/TipDescription';

const RegionBody = ({ source, dataUrl }: { source: AttractionArticle['source']; dataUrl: string }) => {
  const today = new Date().getDay();
  return (
    <TripieContainer margin="m" applyMargin="left-right">
      <AttractionDescription comment={source?.comment} />
      <RestaurantRecommendationList
        restaurantRecommendations={source?.recommendations}
        regionId={source.regionId}
        dataUrl={dataUrl}
      />
      <BasicInfoItems
        coordinates={source?.geolocation.coordinates}
        directions={source?.directions}
        basicInfo={{
          addresses: source?.addresses,
          phoneNumber: source?.phoneNumber,
          officialSiteUrl: source?.officialSiteUrl,
          regionId: source?.regionId,
        }}
        dataUrl={dataUrl}
      />
      <BusinessHours readableBusinessHours={source?.readableBusinessHours} today={today} />
      <FeeDescription feeComment={source?.feeComment} />
      <TipDescription tips={source?.tips} />
      {source.externalLinks.length === 0 ? null : <ExternalLinks externalLinks={source.externalLinks} />}
    </TripieContainer>
  );
};

export default RegionBody;
