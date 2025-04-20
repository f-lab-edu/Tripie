'use client';
import { Divider } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@components/core';

import { RestaurantRecommendation } from 'models/Attraction';
import ArticleImages from './Elements/ArticleImages';
import ArticleHeading from './Elements/Header';
import ArticleLink from './Elements/Link';
import ArticleText from './Elements/Text';

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
        <Container margin="none" key={index + recommendation.id}>
          <Container margin="none">
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
          </Container>
          {index !== restaurantRecommendations.length - 1 ? <Divider.Article item={{ type: 'hr3' }} /> : null}
        </Container>
      ))}
      <Divider.Article item={{ type: 'hr1' }} />
    </>
  );
};

export default RestaurantRecommendationList;
