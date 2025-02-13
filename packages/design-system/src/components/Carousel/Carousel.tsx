'use client';
import classNames from 'classnames/bind';

import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Container from '../Container/Container';
import Style from './carousel.module.scss';

const cx = classNames.bind(Style);

const Carousel = ({ items, className }: { items: ReactElement[]; className?: string }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  return (
    <Container margin="none" className={cx('carousel')}>
      <Container margin="none" className={cx('flex-items', 'carousel-inner')}>
        <Container margin="none" className={cx('insta-like-carousel-container', className)}>
          {items.map((item, index) => (
            <CarouselItem
              key={`carousel-item-${item?.key}`}
              index={index}
              setFocusedIndex={setFocusedIndex}
              focusedIndex={focusedIndex}
            >
              {item}
            </CarouselItem>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

const CarouselItem = ({
  children,
  className,
  index,
  setFocusedIndex,
  focusedIndex,
}: {
  children: ReactNode;
  index: number;
  className?: string;
  setFocusedIndex: (index: number) => void;
  focusedIndex: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.6, // 60% 보여야 동작
    triggerOnce: false, // 가시성 체크
  });

  useEffect(() => {
    // 뷰에 보이면 포커스할 index 업데이트해주기
    if (inView && focusedIndex !== index) {
      setFocusedIndex(index);
    }
  }, [inView, focusedIndex]);

  return (
    <Container
      margin="none"
      ref={ref}
      className={cx('insta-like-carousel-item', { focused: focusedIndex === index }, className)}
    >
      {children}
    </Container>
  );
};

export default Carousel;
