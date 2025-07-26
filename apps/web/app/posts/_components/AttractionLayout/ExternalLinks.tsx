'use client';
import { AnimatedCard, BlurImageOnLoad, Card, Divider } from '@tripie-pyotato/design-system/@components';
import { Stack } from '@tripie-pyotato/design-system/@core';

import { ExternalLink } from 'models/Link';
import { useRouter } from 'next/navigation';
import ArticleHeading from '../ArticleLayout/Header';
import ArticleText from '../ArticleLayout/Text/Text';

const ExternalLinkCard = ({ link, index }: { link: ExternalLink; index: number }) => {
  const navigate = useRouter();

  return (
    <AnimatedCard key={link.url + index} onClick={() => navigate.push(link.url)}>
      <Card sizes="full" margin="none">
        <Stack gap="l" alignItems="start" display="grid" gridWrapOn={{ 'wrap-md': 1 }} cols={2}>
          <BlurImageOnLoad
            withBorder={true}
            aspectRatio={'square'}
            sizes="card"
            src={link?.imageUrl
              .replace('https://res.cloudinary.com', 'https://media.tripie-api.shop')
              .replace('.jpeg', '')}
            alt={link.imageUrl}
            cloudinaryUrl={'https://media.tripie-api.shop'}
          />
          <Card.Content margin="none">
            <ArticleHeading item={{ type: 'heading4', value: { text: link.title } }} />
            <ArticleText item={{ type: 'text', value: { text: link.publisher } }} />
          </Card.Content>
        </Stack>
      </Card>
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
