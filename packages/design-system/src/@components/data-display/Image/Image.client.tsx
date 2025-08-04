'use client';

import { Text } from '@core';
import TripieContainer, { TripieContainerProps } from '@core/layout/TripieContainer';

import { ImgHTMLAttributes, useEffect, useState } from 'react';
import { CLOUDINARY_URL } from 'shared';
import { classNames, Motion, useInView } from '../../../wrappers';
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
} & Partial<ImgHTMLAttributes<HTMLImageElement>> &
  TripieContainerProps;

const cx = classNames.bind(Style);

const preloadImage = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = reject;
  });

const getSize = (src: string) => {
  const height = +String(src.match(/h_\d+/g)?.[0]?.replace('h_', ''));
  const width = +String(src.match(/w_\d+/g)?.[0]?.replace('w_', ''));
  return { height: Number.isNaN(height) ? 'auto' : height, width: Number.isNaN(width) ? '100%' : width };
};

const BlurImageOnLoad = ({
  src,
  refs,
  loading = 'lazy',
  sizes,
  preload = true,
  withBorder,
  aspectRatio,
  className,
  alt,
  fillAvailable = true,
  cloudinaryUrl = CLOUDINARY_URL(),
  ...args
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView();

  const [dimension, setDimension] = useState<{
    width: string | number;
    height: string | number;
  }>({ width: '100%', height: 'auto' });

  useEffect(() => {
    if (src != null && !fillAvailable) {
      setDimension(getSize(src));
    }
  }, [src]);

  useEffect(() => {
    let isMounted = true;
    if (!preload) {
      setLoaded(true);
      return;
    }

    if (src != null && src.startsWith(cloudinaryUrl) && inView && !loaded) {
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
  }, [src, inView]);

  return (
    <TripieContainer
      margin="none"
      ref={ref}
      style={{ ...dimension }}
      className={cx('tripie-image', sizes, `image-ratio-${aspectRatio}`, className)}
      {...args}
    >
      <Motion.Img
        ref={refs}
        alt=""
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        width={dimension.width}
        height={dimension.height}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          opacity: 1,
          zIndex: 1,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={cx('tripie-image', sizes, `with${withBorder ? '' : '-no'}-border`, className)}
      />
      {!loaded ? null : (
        <Motion.Img
          src={src?.replace('e_blur:2000,q_1,', 'q_auto,')}
          loading={loading}
          alt={alt}
          ref={refs}
          width={dimension.width}
          height={dimension.height}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          animate={{ opacity: loaded ? 1 : 0, zIndex: loaded ? 2 : 0 }}
          transition={{ duration: 0.4, ease: 'easeIn' }}
          className={cx('tripie-image', sizes, withBorder && 'with-border', className)}
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
  padding = 'none',
  display = 'inline-block',
  ...args
}: ImageWithSourceUrlProps) => {
  return (
    <TripieContainer margin="none" {...args} display={display} padding={padding} className={cx(className)}>
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
      <Text className={cx('source-url')}>{`출처 ${sourceUrl}`}</Text>
    </TripieContainer>
  );
};

BlurImageOnLoad.WithSourceUrl = ImageWithSourceUrl;

export default BlurImageOnLoad;
