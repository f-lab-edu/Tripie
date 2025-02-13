'use client';
import { Card, Container, Divider, TripieImage } from '@tripie-pyotato/design-system';

import ArticleHeading from 'app/regions/_components/Elements/Header';
import ArticleText from 'app/regions/_components/Elements/Text';
import classNames from 'classnames/bind';

import { ExternalLink } from 'models/Link';
import { useRouter } from 'next/navigation';
import Style from './external-links.module.scss';

const cx = classNames.bind(Style);

const ExternalLinkCard = ({ link, index }: { link: ExternalLink; index: number }) => {
  const navigate = useRouter();
  return (
    <Card key={link.url + index} className={cx('attraction-card-wrap')}>
      <Card.ClickableContent className={cx('attraction-card')} onClick={() => navigate.push(link.url)}>
        <TripieImage
          className={cx('attraction-img-wrap')}
          src={link.imageUrl}
          alt={link.imageUrl}
          blurDataURL={link.blurData?.data}
        />
        <Container margin="none" className={cx('attraction-card-text')}>
          <ArticleHeading item={{ type: 'heading3', value: { text: link.title } }} />
          <ArticleText item={{ type: 'text', value: { text: link.publisher } }} />
        </Container>
      </Card.ClickableContent>
    </Card>
  );
};

const ExternalLinks = ({ externalLinks }: { externalLinks: ExternalLink[] }) => {
  return (
    <>
      <Divider.Article item={{ type: 'hr2' }} />
      <ArticleHeading item={{ type: 'heading2', value: { text: '소셜 리뷰' } }} />
      {externalLinks.map((link, index) => (
        <ExternalLinkCard link={link} index={index} key={link.url + index} />
      ))}
    </>
  );
};
export default ExternalLinks;
