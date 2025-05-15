// https://mui.com/material-ui/react-card/

import { Stack } from '@core/layout';
import { classNames } from '../../../wrappers';
import { ImageProps, ImageSizes, Text, TextProps, TripieImage } from '../../data-display';
import Divider, { DividerProps } from '../../data-display/Divider/Divider';
import TripieContainer, { TripieContainerProps } from '../../layout/TripieContainer';
import Style from './card.module.scss';

const cx = classNames.bind(Style);

export type CardProps = { withNoise?: boolean; sizes?: ImageSizes } & Partial<TripieContainerProps>;

const CardContent = ({ children, className, margin = 'none', ...args }: TripieContainerProps) => {
  return (
    <TripieContainer className={cx('', className)} {...args} margin={margin}>
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

export type CardWithImageProps = CardProps &
  ImageProps & { cover?: boolean; imgSize: ImageProps['sizes']; sourceUrl?: string; withImageBorder?: boolean };

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
  withImageBorder,
  withBorder = true,
  ...args
}: CardWithImageProps) => {
  const ImageComponent = sourceUrl == null ? TripieImage : TripieImage.WithSourceUrl;
  return (
    <TripieContainer withBorder={withBorder} className={cx('outer-wrap', `card-size-${sizes}`, className)} {...args}>
      <Stack zIndex="default" margin="none" direction="column" className={cx('inner-wrap', className)}>
        {!cover ? (
          <TripieContainer withBorder={false}>
            <ImageComponent
              sourceUrl={sourceUrl}
              aspectRatio={aspectRatio}
              sizes={imgSize}
              src={src}
              alt={alt}
              withBorder={withImageBorder}
            />
          </TripieContainer>
        ) : (
          <ImageComponent
            sourceUrl={sourceUrl}
            aspectRatio={aspectRatio}
            sizes={imgSize}
            src={src}
            alt={alt}
            withBorder={withImageBorder}
          />
        )}

        {children}
      </Stack>

      {withNoise && <TripieContainer margin="none" padding="none" className="noise" zIndex="base" />}
    </TripieContainer>
  );
};

const Card = ({ children, className, withNoise = true, sizes = 'card', ...args }: CardProps) => {
  return (
    <TripieContainer withBorder={true} {...args} className={cx('outer-wrap', `card-size-${sizes}`, className)}>
      <Stack {...args} zIndex="default" direction="column" className={cx('inner-wrap', className)}>
        {children}
      </Stack>
      {withNoise ? (
        <TripieContainer margin="none" padding="none" className={cx('noise')} zIndex="base"></TripieContainer>
      ) : null}
    </TripieContainer>
  );
};

Card.Content = CardContent;
Card.WithImage = CardWithImage;
Card.Header = CardHeader;
Card.Divider = CardDivider;

export default Card;
