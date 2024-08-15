import { ReactElement } from 'react';
import { render as baseRender } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import { Options } from '@testing-library/user-event/dist/types/options';

export function render(
  ui: ReactElement,
  options?: Options
): { user: ReturnType<typeof userEvents.setup> } & ReturnType<typeof baseRender> {
  return {
    user: userEvents.setup(options),
    ...baseRender(ui),
  };
}
