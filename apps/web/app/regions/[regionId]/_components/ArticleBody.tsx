'use server';

import { Container } from '@tripie-pyotato/design-system';

import { AttractionArticle } from 'models/Attraction';
import ArticleDescription from './BasicInfo/ArticleDescription';
import BasicInfoSection from './BasicInfo/BasicInfoSection';
import FeeDescription from './BasicInfo/FeeDescription';
import TipDescription from './BasicInfo/TipDescription';
import BusinessHours from './BusinessHours';
import ExternalLinks from './ExternalLinks';
import RestaurantRecommendationList from './RestaurantRecommendationList';

const ArticleBody = ({ source, dataUrl }: { source: AttractionArticle['source']; dataUrl: string }) => {
  const today = new Date().getDay();
  return (
    <Container margin="m" applyMargin="left-right">
      <ArticleDescription comment={source?.comment} />
      <RestaurantRecommendationList
        restaurantRecommendations={source?.recommendations}
        regionId={source.regionId}
        dataUrl={dataUrl}
      />
      <BasicInfoSection
        coordinates={source?.geolocation.coordinates}
        directions={source?.directions}
        basicInfo={{
          dataUrl,
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
    </Container>
  );
};

export default ArticleBody;
