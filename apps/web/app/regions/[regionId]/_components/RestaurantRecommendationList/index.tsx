'use client';
import { Container } from '@tripie-pyotato/design-system';

import ArticleDivider from 'app/regions/_components/Elements/Divider';
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
          {index !== restaurantRecommendations.length - 1 ? <ArticleDivider item={{ type: 'hr3' }} /> : null}
        </Container>
      ))}
      <ArticleDivider item={{ type: 'hr1' }} />
    </>
  );
};

export default RestaurantRecommendationList;
