import { ReactNode } from 'react';

import { classNames } from '../../wrappers';

import { TripieContainerProps } from '@core/TripieContainer';
import Style from './text.module.scss';

const cx = classNames.bind(Style);

export type TextProps = {
  size?: 'default' | 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'text' | 'small' | 'tiny';
  bold?: boolean;
  children: ReactNode;
  className?: string;
  crossOut?: boolean;
} & Partial<Omit<TripieContainerProps, 'withBorder'>>;

const Text = ({
  className,
  preserveWhiteSpace = 'none',
  margin = 'none',
  applyMargin,
  padding,
  applyPadding,
  alignItems = 'center',
  gap = 'none',
  justifyContent = 'start',
  children,
  size = 'default',
  bold = false,
  crossOut = false,
}: Readonly<TextProps>) => {
  if (typeof children !== 'string') {
    return (
      <span
        className={cx(
          'text',
          bold ? 'bold' : '',
          size,
          crossOut ? 'cross' : '',
          `align-items-${alignItems}`,
          alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
          'container',
          `padding-${padding}`,
          `padding-${applyPadding}`,
          applyMargin,
          margin,
          `justify-content-${justifyContent}`,
          `gap-${gap}`,
          `preserve-white-space-${preserveWhiteSpace}`,
          className
        )}
      >
        {children}
      </span>
    );
  }
  const splitText = `${children}`.split('\n').map((sentence, index) => {
    return (
      <span
        className={cx(
          'text',
          bold ? 'bold' : '',
          size,
          crossOut ? 'cross' : '',
          `align-items-${alignItems}`,
          alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
          'container',
          `padding-${padding}`,
          `padding-${applyPadding}`,
          applyMargin,
          margin,
          `justify-content-${justifyContent}`,
          `gap-${gap}`,
          preserveWhiteSpace ? `preserve-white-space-${preserveWhiteSpace}` : '',
          className
        )}
        key={index + sentence}
      >
        {sentence}
      </span>
    );
  });
  return <>{splitText}</>;
};

const AccentedText = ({
  children,
  preserveWhiteSpace,
  margin,
  applyMargin,
  padding,
  applyPadding,
  alignItems,
  gap,
  justifyContent = 'start',
  className,
  bold,
  size = 'default',
}: Readonly<TextProps>) => {
  if (typeof children !== 'string') {
    return (
      <span
        className={cx(
          'text',
          `align-items-${alignItems}`,
          alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
          'container',
          `padding-${padding}`,
          `padding-${applyPadding}`,
          applyMargin,
          margin,
          `justify-content-${justifyContent}`,
          `gap-${gap}`,
          preserveWhiteSpace ? 'preserve-white-space' : '',
          'accented',
          size,
          bold ? 'bold' : '',
          className
        )}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      className={cx(
        'text',
        `align-items-${alignItems}`,
        alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
        'container',
        `padding-${padding}`,
        `padding-${applyPadding}`,
        applyMargin,
        margin,
        `justify-content-${justifyContent}`,
        `gap-${gap}`,
        preserveWhiteSpace ? 'preserve-white-space' : '',
        'accented',
        size,
        bold ? 'bold' : '',
        className
      )}
    >
      {children}
    </span>
  );
};

Text.Accented = AccentedText;

export default Text;
