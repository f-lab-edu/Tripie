'use client';
import { Container } from '@tripie-pyotato/design-system';

import ArticleDivider from 'app/regions/_components/Elements/Divider';
import ArticleHeading from 'app/regions/_components/Elements/Header';
import ArticleText from 'app/regions/_components/Elements/Text';
import classNames from 'classnames/bind';
import { ExternalLink } from 'models/Attraction';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Card from 'shared/components/Card/Card';
import Style from './external-links.module.scss';

const cx = classNames.bind(Style);

const ExternalLinks = ({ externalLinks }: { externalLinks: ExternalLink[] }) => {
  const navigate = useRouter();
  if (externalLinks.length === 0) {
    return null;
  }

  return (
    <>
      <ArticleDivider item={{ type: 'hr2' }} />
      <ArticleHeading item={{ type: 'heading2', value: { text: '소셜 리뷰' } }} />
      {externalLinks.map((link, index) => (
        <Card key={link.url + index} className={cx('attraction-card-wrap')}>
          <Card.ClickableContent className={cx('attraction-card')} onClick={() => navigate.push(link.url)}>
            <Container className={cx('attraction-img-wrap')} margin="none">
              {/*일반 이미지 태그로는 blogthumb.pstatic.net가 403로 뜨는 이슈가 있음. next.config에서 이미지 설정*/}
              <Image
                src={link.imageUrl}
                alt={link.imageUrl}
                width={600}
                height={600}
                className={cx('attraction-img')}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              />
            </Container>
            <Container margin="none" className={cx('attraction-card-text')}>
              <ArticleHeading item={{ type: 'heading3', value: { text: link.title } }} />
              <ArticleText item={{ type: 'text', value: { text: link.publisher } }} />
            </Container>
          </Card.ClickableContent>
        </Card>
      ))}
    </>
  );
};
export default ExternalLinks;
