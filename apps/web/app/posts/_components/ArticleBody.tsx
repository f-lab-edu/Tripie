'use client';

import { Container } from '@tripie-pyotato/design-system/@components';

import { AttractionArticle } from 'models/Attraction';
import ArticleDescription from './ArticleDescription';
import BasicInfoSection from './BasicInfoSection';
import BusinessHours from './BusinessHours';
import ExternalLinks from './ExternalLinks';
import FeeDescription from './FeeDescription';
import RestaurantRecommendationList from './RestaurantRecommendationList';
import TipDescription from './TipDescription';

const ArticleBody = ({ source, dataUrl }: { source: AttractionArticle['source']; dataUrl: string }) => {
  return (
    <Container margin="none">
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
      <BusinessHours readableBusinessHours={source?.readableBusinessHours} />
      <FeeDescription feeComment={source?.feeComment} />
      <TipDescription tips={source?.tips} />
      {source.externalLinks.length === 0 ? null : <ExternalLinks externalLinks={source.externalLinks} />}
    </Container>
  );
};

export default ArticleBody;
