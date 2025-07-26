'use client';
import { AnimatedCard, Card } from '@tripie-pyotato/design-system/@components';
import { Text } from '@tripie-pyotato/design-system/@core';
// import { useDebounce } from '@tripie-pyotato/hooks';
import useImgAlt from 'hooks/useImgAlt';
import { RegionArticleInfo } from 'models/Article';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { Dispatch, SetStateAction, startTransition } from 'react';
// import { startTransition } from 'react';

export type RegionArticleData = { regionId: string; data: RegionArticleInfo[] };

const RegionCard = ({
  article,
  // setSplash,
}: {
  // setSplash?: Dispatch<SetStateAction<boolean>>;
  article: RegionArticleInfo;
}) => {
  // const [splash, setSplash] = useState(false);
  // const router = useRouter();
  const { alt } = useImgAlt({ imgUrl: article.source.image.sizes.full.url });

  // const handleClick = debounce(() => {
  // console.log(`/posts/${article.source.regionId}/articles/${article.id}`);
  //   if (!setSplash) {
  //     router.push(`/posts/${article.source.regionId}/articles/${article.id}`);
  //     return;
  //   }

  //   let didNavigate = false;
  //   const timeout = setTimeout(() => {
  //     if (!didNavigate) {
  //       setSplash(true);
  //     }
  //   }, 0); // Customize threshold

  // startTransition(() => {
  // router.push(`/posts/${article.source.regionId}/articles/${article.id}`);
  // didNavigate = true;
  // clearTimeout(timeout);
  // });
  // });

  // const handleClick = useDebounce(() => {
  //   console.log(`/posts/${article.source.regionId}/articles/${article.id}`);
  //   //   if (!setSplash) {
  //   //     router.push(`/posts/${article.source.regionId}/articles/${article.id}`);
  //   //     return;
  //   //   }

  //   //   let didNavigate = false;
  //   //   const timeout = setTimeout(() => {
  //   //     if (!didNavigate) {
  //   //       setSplash(true);
  //   //     }
  //   //   }, 0); // Customize threshold

  //   // startTransition(() => {
  //   router.push(`/posts/${article.source.regionId}/articles/${article.id}`);
  //   // didNavigate = true;
  //   // clearTimeout(timeout);
  //   // });
  // });

  return (
    <Link href={`/posts/${article.source.regionId}/articles/${article.id}`}>
      <AnimatedCard>
        <Card.WithImage
          margin="none"
          alignItems="stretch"
          cover={true}
          sizes={'full'}
          imgSize={'full'}
          aspectRatio={'square'}
          src={article.source.image.sizes.small_square.url
            .replace('https://res.cloudinary.com', 'https://media.tripie-api.shop')
            .replace('.jpeg', '')}
          alt={alt}
          cloudinaryUrl="https://media.tripie-api.shop"
        >
          <Card.Header size={'large'} bold={true}>
            <Text size="small">{article?.source?.title}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Content padding="m">
            <Text size="small">{article?.source?.summary}</Text>
          </Card.Content>
        </Card.WithImage>
      </AnimatedCard>
    </Link>
  );
};

export default RegionCard;
