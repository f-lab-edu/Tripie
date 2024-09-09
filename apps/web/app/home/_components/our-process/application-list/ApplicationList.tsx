import classNames from 'classnames/bind';

import { Container } from '@tripie/design-system';
import Chip from 'shared/components/Chip/Chip';
import Style from './application-list.module.scss';

const cx = classNames.bind(Style);

const items = [
  { label: '1', content: 'https://framerusercontent.com/images/UBzDbcjU9OK8N90S1vnMreOSijg.png?scale-down-to=1024' },
  { label: '2', content: 'https://framerusercontent.com/images/UBzDbcjU9OK8N90S1vnMreOSijg.png?scale-down-to=1024' },
  { label: '3', content: 'https://framerusercontent.com/images/UBzDbcjU9OK8N90S1vnMreOSijg.png?scale-down-to=1024' },
  { label: '4', content: 'https://framerusercontent.com/images/UBzDbcjU9OK8N90S1vnMreOSijg.png?scale-down-to=1024' },
  { label: '5', content: 'https://framerusercontent.com/images/UBzDbcjU9OK8N90S1vnMreOSijg.png?scale-down-to=1024' },
  { label: '6', content: 'https://framerusercontent.com/images/UBzDbcjU9OK8N90S1vnMreOSijg.png?scale-down-to=1024' },
  { label: '7', content: 'https://framerusercontent.com/images/1h87ns2Ps0CAPgYnwassgeqY.png?scale-down-to=1024' },
];

const LogoList = () => {
  return (
    <ul className={cx('flex-items')}>
      {[...items].map(({ label, content }) => (
        <Chip key={label} className={cx('logo-wrap')}>
          <img src={content} className={cx('logo')} />
        </Chip>
      ))}
    </ul>
  );
};

const ApplicationList = () => {
  return (
    <Container className={cx('flex')}>
      <LogoList />
      <LogoList />
    </Container>
  );
};

export default ApplicationList;
