'use server';
import { Card, Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { Image as AttractionImage } from 'models/Image';
import Image from 'next/image';
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
        />
      </Card.Content>
    </Container>
  );
};

export default AttractionThumbnail;
