// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { vi } from 'vitest';
// import NoStyleButton from '../../../packages/design-system/src/components/TripieButton/NoStyle/NoStyleButton';

// describe('No Style button Component called', () => {
//   it('버튼 클릭 시 action 함수가 호출된다.', async () => {
//     const actionMock = vi.fn(); // 🔥 Mock function

//     render(<NoStyleButton action={actionMock}>button</NoStyleButton>);

//     const buttonElement = screen.getByRole('button', { name: /button/i });

//     expect(buttonElement).toBeInTheDocument();

//     await userEvent.click(buttonElement); // 클릭

//     expect(actionMock).toHaveBeenCalled(); // 함수가 호출되었는지 체크
//   });

//   it('버튼 호버 시 커서가 pointer가 된다.', async () => {
//     const actionMock = vi.fn(); // 🔥 Mock function

//     render(<NoStyleButton action={actionMock}>button</NoStyleButton>);

//     const buttonElement = screen.getByRole('button', { name: /button/i });

//     expect(buttonElement).toBeInTheDocument();

//     await userEvent.hover(buttonElement);

//     const style = getComputedStyle(buttonElement);

//     expect(style.cursor).toBe('pointer');
//   });

//   it('테두리 없는 버튼이 랜더된다.', () => {
//     const actionMock = vi.fn(); // 🔥 Mock function

//     render(<NoStyleButton action={actionMock}>button</NoStyleButton>);

//     const buttonElement = screen.getByRole('button', { name: /button/i });

//     expect(buttonElement).toBeInTheDocument();

//     const style = getComputedStyle(buttonElement);

//     expect(style.border).toBe('0px');
//   });
// });
