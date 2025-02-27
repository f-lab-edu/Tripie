'use client';

import classNames from 'classnames/bind';
import Text, { TextProps } from '../Text/Text';
import Style from './headings.module.scss';

const style = classNames.bind(Style);

const Heading = ({ children, className }: TextProps) => <Text className={style('default', className)}>{children}</Text>;

const H1 = ({ children, className }: TextProps) => {
  return <h1 className={style('h1',className)}>{children}</h1>;
};

const H2 = ({ children, className }: TextProps) => {
  return <h2 className={style('h2', className)}>{children}</h2>;
};

const H3 = ({ children, className }: TextProps) => {
  return <h3 className={style('h3', className)}>{children}</h3>;
};

const H4 = ({ children, className }: TextProps) => {
  return <h4 className={style('h4', className)}>{children}</h4>;
};
const Headline = ({ children, className }: TextProps) => {
  return <h4 className={style('headline', className)}>{children}</h4>;
};

Heading.Headline = Headline;
Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;

export default Heading;
