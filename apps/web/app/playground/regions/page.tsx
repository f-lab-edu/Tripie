'use server';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import Navigation from './_components/Navigation';
import { RegionArticles } from './_components/Region';
import Style from './regions.module.scss';

const cx = classNames.bind(Style);

const Articles = () => {
  return (
    <Container margin="none" className={cx('background')}>
      <Container margin="none">
        <Navigation />
        <h2>
          도시 별<span className={cx('accented')}> 여행 </span>정보
        </h2>
      </Container>
      <RegionArticles />
    </Container>
  );
};

export default Articles;
