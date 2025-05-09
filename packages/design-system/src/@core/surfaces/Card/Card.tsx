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

export type CardWithImageProps = CardProps & ImageProps & { cover?: boolean; imgSize: ImageProps['sizes'] };

const CardWithImage = ({
  children,
  className,
  src,
  alt,
  withNoise = true,
  cover = false,
  sizes = 'card',
  imgSize = 'card',
  ...args
}: CardWithImageProps) => {
  return (
    <TripieContainer withBorder={true} {...args} className={cx('outer-wrap', `card-size-${sizes}`, className)}>
      <Stack zIndex="default" margin="none" direction="column" className={cx('inner-wrap', className)}>
        <TripieContainer margin="none" className={cx('img-wrap')}>
          {cover ? (
            <TripieImage sizes={imgSize} src={src} alt={alt} withBorder={false} />
          ) : (
            <TripieContainer>
              <TripieImage sizes={imgSize} src={src} alt={alt} withBorder={true} />
            </TripieContainer>
          )}
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
      <Stack zIndex="default" {...args} direction="column" className={cx('inner-wrap', className)}>
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
