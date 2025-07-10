import { Text } from '@core';
import TripieContainer from '@core/layout/TripieContainer';

import { ImgHTMLAttributes, useEffect, useState } from 'react';
import { CLOUDINARY_URL } from 'shared';
import { classNames, Motion } from '../../../wrappers';
import Style from './image.module.scss';

export type ImageSizes = 'default' | 'full' | 'large' | 'medium' | 'small' | 'tiny' | 'icon' | 'card' | 'avatar';
export type AspectRatio = 'square' | 'standard' | 'photo' | 'landscape' | 'banner' | 'portrait' | 'cinematic';

export type ImageProps = {
  alt: string;
  src?: string;
  refs?: (node?: Element | null | undefined) => void;
  className?: string;
  sizes?: ImageSizes;
  blurDataURL?: string;
  withBorder?: boolean;
  cloudinaryUrl?: string;
  preload?: boolean;
  loading?: ImgHTMLAttributes<HTMLImageElement>['loading']; // https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/?utm_source=lighthouse&utm_medium=devtools
  aspectRatio?: AspectRatio;
} & Partial<ImgHTMLAttributes<HTMLImageElement>>;

const cx = classNames.bind(Style);

const preloadImage = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = reject;
  });

const BlurImageOnLoad = ({
  src,
  refs,
  loading,
  sizes,
  preload = true,
  withBorder,
  aspectRatio,
  className,
  alt,
  cloudinaryUrl = CLOUDINARY_URL(),
  ...args
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (!preload) {
      setLoaded(true);
      return;
    }

    if (src != null && src.startsWith(cloudinaryUrl)) {
      preloadImage(src)
        .then(() => {
          if (isMounted) setLoaded(true);
        })
        .catch(err => {
          console.error('Image preload failed:', err);
        });
    }

    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <TripieContainer
      margin="none"
      className={cx('tripie-image', 'img-wrap', sizes, `image-ratio-${aspectRatio}`, className)}
      {...args}
    >
      <Motion.Img
        ref={refs}
        alt=""
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        width={'100%'}
        height={'auto'}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          opacity: 1,
          zIndex: 1,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={cx('tripie-image', 'img-wrap', sizes, `with${withBorder ? '' : '-no'}-border`, className)}
      />
      {!loaded ? null : (
        <Motion.Img
          src={src?.replace('e_blur:2000,q_1,', 'q_auto,')}
          loading="lazy"
          alt={alt}
          ref={refs}
          width={'100%'}
          height={'auto'}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          animate={{ opacity: loaded ? 1 : 0, zIndex: loaded ? 2 : 0 }}
          transition={{ duration: 0.4, ease: 'easeIn' }}
          className={cx('tripie-image', 'img-wrap', sizes, withBorder && 'with-border', className)}
          style={{
            display: 'block',
            objectFit: 'cover',
          }}
        />
      )}
    </TripieContainer>
  );
};

export type ImageWithSourceUrlProps = ImageProps & {
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
  loading,
  aspectRatio = 'standard',
  cloudinaryUrl = CLOUDINARY_URL(),
  preload = true,
  ...args
}: ImageWithSourceUrlProps) => {
  return (
    <TripieContainer margin="none" {...args} className={cx('img-wrap', className)}>
      <BlurImageOnLoad
        withBorder={withBorder}
        src={src}
        alt={alt}
        preload={preload}
        refs={refs}
        sizes={sizes}
        loading={loading}
        cloudinaryUrl={cloudinaryUrl}
        aspectRatio={aspectRatio}
      />
      <Text className={cx('source-url', 'img-source')}>{`출처 ${sourceUrl}`}</Text>
    </TripieContainer>
  );
};

BlurImageOnLoad.WithSourceUrl = ImageWithSourceUrl;

export default BlurImageOnLoad;
