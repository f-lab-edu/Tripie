'use client';
// https://mui.com/material-ui/react-card/

import { Stack } from '@core/layout';
import { classNames } from '../../../wrappers';

import { BlurImageOnLoad } from '@components/data-display';
import { Divider, DividerProps, ImageProps, ImageSizes, Text, TextProps } from '@core';

import TripieContainer, { TripieContainerProps } from '@core/layout/TripieContainer';
import { MutableRefObject } from 'react';
import { CustomAnimationProps } from '../AnimatedCard';
import Style from './card.module.scss';

const cx = classNames.bind(Style);

export type CardProps = { withNoise?: boolean; sizes?: ImageSizes } & Partial<TripieContainerProps>;

const CardContent = ({
  children,
  className,
  ref,
  margin = 'none',
  padding = 'm',
  justifyContent,
  applyPadding,
  alignItems,
  preserveWhiteSpace,
  applyMargin,
}: Readonly<Partial<Omit<CustomAnimationProps, 'refs'> & { ref?: MutableRefObject<HTMLDivElement | null> }>>) => {
  return (
    <TripieContainer
      padding={padding}
      margin={margin}
      justifyContent={justifyContent}
      alignItems={alignItems}
      preserveWhiteSpace={preserveWhiteSpace}
      applyMargin={applyMargin}
      applyPadding={applyPadding}
      ref={ref}
      className={cx('with-border', 'inner-wrap', className)}
    >
      {children}
    </TripieContainer>
  );
};

export type CardDividerProps = DividerProps & Partial<TripieContainerProps>;

const CardDivider = ({ className, applyMargin = 'left-right', ...args }: CardDividerProps) => {
  return (
    <TripieContainer className={cx('', className)} applyMargin={applyMargin} {...args}>
      <Divider className={cx(className)} />
    </TripieContainer>
  );
};

export type CardHeaderProps = Omit<TextProps, 'isButtonText'> & Partial<TripieContainerProps>;

const CardHeader = ({
  children,
  className,
  padding,
  alignItems = 'center',
  applyMargin,
  applyPadding,
  margin,
  size,
  gap = 'sm',
  ...args
}: Omit<TextProps, 'isButtonText'>) => {
  return (
    <TripieContainer padding={padding} applyPadding={applyPadding} applyMargin={applyMargin} margin={margin}>
      <Text className={cx(className)} {...args} size={size} isButtonText={true}>
        {children}
      </Text>
    </TripieContainer>
  );
};

const CardDescription = ({
  children,
  className,
  margin = 'none',
  padding = 'none',
  justifyContent,
  applyPadding,
  alignItems,
  preserveWhiteSpace,
  applyMargin,
  withBorder = true,
}: Readonly<TripieContainerProps>) => {
  return (
    <TripieContainer
      padding={padding}
      justifyContent={justifyContent}
      applyMargin={applyMargin}
      alignItems={alignItems}
      applyPadding={applyPadding}
      preserveWhiteSpace={preserveWhiteSpace}
      margin={margin}
      withBorder={withBorder}
      className={cx('inner-wrap', 'with-description', className)}
    >
      {children}
    </TripieContainer>
  );
};

export type CardWithImageProps = CardProps &
  ImageProps & { cover?: boolean; imgSize: ImageProps['sizes']; sourceUrl?: string };

const CardWithImage = ({
  children,
  className,
  src,
  alt,
  withNoise = true,
  cover = false,
  sizes = 'card',
  imgSize = 'card',
  aspectRatio,
  sourceUrl,
  ...args
}: CardWithImageProps) => {
  return (
    <TripieContainer withBorder={true} {...args} className={cx('outer-wrap', `card-size-${sizes}`, className)}>
      <Stack zIndex="default" margin="none" direction="column" className={cx('inner-wrap', className)}>
        <TripieContainer margin="none" className={cx('img-wrap')}>
          <TripieContainer margin={cover ? 'none' : 'm'} padding={cover ? 'none' : 'm'}>
            {sourceUrl == null ? (
              <BlurImageOnLoad aspectRatio={aspectRatio} sizes={imgSize} src={src} alt={alt} withBorder={!cover} />
            ) : (
              <BlurImageOnLoad.WithSourceUrl
                sourceUrl={sourceUrl}
                aspectRatio={aspectRatio}
                sizes={imgSize}
                src={src}
                alt={alt}
                withBorder={!cover}
              />
            )}
          </TripieContainer>
        </TripieContainer>

        {children}
      </Stack>
      {withNoise ? (
        <TripieContainer margin="none" padding="none" className={cx('noise')} zIndex="base"></TripieContainer>
      ) : null}
    </TripieContainer>
  );
};

const Card = ({ children, className, withNoise = true, sizes = 'card', ...args }: CardProps) => {
  return (
    <TripieContainer withBorder={true} {...args} className={cx('outer-wrap', `card-size-${sizes}`, className)}>
      <Stack zIndex="default" direction="column" className={cx('inner-wrap', className)}>
        {children}
      </Stack>
      {withNoise ? (
        <TripieContainer margin="none" padding="none" className={cx('noise')} zIndex="base"></TripieContainer>
      ) : null}
    </TripieContainer>
  );
};

// const Card = ({
//   duration,
//   replays,
//   delay = 0.3,
//   children,
//   className,
//   applyPadding,
//   margin = 'none',
//   padding,
//   justifyContent,
//   alignItems,
//   refs,
//   preserveWhiteSpace,
//   applyMargin,
//   withSlideAnimation=false
// }: Partial<CustomAnimationProps>&{withSlideAnimation:boolean}) => {
//   if(withSlideAnimation){
//     return (
//       <MotionSlideUp
//         delay={delay}
//         duration={duration}
//         replays={replays}
//         className={cx('with-border', 'outer-wrap', className)}
//       >
//         <TripieContainer
//           padding={padding}
//           margin={margin}
//           justifyContent={justifyContent}
//           alignItems={alignItems}
//           refs={refs}
//           preserveWhiteSpace={preserveWhiteSpace}
//           className={cx('noise-contents-contrast')}
//           applyMargin={applyMargin}
//           zIndex="default"
//           applyPadding={applyPadding}
//         >
//           {children}
//         </TripieContainer>
//         <TripieContainer margin="none" padding="none" className={cx('noise')} zIndex="base"></TripieContainer>
//       </MotionSlideUp>
//     );
//   }
//   return

// };

Card.Content = CardContent;
Card.WithImage = CardWithImage;
Card.Header = CardHeader;
Card.Description = CardDescription;
Card.Divider = CardDivider;

export default Card;
