'use client';

import { ICON_RESOURCE_ICON, ICON_SIZES } from 'shared';
import Icon, { IconProps } from '../Icon.client';
import VARIANTS from './variants';

const randomXNum = Math.random();
const randomYNum = Math.random();

const CloudIcon = ({
  index = 0,
  duration = 35,
  delay,
  sizes = 'icon',
  ...args
}: IconProps & {
  index: number;
  duration?: number;
  delay?: number;
}) => {
  return (
    <Icon
      {...args}
      animate={{ translateX: '-100vw' }}
      initial={{
        opacity: 0.2,
        translateX: `${80 * (randomXNum * (index + 1))}vw`,
        translateY: `${randomYNum * 100}px`,
      }}
      transition={{ decelerate: 2, repeat: Infinity, duration, bounce: 0, delay: delay == null ? index * 0.1 : delay }}
      src={ICON_RESOURCE_ICON('CLOUD', ICON_SIZES[sizes])}
      sizes={sizes}
      alt={'plane icon'}
      variants={VARIANTS}
      isButton={false}
    />
  );
};

export default CloudIcon;
