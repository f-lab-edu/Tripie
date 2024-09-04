import { Container, Headings } from '@tripie/design-system';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Style from './description.module.scss';

const cx = classNames.bind(Style);

const DescriptionTitle = (descriptionTitle: string) => {
  const [order, description_title] = descriptionTitle.split('.');
  return (
    <Headings.H3>
      <span className={cx('accented')}>{order}.</span> {description_title}
    </Headings.H3>
  );
};

const Description = ({ children, descriptionTitle }: { children: ReactNode; descriptionTitle?: string }) => {
  return (
    <>
      {descriptionTitle != null ? DescriptionTitle(descriptionTitle) : null}
      <Container className={cx('description')} margin="none">
        {children}
      </Container>
    </>
  );
};

export default Description;
