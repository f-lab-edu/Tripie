'use client';
import { Carousel } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@core';

import { EmbeddedProps } from 'models/Props';
import ArticleCard from './ArticleCard';

const ArticleEmbedded = ({ item, regionId, dataUrl }: { item: EmbeddedProps; regionId: string; dataUrl: string }) => {
  return (
    <Container applyMargin="top" gap="none">
      <Carousel.Controlled>
        {item.value?.entries?.map((content, index) => (
          <ArticleCard
            sizes={item.value?.entries?.length >= 3 ? 'card' : 'full'}
            item={content}
            key={index + JSON.stringify(content)}
            regionId={regionId}
            dataUrl={dataUrl}
          />
        ))}
      </Carousel.Controlled>
    </Container>
  );
};

export default ArticleEmbedded;
