import React from 'react';
import { classNames } from '../../../wrappers';
import Text, { TextProps } from '../Text/Text';
import Style from './headings.module.scss';

const style = classNames.bind(Style);

const Heading = ({ children, preserveWhiteSpace = 'none', className, ...args }: TextProps) => (
  <Text className={style('default', 'typography', `preserve-white-space-${preserveWhiteSpace}`, className)} {...args}>
    {children}
  </Text>
);

export type HeadingProps = Partial<TextProps> & { hasHeadline?: boolean };

const createHeading = (tag: 'h1' | 'h2' | 'h3' | 'h4') =>
  function ({ children, preserveWhiteSpace = 'none', className, hasHeadline = false }: HeadingProps) {
    return React.createElement(
      tag,
      {
        className: style(
          tag,
          'typography',
          `preserve-white-space-${preserveWhiteSpace}`,
          hasHeadline && 'has-headline',
          className
        ),
      },
      children
    );
  };

Heading.H1 = createHeading('h1');
Heading.H2 = createHeading('h2');
Heading.H3 = createHeading('h3');
Heading.H4 = createHeading('h4');

export default Heading;
