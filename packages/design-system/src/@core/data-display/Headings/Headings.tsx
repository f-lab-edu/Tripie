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

const H1 = ({ children, preserveWhiteSpace = 'none', className, hasHeadline = false }: HeadingProps) => {
  return (
    <h1
      className={style(
        'typography',
        'h1',
        `preserve-white-space-${preserveWhiteSpace}`,
        hasHeadline ? 'has-headline' : '',
        className
      )}
    >
      {children}
    </h1>
  );
};

const H2 = ({ children, preserveWhiteSpace = 'none', className, hasHeadline }: HeadingProps) => {
  return (
    <h2
      className={style(
        'h2',
        'typography',
        `preserve-white-space-${preserveWhiteSpace}`,
        hasHeadline ? 'has-headline' : '',
        className
      )}
    >
      {children}
    </h2>
  );
};

const H3 = ({ children, preserveWhiteSpace = 'none', className, hasHeadline }: HeadingProps) => {
  return (
    <h3
      className={style(
        'h3',
        'typography',
        `preserve-white-space-${preserveWhiteSpace}`,
        hasHeadline ? 'has-headline' : '',
        className
      )}
    >
      {children}
    </h3>
  );
};

const H4 = ({ children, preserveWhiteSpace = 'none', className, hasHeadline = false }: HeadingProps) => {
  return (
    <h4
      className={style(
        'h4',
        'typography',
        `preserve-white-space-${preserveWhiteSpace}`,
        hasHeadline ? 'has-headline' : '',
        className
      )}
    >
      {children}
    </h4>
  );
};

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;

export default Heading;
