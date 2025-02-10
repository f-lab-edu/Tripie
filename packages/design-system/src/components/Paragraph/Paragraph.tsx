import classNames from 'classnames/bind';
import { TextProps } from '../Text/Text';
import Style from './paragraph.module.scss';

const style = classNames.bind(Style);

const Paragraph = ({ children, className }: TextProps) => {
  return <p className={style('text', 'full', className)}>{`${children}`}</p>;
};

export default Paragraph;
