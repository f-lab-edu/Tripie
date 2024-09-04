import { Container, Headings } from '@tripie/design-system';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Style from './description.module.scss';

const cx = classNames.bind(Style);

export default function Description({
  children,
  descriptionTitle,
}: {
  children: ReactNode;
  descriptionTitle?: string;
}) {
  if (descriptionTitle && descriptionTitle.includes('.')) {
    const [order, description_title] = descriptionTitle && descriptionTitle.split('.');
    return (
      <>
        <Headings.H3>
          <span className={cx('accented')}>{order}.</span> {description_title}
        </Headings.H3>
        <Container className={cx('description')} margin="none">
          {children}
        </Container>
      </>
    );
  }

  return (
    <Container className={cx('description')} margin="none">
      {children}
    </Container>
  );
}
