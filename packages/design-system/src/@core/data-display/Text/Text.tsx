import { ReactNode } from 'react';

import { classNames } from '../../../wrappers';

import { TripieContainerProps } from '../../layout/TripieContainer';
import Style from './text.module.scss';

const cx = classNames.bind(Style);

export type TextProps = {
  size?: 'inherit' | 'default' | 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'text' | 'small' | 'tiny';
  bold?: boolean;
  children: ReactNode;
  className?: string;
  crossOut?: boolean;
  noGapUnderText?: boolean;
  display?: 'inline-block' | 'block' | 'inline' | 'contents';
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
  size = 'inherit',
  bold = false,
  textAlign = 'start',
  crossOut = false,
  noGapUnderText = false,
  display = 'inline-block',
}: Readonly<TextProps>) => {
  if (typeof children !== 'string') {
    return (
      <span
        className={cx(
          `${!noGapUnderText ? 'not-btn-' : ''}text`,
          bold ? 'bold' : '',
          `font-size-${size}`,
          crossOut ? 'cross' : '',
          `align-items-${alignItems}`,
          `align-text-${textAlign}`,
          alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : `display-${display}`,
          `paddings_${padding}_to_${applyPadding}`,
          `margins_${margin}_to_${applyMargin}`,
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
          `${!noGapUnderText ? 'not-btn-' : ''}text`,
          bold ? 'bold' : '',
          // size,
          `font-size-${size}`,
          crossOut ? 'cross' : '',
          `align-items-${alignItems}`,
          alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
          `paddings_${padding}_to_${applyPadding}`,
          `margins_${margin}_to_${applyMargin}`,
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
  noGapUnderText,
  bold,
  size = 'inherit',
}: Readonly<TextProps>) => {
  if (typeof children !== 'string') {
    return (
      <span
        className={cx(
          `${!noGapUnderText ? 'not-btn-' : ''}text`,
          `align-items-${alignItems}`,
          alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
          `paddings_${padding}_to_${applyPadding}`,
          `margins_${margin}_to_${applyMargin}`,
          `justify-content-${justifyContent}`,
          `gap-${gap}`,
          preserveWhiteSpace ? 'preserve-white-space' : '',
          'accented',
          // size,
          `font-size-${size}`,
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
        `${!noGapUnderText ? 'not-btn-' : ''}text`,
        `align-items-${alignItems}`,
        alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
        'container',
        `paddings_${padding}_to_${applyPadding}`,
        `margins_${margin}_to_${applyMargin}`,
        `justify-content-${justifyContent}`,
        `gap-${gap}`,
        preserveWhiteSpace ? 'preserve-white-space' : '',
        'accented',
        `font-size-${size}`,
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
