'use client';
import { classNames, Motion } from '../../wrappers';

import { createContext, ReactNode, useContext, useMemo } from 'react';

import { useCycle } from '../../@hooks';
import Divider from '../Divider/Divider';

import { TripieContainerProps } from '@core/TripieContainer';
import Icon, { IconProps } from '../TripieIcon/Icon.client';
import Style from './accordian.module.scss';
import { ACCORDIAN_VARIANTS } from './variants';

const cx = classNames.bind(Style);

const AccordionContext = createContext<{ current: string; cycle: () => null }>({
  current: 'closed',
  cycle: () => null,
});

export type AccordionProps = Partial<TripieContainerProps & { children: ReactNode; className: string }>;

const Accordion = ({ children, className }: Partial<AccordionProps>) => {
  const [current, cycle] = useCycle('closed', 'open');

  // context provider에 넘겨지는 value prop 객체는 매 랜더때마다 바뀌므로 useMemo로 감싸주기
  const value = useMemo(() => {
    return { current, cycle };
  }, [current]);

  return (
    <AccordionContext.Provider value={value}>
      <Motion.Div className={cx('accordion', className)}>{children}</Motion.Div>
    </AccordionContext.Provider>
  );
};

export const AccordionDivider = ({ className }: AccordionProps) => {
  const { current } = useContext(AccordionContext);
  return <Divider current={current} className={cx(className)} />;
};

export const AccordionHeader = ({
  children,
  applyMargin,
  margin,
  alignItems = 'flex-start',
  gap = 'default',
  justifyContent = 'center',
  padding,
  applyPadding,
  className,
}: AccordionProps & Partial<TripieContainerProps>) => {
  const { cycle } = useContext(AccordionContext);
  return (
    <Motion.Div
      className={cx(
        'accordion-header',
        `padding-${padding}`,
        `padding-${applyPadding}`,
        applyMargin,
        margin,
        alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
        `align-items-${alignItems}`,
        `justify-content-${justifyContent}`,
        `gap-${gap}`,
        className
      )}
      whileHover={{ cursor: 'pointer' }}
      onTapStart={() => cycle()}
    >
      {children}
    </Motion.Div>
  );
};

export const AccordionIcon = ({ src, className, sizes = 'icon' }: IconProps) => {
  const { current } = useContext(AccordionContext);
  return (
    <Icon src={src} sizes={sizes} variants={ACCORDIAN_VARIANTS.BUTTON} animate={current} className={cx(className)} />
  );
};

export const AccordionBody = ({
  children,
  applyMargin,
  margin,
  alignItems = 'flex-start',
  gap = 'default',
  justifyContent = 'center',
  padding,
  applyPadding,
  preserveWhiteSpace,
  className,
}: AccordionProps & Partial<TripieContainerProps>) => {
  const { current } = useContext(AccordionContext);

  return (
    <Motion.Div
      variants={ACCORDIAN_VARIANTS.DETAILS}
      animate={current}
      className={cx(
        'accordion-body',
        'accordion-header',
        `padding-${padding}`,
        `padding-${applyPadding}`,
        applyMargin,
        margin,
        alignItems != 'none' || gap !== 'none' || justifyContent !== 'none' ? 'flex' : '',
        `align-items-${alignItems}`,
        `justify-content-${justifyContent}`,
        `gap-${gap}`,
        preserveWhiteSpace ? 'preserve-white-space' : '',
        className
      )}
    >
      {children}
    </Motion.Div>
  );
};

Accordion.Divider = AccordionDivider;
Accordion.Icon = AccordionIcon;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
