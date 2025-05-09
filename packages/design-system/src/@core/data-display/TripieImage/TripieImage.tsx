import { classNames } from '../../../wrappers';

import { PLACEHOLDER } from '../../../shared/resource';

import Text from '@core/data-display/Text';
import { ImgHTMLAttributes } from 'react';
import TripieContainer from '../../layout/TripieContainer/TripieContainer';
import Style from './tripie-image.module.scss';

const cx = classNames.bind(Style);

export type ImageSizes = 'default' | 'full' | 'large' | 'medium' | 'small' | 'tiny' | 'icon' | 'card';

export type ImageProps = {
  alt: string;
  src?: string;
  refs?: (node?: Element | null | undefined) => void;
  className?: string;
  sizes?: ImageSizes;
  blurDataURL?: string;
  withBorder?: boolean;
  loading?: ImgHTMLAttributes<HTMLImageElement>['loading']; // https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/?utm_source=lighthouse&utm_medium=devtools
  // fill?: boolean;
};

const TripieImage = ({
  alt,
  src,
  refs,
  sizes = 'default',
  className,
  withBorder = true,
  blurDataURL,
  loading,
  // fill = true,
}: ImageProps) => {
  console.log(blurDataURL);
  return (
    <TripieContainer
      margin="none"
      className={cx('tripie-image', 'img-wrap', sizes, withBorder && 'with-border', className)}
    >
      <img
        className={cx('tripie-image', 'img-wrap', sizes, withBorder && 'with-border')}
        src={src ?? PLACEHOLDER}
        alt={`${alt}의 이미지일 수 있음`}
        ref={refs}
        loading={loading}
        crossOrigin="anonymous"
      />
      {/* {blurDataURL == null ? (
        <img
          className={cx('tripie-image', 'img-wrap', sizes, withBorder && 'with-border')}
          src={src ?? PLACEHOLDER}
          alt={`${alt}의 이미지일 수 있음`}
        />
      ) : (
        <Image
          src={src ?? PLACEHOLDER}
          className={cx('tripie-image', 'img-wrap', sizes, withBorder && 'with-border')}
          alt={alt}
          sizes={'(min-width:640px) 50vw, 100vw'}
          placeholder="blur"
          fill={fill}
          blurDataURL={blurDataURL}
          ref={refs}
        />
      )} */}
    </TripieContainer>
  );
};

export type ImageWithSourceUrlProps = ImageProps & {
  blurDataURL?: string;
  sourceUrl: string;
};

const ImageWithSourceUrl = ({
  alt,
  src,
  refs,
  className,
  sizes = 'medium',
  sourceUrl,
  withBorder = true,
  blurDataURL,
  loading,
}: ImageWithSourceUrlProps) => {
  return (
    <TripieContainer margin="none" className={cx('img-wrap', withBorder ?? 'with-border', className)}>
      <TripieImage src={src} alt={alt} refs={refs} sizes={sizes} loading={loading} blurDataURL={blurDataURL} />
      <Text className={cx('source-url', 'img-source')}>{`출처 ${sourceUrl}`}</Text>
    </TripieContainer>
  );
};

TripieImage.WithSourceUrl = ImageWithSourceUrl;

export default TripieImage;
