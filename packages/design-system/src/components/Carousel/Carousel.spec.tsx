import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useInView } from 'react-intersection-observer';
import { describe, expect, it, Mock, vi } from 'vitest';
import TripieImage from '../TripieImage/TripieImage';
import Carousel from './Carousel';
import images from './images';

// https://vitest.dev/guide/mocking#globals
const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

vi.mock('react-intersection-observer', () => ({
  useInView: vi.fn(() => ({
    ref: vi.fn(), // Mock function
    inView: false, // Start as false
  })),
}));

// Mock `scrollIntoView` since JSDOM doesn’t have it
Element.prototype.scrollIntoView = vi.fn();

// vi.spyOn(window.HTMLElement.prototype, 'scrollIntoView').mockImplementation(() => {});

(useInView as Mock).mockImplementation(({ threshold }) => {
  return {
    ref: vi.fn(),
    inView: threshold === 0.6,
  };
});

describe('Carousel Component', () => {
  it('1. 캐로솔 이미지가 1개인 경우 다음/이전 버튼이 보이지 않는다.', () => {
    render(
      <Carousel
        items={images.slice(0, 1).map((item, index) => (
          <TripieImage.WithSourceUrl
            sizes="large"
            key={item.src + index}
            alt={item.alt}
            src={item.src}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurDataURL}
          />
        ))}
      />
    );

    const carouselElement = screen.getByAltText(images[0].alt);
    expect(carouselElement).toBeInTheDocument();

    const nextButton = screen.queryByRole('button', { name: /next/i });
    const prevButton = screen.queryByRole('button', { name: /previous/i });

    expect(nextButton).not.toBeInTheDocument();
    expect(prevButton).not.toBeInTheDocument();
  });

  it('2. 캐로솔 이미지가 여려 개인 경우, 하나의 이미지만 focus된다.', () => {
    const { container } = render(
      <Carousel
        items={images.map((item, index) => (
          <TripieImage.WithSourceUrl
            sizes="large"
            key={item.src + index}
            alt={item.alt}
            src={item.src}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurDataURL}
          />
        ))}
      />
    );

    const carouselItemElements = Array.from(container.querySelectorAll('*')).filter(el =>
      el.className.match(/carousel-item/)
    );

    const focusedElement = carouselItemElements.filter(el => el.className.match(/focused/));

    expect(focusedElement.length).toEqual(1);
  });

  it('3. 캐로솔 아이템이 2개인 경우, 다음 버튼을 클릭하면 두번째 아이템에 focus되고 이전 버튼이 생기고, 다음 버튼이 사라진다.', () => {
    const { container } = render(
      <Carousel
        items={images.slice(0, 2).map((item, index) => (
          <TripieImage.WithSourceUrl
            sizes="large"
            key={item.src + index}
            alt={item.alt}
            src={item.src}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurDataURL}
          />
        ))}
      />
    );

    expect(container).toBeInTheDocument();

    const buttonElements = container.querySelectorAll('button');

    const carouselItemElements = Array.from(container.querySelectorAll('*')).filter(el =>
      el.className.match(/carousel-item/)
    );

    expect(carouselItemElements.length).toEqual(2);

    const focusedElement = carouselItemElements.findIndex(el => el.className.match(/focused/));

    expect(focusedElement).toEqual(0);
    expect(buttonElements.length).toEqual(1); // 버튼이 하나만 있고,
    expect(buttonElements[0].name).toEqual('next'); // 해당 버튼이 다음 버튼
    expect(buttonElements[0].name).not.toEqual('previous'); // 해당 버튼이 다음 버튼
  });

  it('4. 3개의 이미지 캐로솔에서 다음버튼을 두 번 누르면 이미지 1->2->3으로, 이전 버튼을 1번 누르면 3->2로 focus된다.', async () => {
    // 4. 첫 번째 아이템이 focused일 때, 다음 버튼을 클릭하면 다음 아이템에 focus된다.'
    const { container } = render(
      <Carousel
        items={images.slice(0, 3).map((item, index) => (
          <TripieImage.WithSourceUrl
            sizes="large"
            key={item.src + index}
            alt={item.alt}
            src={item.src}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurDataURL}
          />
        ))}
      />
    );

    expect(container).toBeInTheDocument();

    // 스크롤 컨테이너
    const scrollContainer = Array.from(container.querySelectorAll('*')).filter(el =>
      el.className.match(/carousel-container/)
    )[0];

    expect(scrollContainer).toBeInTheDocument();

    // 전체 캐로솔 아이템들
    const carouselItems = Array.from(container.querySelectorAll('*')).filter(el => el.className.match(/carousel-item/));

    expect(carouselItems.length).toBe(3);

    // 'next' 버튼
    const nextButton = container.querySelector('button[name="next"]');
    expect(nextButton).toBeInTheDocument();

    // 다음 버튼 클릭
    await act(() => fireEvent.click(nextButton!));

    // 클래스 변경, 두번째 항목(인덱스1)에만 focus
    await waitFor(() => {
      expect(carouselItems[0].classList.contains('focused')).toBe(false);
      expect(carouselItems[1].classList.contains('focused')).toBe(true);
      expect(carouselItems[2].classList.contains('focused')).toBe(false);
    });

    // 다음 버튼 클릭
    await act(() => fireEvent.click(nextButton!));

    // 클래스 변경, 세번째 항목(인덱스2)에만 focus
    await waitFor(() => {
      expect(carouselItems[0].classList.contains('focused')).toBe(false);
      expect(carouselItems[1].classList.contains('focused')).toBe(false);
      expect(carouselItems[2].classList.contains('focused')).toBe(true);
      expect(nextButton).not.toBeInTheDocument(); // 마지막 항목이므로 다음 버튼이 보이지 않는다.
    });

    // 'previous' 버튼
    const prevButton = container.querySelector('button[name="previous"]');
    expect(prevButton).toBeInTheDocument();

    // 이전 버튼 클릭
    await act(() => fireEvent.click(prevButton!));

    // 클래스 변경, 두번째 항목(인덱스)에만 focus
    await waitFor(() => {
      expect(carouselItems[0].classList.contains('focused')).toBe(false);
      expect(carouselItems[1].classList.contains('focused')).toBe(true);
      expect(carouselItems[2].classList.contains('focused')).toBe(false);
    });

    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  // !! 🤔 스크롤 테스트가 잘 안됨 !!  https://github.com/f-lab-edu/Tripie/blob/e6a096584da85ba6cfba371464b96aee4e77847c/packages/design-system/src/components/Carousel/Carousel.tsx#L92 useEffect가 안먹힘.
  // it('5. 스크롤', async () => {
  //   const { container } = render(
  //     <Carousel
  //       items={images.slice(0, 2).map((item, index) => (
  //         <TripieImage.WithSourceUrl
  //           sizes="large"
  //           key={item.src + index}
  //           alt={item.alt}
  //           src={item.src}
  //           sourceUrl={item.sourceUrl}
  //           blurDataURL={item.blurDataURL}
  //         />
  //       ))}
  //     />
  //   );

  //   expect(container).toBeInTheDocument();

  //   // Get all carousel items
  //   const carouselItems = Array.from(container.querySelectorAll('*')).filter(el => el.className.match(/carousel-item/));

  //   expect(carouselItems.length).toBe(2);

  //   // Ensure first item is focused initially
  //   expect(carouselItems[0].classList.contains('focused')).toBe(true);
  //   expect(carouselItems[1].classList.contains('focused')).toBe(false);

  //   act(() => {
  //     container.scrollLeft = 1000;
  //     fireEvent.scroll(container);
  // !! 동작하므로 scroll은 되는 것 같지만 state 변경이 잘 안된듯
  //     container.addEventListener('scroll', () => {
  //       console.log('Scroll event triggered!');
  //     });
  //   });

  //   // Wait for class update where only the second item is focused
  //   await waitFor(() => {
  //     expect(carouselItems[0].classList.contains('focused')).toBe(false);
  //     expect(carouselItems[1].classList.contains('focused')).toBe(true);
  //   });
  // });
});
