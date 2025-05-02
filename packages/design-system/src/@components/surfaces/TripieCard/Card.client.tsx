import { MutableRefObject, ReactNode, RefObject } from 'react';
import { SHINE_VARIANT } from '../../../shared/motion-variants';
import { Motion, classNames } from '../../../wrappers';

import Divider from '../../data-display/Divider';
import MotionSlideUp from '../../x/MotionSlideUp/MotionSlideUp.client';

import { Text, TripieImage } from '@core';
import { ImageSizes } from '@core/data-display/TripieImage';
import TripieContainer, { TripieContainerProps } from '@core/layout/TripieContainer';
import Style from './card.module.scss';

const cx = classNames.bind(Style);

export type CustomAnimationProps = {
  duration: number;
  delay: number;
  replays: boolean;
  text?: string;
  endColor?: string;
  children?: ReactNode;
  className?: string;
  baseColor?: string;
  repeat?: number;
} & TripieContainerProps;

const Card = ({
  duration,
  replays,
  delay = 0.3,
  children,
  className,
  applyPadding,
  margin = 'none',
  padding,
  justifyContent,
  align,
  refs,
  preserveWhiteSpace,
  applyMargin,
}: Partial<CustomAnimationProps>) => {
  return (
    <MotionSlideUp
      delay={delay}
      duration={duration}
      replays={replays}
      className={cx('with-border', 'outer-wrap', className)}
    >
      <TripieContainer
        padding={padding}
        margin={margin}
        justifyContent={justifyContent}
        align={align}
        refs={refs}
        preserveWhiteSpace={preserveWhiteSpace}
        className={cx('noise-contents-contrast')}
        applyMargin={applyMargin}
        zIndex="default"
        applyPadding={applyPadding}
      >
        {children}
      </TripieContainer>
      <TripieContainer margin="none" padding="none" className={cx('noise')} zIndex="base"></TripieContainer>
      {/* <div className={cx('noise')}></div> */}
    </MotionSlideUp>
  );
};

const CardContent = ({
  children,
  className,
  ref,
  margin = 'none',
  padding = 'm',
  justifyContent,
  applyPadding,
  align,
  preserveWhiteSpace,
  applyMargin,
}: Readonly<Partial<Omit<CustomAnimationProps, 'refs'> & { ref?: MutableRefObject<HTMLDivElement | null> }>>) => {
  return (
    <TripieContainer
      padding={padding}
      margin={margin}
      justifyContent={justifyContent}
      align={align}
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

const ClickableCardContent = ({
  children,
  ref,
  className,
  onClick,
  selected,
}: Readonly<{
  ref?: RefObject<HTMLDivElement>;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
}>) => {
  return (
    <Motion.Div
      ref={ref}
      whileHover={'shine'}
      whileTap={'shine'}
      animate={selected ? 'selected' : 'rest'}
      variants={SHINE_VARIANT}
      onClick={onClick}
      className={cx('chip', 'with-border', 'inner-wrap', className)}
    >
      {children}
    </Motion.Div>
  );
};

const CardDescription = ({
  children,
  className,
  margin = 'none',
  padding = 'none',
  justifyContent,
  applyPadding,
  align,
  preserveWhiteSpace,
  applyMargin,
}: Readonly<TripieContainerProps>) => {
  return (
    <TripieContainer
      padding={padding}
      justifyContent={justifyContent}
      applyMargin={applyMargin}
      align={align}
      applyPadding={applyPadding}
      preserveWhiteSpace={preserveWhiteSpace}
      margin={margin}
      className={cx('inner-wrap', 'with-description', className)}
    >
      {children}
    </TripieContainer>
  );
};

const CardWithImage = ({
  onClick,
  src,
  alt,
  title,
  summary,
  className,
  sourceUrl,
  imageSize = 'medium',
  displaySource = false,
  withBorder,
  isFullSize = false, // width 100% card
  blurDataURL,
}: {
  onClick?: () => void;
  src: string;
  alt?: string;
  title?: string;
  summary?: string;
  className?: string;
  sourceUrl?: string;
  imageSize?: ImageSizes;
  displaySource?: boolean;
  withBorder?: boolean;
  blurDataURL?: string;
  isFullSize?: boolean;
}) => {
  return (
    <Card.ClickableContent onClick={onClick} className={cx('article-card', isFullSize ? 'full-size' : '', className)}>
      <TripieContainer margin="none" className={cx('img-wrap')}>
        {sourceUrl == null || !displaySource ? (
          <TripieImage
            blurDataURL={blurDataURL}
            src={src}
            sizes={imageSize}
            alt={alt ?? `${src} 이미지일 수도 있음`}
            className={cx('thumbnail')}
            withBorder={withBorder}
          />
        ) : (
          <TripieImage.WithSourceUrl
            sizes={imageSize}
            withBorder={withBorder}
            sourceUrl={sourceUrl}
            src={src}
            alt={alt ?? `${src} 이미지일 수도 있음`}
            className={cx('thumbnail')}
          />
        )}
      </TripieContainer>
      <TripieContainer>
        <TripieContainer margin="sm" applyMargin="bottom">
          <Text bold={true} alignItems="start" padding="sm" applyPadding="bottom">
            {title}
          </Text>
          <Divider />
        </TripieContainer>
        {summary}
      </TripieContainer>
    </Card.ClickableContent>
  );
};

Card.Content = CardContent;
Card.ClickableContent = ClickableCardContent;
Card.Description = CardDescription;

Card.WithCoverImage = CardWithImage;

export default Card;
