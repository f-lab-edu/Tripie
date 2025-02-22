import { render as baseRender } from '@testing-library/react';
import userEvents, { Options } from '@testing-library/user-event';
import { ReactElement } from 'react';

export function render(
  ui: ReactElement,
  options?: Options
): { user: ReturnType<typeof userEvents.setup> } & ReturnType<typeof baseRender> {
  return {
    user: userEvents.setup(options),
    ...baseRender(ui),
  };
}
