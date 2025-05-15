import { classNames } from '../../../wrappers';

import { BlurImageOnLoad } from '@components';
import Text from '@core/data-display/Text';
import { ImgHTMLAttributes } from 'react';
import TripieContainer from '../../layout/TripieContainer/TripieContainer';
import Style from './tripie-image.module.scss';

const cx = classNames.bind(Style);

export type ImageSizes = 'default' | 'full' | 'large' | 'medium' | 'small' | 'tiny' | 'icon' | 'card';
export type AspectRatio = 'square' | 'standard' | 'photo' | 'landscape' | 'banner' | 'portrait' | 'cinematic';

export type ImageProps = {
  alt: string;
  src?: string;
  refs?: (node?: Element | null | undefined) => void;
  className?: string;
  sizes?: ImageSizes;
  blurDataURL?: string;
  withBorder?: boolean;
  loading?: ImgHTMLAttributes<HTMLImageElement>['loading']; // https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/?utm_source=lighthouse&utm_medium=devtools

  aspectRatio?: AspectRatio;
} & Partial<ImgHTMLAttributes<HTMLImageElement>>;

const TripieImage = ({
  alt,
  src,
  refs,
  sizes = 'default',
  className,
  withBorder = true,
  loading,
  aspectRatio = 'standard',
}: ImageProps) => {
  console.log(src);

  return (
    <TripieContainer
      margin="none"
      className={cx('tripie-image', 'img-wrap', sizes, `image-ratio-${aspectRatio}`, className)}
    >
      <BlurImageOnLoad
        withBorder={withBorder}
        src={src}
        alt={alt}
        refs={refs}
        sizes={sizes}
        loading={loading}
        aspectRatio={aspectRatio}
      />
    </TripieContainer>
  );
};

export type ImageWithSourceUrlProps = ImageProps & {
  sourceUrl?: string;
};

const ImageWithSourceUrl = ({
  alt,
  src,
  refs,
  className,
  sizes = 'medium',
  sourceUrl,
  withBorder = true,
  loading,
  aspectRatio = 'standard',
}: ImageWithSourceUrlProps) => {
  return (
    <TripieContainer margin="none" className={cx('img-wrap', className)}>
      <BlurImageOnLoad
        withBorder={withBorder}
        src={src}
        alt={alt}
        refs={refs}
        sizes={sizes}
        loading={loading}
        aspectRatio={aspectRatio}
      />
      <Text className={cx('source-url', 'img-source')}>{`출처 ${sourceUrl}`}</Text>
    </TripieContainer>
  );
};

TripieImage.WithSourceUrl = ImageWithSourceUrl;

export default TripieImage;
