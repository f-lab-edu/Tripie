import { Headings, Text } from '@tripie-pyotato/design-system/@components';
import { Container } from '@tripie-pyotato/design-system/@components/core';
import { ReactNode } from 'react';
import { classNames } from 'wrapper';
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
        <Container applyMargin="top-bottom" margin="sm">
          <Headings.H3>
            {order != null ? (
              <Text.Accented>{order.toString.length === 1 ? '0' + order : order}. </Text.Accented>
            ) : null}
            {descriptionTitle}
          </Headings.H3>
        </Container>
      ) : null}
      <Container className={cx('description', lineBreak ? 'line-break' : '')} margin="none">
        {children}
      </Container>
    </>
  );
};

export default Description;
