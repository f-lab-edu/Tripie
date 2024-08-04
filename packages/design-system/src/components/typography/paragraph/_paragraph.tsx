'use client';

import classNames from 'classnames/bind';
import { TextProps } from '../text';
import Style from './_paragraph.module.scss';

const style = classNames.bind(Style);

const Paragraph = ({ children, className }: TextProps) => {
  return <p className={style('text', 'full', className)}>{`${children}`}</p>;
};

export default Paragraph;
