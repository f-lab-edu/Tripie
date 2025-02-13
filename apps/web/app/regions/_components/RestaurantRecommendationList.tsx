'use client';
import { Divider, TripieContainer } from '@tripie-pyotato/design-system';

import ArticleHeading from 'app/regions/_components/Elements/Header';
import ArticleImages from 'app/regions/_components/Elements/Images';
import ArticleLink from 'app/regions/_components/Elements/Link';
import ArticleText from 'app/regions/_components/Elements/Text';
import { RestaurantRecommendation } from 'models/Attraction';

const RestaurantRecommendationList = ({
  restaurantRecommendations,
  regionId,
  dataUrl,
}: {
  restaurantRecommendations: RestaurantRecommendation[];
  regionId: string;
  dataUrl: string;
}) => {
  if (restaurantRecommendations == null || restaurantRecommendations.length === 0) {
    return null;
  }
  return (
    <>
      {restaurantRecommendations.map((recommendation, index) => (
        <TripieContainer margin="none" key={index + recommendation.id}>
          <TripieContainer margin="none">
            <ArticleHeading item={{ type: 'heading3', value: { text: recommendation.title } }} />
            <ArticleImages item={{ type: 'images', value: { images: [recommendation.image] } }} />
            <ArticleText item={{ type: 'text', value: { text: recommendation.description } }} />
            {recommendation.link != null ? (
              <ArticleLink
                item={{
                  type: 'links',
                  value: { links: [{ href: recommendation.link.href, label: recommendation.link.label }] },
                }}
                regionId={regionId}
                dataUrl={dataUrl}
              />
            ) : null}
            {recommendation?.comment != null ? (
              <ArticleText item={{ type: 'text', value: { text: recommendation.comment } }} />
            ) : null}
          </TripieContainer>
          {index !== restaurantRecommendations.length - 1 ? <Divider.Article item={{ type: 'hr3' }} /> : null}
        </TripieContainer>
      ))}
      <Divider.Article item={{ type: 'hr1' }} />
    </>
  );
};

export default RestaurantRecommendationList;
