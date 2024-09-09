'use client';
import classNames from 'classnames/bind';

import { motion } from 'framer-motion';
import useCycle from 'hooks/useCycle';
import { createContext, useContext } from 'react';
import { DefaultProps } from 'types/Props';
import Divider from '../Divider/Divider';
import Icon, { IconProps } from '../Icon/Icon';
import Style from './accordian.module.scss';
import { ACCORDIAN_VARIANTS } from './variants';

const cx = classNames.bind(Style);

const AccordionContext = createContext<{ current: string; cycle: () => null }>({
  current: 'closed',
  cycle: () => null,
});

const Accordion = ({ children, className }: DefaultProps) => {
  const [current, cycle] = useCycle('closed', 'open');
  return (
    <AccordionContext.Provider value={{ current, cycle }}>
      <motion.div className={cx('accordion', className)}>{children}</motion.div>
    </AccordionContext.Provider>
  );
};

export const AccordionDivider = ({ className }: DefaultProps) => {
  const { current } = useContext(AccordionContext);
  return <Divider current={current} className={className} />;
};

export const AccordionHeader = ({ children }: DefaultProps) => {
  const { cycle } = useContext(AccordionContext);
  return (
    <motion.div className={cx('accordion-header')} onTapStart={() => cycle()}>
      {children}
    </motion.div>
  );
};

export const AccordionIcon = ({ src, className }: IconProps) => {
  const { current } = useContext(AccordionContext);
  return (
    <Icon
      src={src}
      variants={ACCORDIAN_VARIANTS.BUTTON}
      animate={current}
      className={cx('accordion-button', className)}
    />
  );
};

export const AccordionBody = ({ children }: DefaultProps) => {
  const { current } = useContext(AccordionContext);

  return (
    <motion.div variants={ACCORDIAN_VARIANTS.DETAILS} animate={current} className={cx('accordion-body')}>
      {children}
    </motion.div>
  );
};

Accordion.Divider = AccordionDivider;
Accordion.Icon = AccordionIcon;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
