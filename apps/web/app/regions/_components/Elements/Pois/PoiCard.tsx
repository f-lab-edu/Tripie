'use client';
import { Container, Text } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import POI_TYPE from 'constants/triple';
import { Poi } from 'models/Aws';
import { RefObject, useEffect } from 'react';
import Card from 'shared/components/Card/Card';
import ArticleHeading from '../Header';
import Style from './poi-card.module.scss';

import RESOURCE from 'constants/resources';
import useImgAlt from 'hooks/useImgAlt';
import ArticleText from '../Text';

export type PoisProps = { type: 'pois'; value: { pois: Array<Poi> } };

const cx = classNames.bind(Style);

const PoiCard = ({
  poi,
  selected,
  action,
  cardRef,
  className,
}: {
  poi: Poi;
  selected: boolean;
  action: () => void;
  cardRef: RefObject<HTMLDivElement>;
  className?: string;
}) => {
  const { alt } = useImgAlt({ imgUrl: poi.source.image?.sizes.full.url });
  useEffect(() => {
    // 선택한 카드로 이동
    if (selected && cardRef.current) {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selected, cardRef]);

  return (
    <Card.ClickableContent
      ref={cardRef}
      className={cx('embedded-card', 'poi-card', className)}
      selected={selected}
      onClick={action}
    >
      <Card.Content className={cx('img-wrap')}>
        {poi.source.image == null ? (
          <img src={RESOURCE.PLACEHOLDER} alt={'place-holder'} />
        ) : (
          <img src={poi.source.image?.sizes.full.url} alt={alt} />
        )}

        <Container className={cx('img-source')} margin="none">
          {poi.source.image?.sourceUrl != null ? (
            <Text className={cx('source-url', 'poi-img-source-ref')}>{`출처 ${poi.source.image.sourceUrl}`}</Text>
          ) : null}
        </Container>
      </Card.Content>
      <ArticleHeading item={{ type: 'heading3', value: { text: poi.source.names.ko } }} />
      <ArticleText item={{ type: 'text', value: { text: poi.source.comment } }} />
      <ArticleText item={{ type: 'text', value: { text: POI_TYPE[poi.type] } }} />
      <ArticleText
        item={{
          type: 'text',
          value: {
            text: `${poi.region.source.names.ko}${poi.source.areas[0]?.name != null ? poi.source.areas[0]?.name : ''}`,
          },
        }}
      />
    </Card.ClickableContent>
  );
};

export default PoiCard;
