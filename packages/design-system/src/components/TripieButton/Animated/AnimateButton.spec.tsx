import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import AnimatedButton from './AnimatedButton';

describe('AnimatedButton Component', () => {
  it('텍스트가 하나의 텍스트 "button"만 있다.', () => {
    render(<AnimatedButton>button</AnimatedButton>);

    const buttonElement = screen.getByRole('button', { name: /button/i });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('button');
  });
  it('텍스트가 디폴트 텍스트 "button"와 "other child"가 있다.', () => {
    render(<AnimatedButton otherChild={'other child'}>button</AnimatedButton>);

    const buttonElement = screen.getByRole('button', { name: /button/i });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('button');
    expect(buttonElement).toHaveTextContent('other child');
  });

  it('버튼에 마우스를 올리면 otherChild와 original text가 translateY(-105%)로 이동한다.', async () => {
    render(<AnimatedButton otherChild="other child">original text</AnimatedButton>);

    const buttonElement = screen.getByRole('button');

    // 버튼 호버 시
    await userEvent.hover(buttonElement);

    const hoveredOriginalText = screen.getByText(/original text/i);
    const hoveredChildText = screen.getByText(/original text/i);

    expect(getComputedStyle(hoveredOriginalText).transform).toContain('translateY(105%)');
    expect(getComputedStyle(hoveredChildText).transform).toContain('translateY(105%)');
  });

  it('disabled={true} 설정 시 비활성화된다.', () => {
    render(<AnimatedButton disabled={true}>button</AnimatedButton>);

    const buttonElement = screen.getByRole('button', { name: /button/i });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
  });
  it('withBorder={true} 설정 시 버튼 테두리 스타일이 적용되어scss module이므로 className에 `with-border`가 포함된다.', () => {
    render(<AnimatedButton withBorder={true}>button</AnimatedButton>);

    const buttonElement = screen.getByRole('button', { name: /button/i });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.className).toMatch(/with-border/);
  });

  // ! 🤔 버튼 길이를 제한해야할듯, 텍스트가 너무 많으면 가독성도 안좋아지고 애니메이션도 깨진다. 어떻게 제한할까?
  //   it('버튼이 긴 텍스트를 포함하고, 잘리지 않고, 크기가 조정된다.', () => {
  //     const longText = 'Super long button text. max max max'.repeat(3); // 105자

  //     render(<AnimatedButton>{longText}</AnimatedButton>);

  //     const button = screen.getByRole('button');

  //     // ✅ Ensure button contains full text
  //     expect(button).toHaveTextContent(longText);

  //     // ✅ Ensure button width expands (adjust 200px based on your design)
  //     // expect(button.scrollWidth).toBeGreaterThan(200);

  //     // ✅ Ensure text is not truncated (checks if scrollWidth > clientWidth)
  //     // expect(button.scrollWidth).toBeGreaterThan(button.clientWidth);

  //     expect(getComputedStyle(button).width).not.toBe('0px');

  //     console.log(button.scrollWidth);

  //     expect(button.textContent?.length).toBeGreaterThan(10);

  //     // ✅ Optional: Ensure button text is under a reasonable limit (e.g., 30 chars)
  //     expect(longText.length).toBeLessThanOrEqual(105);
  //   });
});
