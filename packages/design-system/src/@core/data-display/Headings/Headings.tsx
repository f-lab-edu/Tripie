import { classNames } from '../../../wrappers';
import Text, { TextProps } from '../Text/Text';
import Style from './headings.module.scss';

const style = classNames.bind(Style);

const Heading = ({ children, preserveWhiteSpace = 'none', className }: TextProps) => (
  <Text className={style('default', `preserve-white-space-${preserveWhiteSpace}`, className)}>{children}</Text>
);

const H1 = ({ children, preserveWhiteSpace = 'none', className }: TextProps) => {
  return <h1 className={style('h1', `preserve-white-space-${preserveWhiteSpace}`, className)}>{children}</h1>;
};

const H2 = ({ children, preserveWhiteSpace = 'none', className }: TextProps) => {
  return <h2 className={style('h2', `preserve-white-space-${preserveWhiteSpace}`, className)}>{children}</h2>;
};

const H3 = ({ children, preserveWhiteSpace = 'none', className }: TextProps) => {
  return <h3 className={style('h3', `preserve-white-space-${preserveWhiteSpace}`, className)}>{children}</h3>;
};

const H4 = ({ children, preserveWhiteSpace = 'none', className }: TextProps) => {
  return <h4 className={style('h4', `preserve-white-space-${preserveWhiteSpace}`, className)}>{children}</h4>;
};

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;

export default Heading;
