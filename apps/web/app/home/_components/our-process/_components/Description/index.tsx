import { Container, Headings, Text } from '@tripie-pyotato/design-system';
import { ReactNode } from 'react';
import classNames from 'wrapper';
import Style from './description.module.scss';

const cx = classNames.bind(Style);

const Description = ({
  children,
  order,
  descriptionTitle,
  lineBreak = false,
}: {
  children: ReactNode;
  order?: number;
  lineBreak?: boolean;
  descriptionTitle?: string;
}) => {
  return (
    <>
      {descriptionTitle != null ? (
        <Headings.H3>
          {order != null ? <Text.Accented>{order.toString.length === 1 ? '0' + order : order}. </Text.Accented> : null}
          {descriptionTitle}
        </Headings.H3>
      ) : null}
      <Container className={cx('description', lineBreak ? 'line-break' : '')} margin="none">
        {children}
      </Container>
    </>
  );
};

export default Description;
