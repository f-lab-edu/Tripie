'use client';
import classNames from 'classnames/bind';

import { motion } from 'framer-motion';
import useCycle from 'hooks/useCycle';
import { ReactNode, createContext, useContext, useMemo } from 'react';

import Divider from '../Divider/Divider';
import Icon, { IconProps } from '../Icon/Icon';
import Style from './accordian.module.scss';
import { ACCORDIAN_VARIANTS } from './variants';

const cx = classNames.bind(Style);

const AccordionContext = createContext<{ current: string; cycle: () => null }>({
  current: 'closed',
  cycle: () => null,
});

export type AccordionProps = Partial<{ children: ReactNode; className: string }>;

const Accordion = ({ children, className }: Partial<AccordionProps>) => {
  const [current, cycle] = useCycle('closed', 'open');

  // context provider에 넘겨지는 value prop 객체는 매 랜더때마다 바뀌므로 useMemo로 감싸주기
  const value = useMemo(() => {
    return { current, cycle };
  }, [current]);

  return (
    <AccordionContext.Provider value={value}>
      <motion.div className={cx('accordion', className)}>{children}</motion.div>
    </AccordionContext.Provider>
  );
};

export const AccordionDivider = ({ className }: AccordionProps) => {
  const { current } = useContext(AccordionContext);
  return <Divider current={current} className={cx(className)} />;
};

export const AccordionHeader = ({ children }: AccordionProps) => {
  const { cycle } = useContext(AccordionContext);
  return (
    <motion.div className={cx('accordion-header')} whileHover={{ cursor: 'pointer' }} onTapStart={() => cycle()}>
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

export const AccordionBody = ({ children }: AccordionProps) => {
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
