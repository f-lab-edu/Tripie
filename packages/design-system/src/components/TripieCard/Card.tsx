import classNames from 'classnames/bind';

import { motion } from 'framer-motion';
import { MutableRefObject, ReactNode, RefObject } from 'react';
import { SHINE_VARIANT } from '../../shared/variants';
import Divider from '../Divider';
import MotionSlideUp from '../MotionSlideUp/MotionSlideUp';
import Text from '../Text';
import TripieContainer from '../TripieContainer/TripieContainer';
import TripieImage from '../TripieImage';
import Style from './card.module.scss';

const cx = classNames.bind(Style);

export type CustomAnimationProps = {
  duration: number;
  delay: number;
  replays: boolean;
  text?: string;
  startColor?: string;
  endColor?: string;
  children?: ReactNode;
  className?: string;
};

const Card = ({ duration, replays, delay = 0.3, children, className }: Partial<CustomAnimationProps>) => {
  return (
    <MotionSlideUp
      delay={delay}
      duration={duration}
      replays={replays}
      className={cx('with-border', 'outer-wrap', className)}
    >
      {children}
      <div className={cx('noise')}></div>
    </MotionSlideUp>
  );
};

const CardContent = ({
  children,
  className,
  ref,
}: Readonly<{
  children: ReactNode;
  className?: string;
  ref?: MutableRefObject<HTMLDivElement | null>;
}>) => {
  return (
    <TripieContainer margin="none" ref={ref} className={cx('with-border', 'inner-wrap', className)}>
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
    <motion.div
      ref={ref}
      whileHover={'shine'}
      whileTap={'shine'}
      animate={selected ? 'selected' : 'rest'}
      variants={SHINE_VARIANT}
      onClick={onClick}
      className={cx('chip', 'with-border', 'inner-wrap', className)}
    >
      {children}
    </motion.div>
  );
};

const CardDescription = ({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) => {
  return (
    <TripieContainer margin="none" className={cx('inner-wrap', 'with-description', className)}>
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
  displaySource = false,
  withBorder,
  blurDataURL,
}: {
  onClick?: () => void;
  src: string;
  alt?: string;
  title?: string;
  summary?: string;
  className?: string;
  sourceUrl?: string;
  displaySource?: boolean;
  withBorder?: boolean;
  blurDataURL?: string;
}) => {
  return (
    <Card.ClickableContent onClick={onClick} className={cx('article-card', className)}>
      <TripieContainer margin="none" className={cx('img-wrap')}>
        {sourceUrl == null || !displaySource ? (
          <TripieImage
            blurDataURL={blurDataURL}
            src={src}
            sizes="small"
            alt={alt ?? `${src} 이미지일 수도 있음`}
            className={cx('thumbnail')}
            withBorder={withBorder}
          />
        ) : (
          <TripieImage.WithSourceUrl
            sizes="small"
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
          <Text className={cx('bold')}>{title}</Text>
          <Divider />
        </TripieContainer>
        {summary}
      </TripieContainer>
    </Card.ClickableContent>
  );
};

// const CardWithListItems = ({
//   ref,
//   className,
//   selected,
//   action,
//   children,
//   // onClick,
//   // src,
//   // alt,
//   // title,
//   // sourceUrl,
//   // displaySource = false,
//   // withBorder,
//   // blurDataURL,
// }: {
//   ref?: RefObject<HTMLDivElement>;
//   className?: string;
//   selected?: boolean;
//   action?;
//   children: ReactNode;
//   // onClick?: () => void;
//   // src: string;
//   // alt?: string;
//   // title?: string;
//   // sourceUrl?: string;
//   // displaySource?: boolean;
//   // withBorder?: boolean;
//   // blurDataURL?: string;
// }) => {
//   return (
//     <Card.ClickableContent
//       ref={ref}
//       className={cx('embedded-card', 'poi-card', className)}
//       selected={selected}
//       onClick={action}
//     >
//       {children}
//     </Card.ClickableContent>
//   );
// };

Card.Content = CardContent;
Card.ClickableContent = ClickableCardContent;
Card.Description = CardDescription;

Card.WithCoverImage = CardWithImage;

export default Card;
