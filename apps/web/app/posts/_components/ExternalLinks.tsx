'use client';
import { AnimatedCard, BlurImageOnLoad } from '@tripie-pyotato/design-system/@components';
import { Divider, Stack, TripieCard } from '@tripie-pyotato/design-system/@core';

import { ExternalLink } from 'models/Link';
import { useRouter } from 'next/navigation';
import ArticleHeading from './Elements/Header';
import ArticleText from './Elements/Text';

const ExternalLinkCard = ({ link, index }: { link: ExternalLink; index: number }) => {
  const navigate = useRouter();

  return (
    <AnimatedCard key={link.url + index} onClick={() => navigate.push(link.url)}>
      <TripieCard sizes="full" margin="none">
        <Stack gap="l" alignItems="start" display="grid" gridWrapOn={{ 'wrap-md': 1 }} cols={2}>
          <BlurImageOnLoad
            withBorder={true}
            aspectRatio={'square'}
            sizes="card"
            src={link.imageUrl}
            alt={link.imageUrl}
          />
          <TripieCard.Content margin="none">
            <ArticleHeading item={{ type: 'heading3', value: { text: link.title } }} />
            <ArticleText item={{ type: 'text', value: { text: link.publisher } }} />
          </TripieCard.Content>
        </Stack>
      </TripieCard>
    </AnimatedCard>
  );
};

const ExternalLinks = ({ externalLinks }: { externalLinks: ExternalLink[] }) => {
  return (
    <>
      <Divider.Article item={{ type: 'hr2' }} />
      <ArticleHeading item={{ type: 'heading2', value: { text: '소셜 리뷰' } }} />
      <Stack direction="column" gap="l" margin="none">
        {externalLinks.map((link, index) => (
          <ExternalLinkCard link={link} index={index} key={link.url + index} />
        ))}
      </Stack>
    </>
  );
};
export default ExternalLinks;
