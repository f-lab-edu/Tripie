import { Container, Headings } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Style from './description.module.scss';

const cx = classNames.bind(Style);

const Description = ({
  children,
  order,
  descriptionTitle,
}: {
  children: ReactNode;
  order?: number;
  descriptionTitle?: string;
}) => {
  return (
    <>
      {descriptionTitle != null ? (
        <Headings.H3>
          {order != null ? (
            <span className={cx('accented')}>{order.toString.length === 1 ? '0' + order : order}. </span>
          ) : null}
          {descriptionTitle}
        </Headings.H3>
      ) : null}
      <Container className={cx('description')} margin="none">
        {children}
      </Container>
    </>
  );
};

export default Description;
