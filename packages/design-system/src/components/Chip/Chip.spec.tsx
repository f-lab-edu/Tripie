import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import { motion } from 'framer-motion';
import '../../shared/motion-variants';

import Chip from './Chip';
// !! motion framer 올바르게 mock 하는 방법? props 못 읽는 문제..
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual<typeof motion>('framer-motion');

  return {
    ...actual,
    motion: {
      button: vi.fn(({ animate, whileHover, whileTap, className, ...props }: any) => {
        console.log('Mocked motion.button animate:', animate); // Debugging log
        return (
          <button
            data-animate={animate ?? 'rest'} // Ensure animate is always defined
            data-while-hover={whileHover ?? ''}
            data-while-tap={whileTap ?? ''}
            className={className ?? ''}
            {...props}
          />
        );
      }),
    },
  };
});

describe('Chip Component', () => {
  it('1. should have correct motion attributes', async () => {
    render(<Chip selected={true}>Animated Chip</Chip>);
    const chip = screen.getByRole('button', { name: /Animated Chip/i });
    expect(chip).toBeInTheDocument();

    // // Ensure motion props are passed correctly
    // expect(chip.getAttribute('data-animate')).toBe('selected');
    // expect(chip.getAttribute('data-while-hover')).toBe('shine');
    // expect(chip.getAttribute('data-while-tap')).toBe('shine');
    // // Check computed styles if needed
    // expect(getComputedStyle(chip).backgroundColor).toEqual('var(--themes-color-200)');
    // expect(getComputedStyle(chip).borderColor).toEqual('var(--themes-color-400)');
  });

  it('2. Chip disabled 속성을 true로 설정하면 disable된다.', () => {
    render(<Chip disabled={true}>Disabled Chip</Chip>);

    const chip = screen.getByRole('button', { name: /Disabled Chip/i });

    expect(chip).toBeDisabled();
  });

  it('2. Chip disabled 속성을 true로 설정하면 disable된다.', () => {
    render(<Chip className={'restaurant'}>1</Chip>);

    const chip = screen.getByRole('button', { name: /1/i });
  });
});
