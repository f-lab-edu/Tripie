'use server';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { Image } from 'models/Attraction';
import Card from 'shared/components/Card/Card';
import Style from './attraction-thumbnail.module.scss';

const cx = classNames.bind(Style);

const AttractionThumbnail = ({ sizes }: { sizes: Image['sizes'] }) => {
  return (
    <Container margin="l" applyMargin="all" className={cx('img-container')}>
      <Card.Content className={cx('img-wrap')}>
        <img src={sizes.full?.url == null ? sizes.large?.url : sizes.full?.url} alt={'thumbnail'} />
      </Card.Content>
    </Container>
  );
};

export default AttractionThumbnail;
