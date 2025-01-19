'use server';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { Image as AttractionImage } from 'models/Image';
import Image from 'next/image';
import Card from 'shared/components/Card/Card';
import Style from './attraction-thumbnail.module.scss';

const cx = classNames.bind(Style);

const AttractionThumbnail = ({ sizes }: { sizes: AttractionImage['sizes'] }) => {
  return (
    <Container margin="l" applyMargin="all" className={cx('img-container')}>
      <Card.Content className={cx('img-wrap')}>
        <Image
          src={sizes.full?.url == null ? sizes.large?.url : sizes.full?.url}
          alt={'thumbnail'}
          height={2048}
          width={2048}
          priority={true}
          // placeholder={RESOURCE.LOADING_IMG}
          // placeholder="blur"
          // blurDataURL={`data:image/svg+xml;base64,${toBase64(
          //   convertImage(700, 475)
          // )}`}
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
        {/* <img src={sizes.full?.url == null ? sizes.large?.url : sizes.full?.url} alt={'thumbnail'} /> */}
      </Card.Content>
    </Container>
  );
};

export default AttractionThumbnail;
