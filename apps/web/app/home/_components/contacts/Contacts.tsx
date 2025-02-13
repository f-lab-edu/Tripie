'use client';

import { Headings, MotionSlideUp, TripieContainer } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import RESOURCE from 'constants/resources';
import ROUTE from 'constants/routes';
import Link from 'next/link';
import Icon from 'shared/components/Icon/Icon';

import Contact from './Contact';
import Style from './contacts.module.scss';

const cx = classNames.bind(Style);

const contacts = {
  Email: (
    <div className={cx('text-wrap')}>
      <Link href="mailto:mail@tripie-pyotato.com?subject=Hello&body=How%20can%20I%20help%20you?">
        mail@tripie-pyotato.com
      </Link>
      <Icon src={RESOURCE.ARROW} className={cx('big-arrow')} />
    </div>
  ),
  Github: (
    <div className={cx('text-wrap')}>
      <Link href="mailto:pyotato.dev@gmail.com?subject=Hello&body=How%20can%20I%20help%20you?">
        <span className={cx('accented')}>@ </span>Pyotato
      </Link>
      <Icon src={RESOURCE.ARROW} className={cx('big-arrow')} />
    </div>
  ),
};

export default function Contacts() {
  return (
    <section className={cx('contact')} id={ROUTE.CONTACT.label}>
      <TripieContainer applyMargin="left-right" margin="m">
        <MotionSlideUp>
          <Headings.H2>
            Get in <span className={cx('accented')}>touch</span>
          </Headings.H2>
        </MotionSlideUp>
        <TripieContainer className={cx('wrap')} margin="l" applyMargin="top-bottom">
          {Object.keys(contacts).map(key => (
            <Contact sectionName={key} content={contacts[key as keyof typeof contacts]} key={key} />
          ))}
        </TripieContainer>
      </TripieContainer>
    </section>
  );
}
