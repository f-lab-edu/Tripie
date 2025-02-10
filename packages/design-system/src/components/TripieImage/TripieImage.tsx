'use client';
import classNames from 'classnames/bind';

import Image from 'next/image';
import { RefObject, useState } from 'react';
import Container from '../Container';
import Text from '../Text';
import Style from './tripie-image.module.scss';

const cx = classNames.bind(Style);

export type ImageSizes = 'default' | 'full' | 'large' | 'medium' | 'small' | 'tiny' | 'icon' | 'card';

const TripieImage = ({
  alt,
  src,
  ref,
  sizes = 'default',
  className,
  withBorder = true,
  blurDataURL,
  fill = true,
}: {
  alt: string;
  src?: string;
  ref?: RefObject<any>;
  className?: string;
  sizes?: ImageSizes;
  blurDataURL?: string;
  withBorder?: boolean;
  fill?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  if (blurDataURL == null) {
    return (
      <Container margin="none" className={cx('tripie-image', 'img-wrap', sizes, className)} ref={ref}>
        <img
          className={cx('tripie-image', 'img-wrap', sizes, withBorder && 'with-border')}
          src={src}
          alt={`${alt}의 이미지일 수 있음`}
          onLoad={() => setIsLoading(false)}
        />
      </Container>
    );
  }

  return (
    <Container margin="none" className={cx('tripie-image', 'img-wrap', sizes, withBorder && 'with-border', className)}>
      <Image
        src={src}
        alt={alt}
        sizes={'(min-width:640px) 50vw, 100vw'}
        placeholder="blur"
        fill={fill}
        blurDataURL={blurDataURL}
        ref={ref}
      />
    </Container>
  );
};

const ImageWithSourceUrl = ({
  alt,
  src,
  ref,
  className,
  sizes = 'medium',
  sourceUrl,
  withBorder = true,
  blurDataURL,
}: {
  alt: string;
  src?: string;
  ref?: RefObject<any>;
  className?: string;
  sourceUrl: string;
  sizes?: ImageSizes;
  withBorder?: boolean;
  blurDataURL?: string;
}) => {
  return (
    <Container margin="none" className={cx('img-wrap', withBorder ?? 'with-border', className)}>
      <TripieImage src={src} alt={alt} ref={ref} sizes={sizes} blurDataURL={blurDataURL} />
      <Text className={cx('source-url', 'img-source')}>{`출처 ${sourceUrl}`}</Text>
    </Container>
  );
};

TripieImage.WithSourceUrl = ImageWithSourceUrl;

export default TripieImage;
