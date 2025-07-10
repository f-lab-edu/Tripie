'use client';
import { ICON_RESOURCE_ICON, ICON_SIZES } from 'shared';
import Icon, { IconProps } from './Icon.client';

export type Transport = 'WALK' | 'TRAM' | 'TRAIN' | 'SHIP' | 'BUS' | 'FLAG' | 'CAR';

const TransportIcon = ({
  active = false,
  type = 'FLAG',
  sizes = 'icon',
  ...args
}: Readonly<IconProps> & {
  active?: boolean;
  type?: Transport;
}) => {
  return (
    <Icon
      animate={active ? { rotate: [0, 10, -10, 0] } : { rotate: 0 }}
      initial={'initial'}
      transition={active ? { repeat: Infinity, repeatType: 'loop', duration: 0.8, ease: 'easeInOut' } : {}}
      src={ICON_RESOURCE_ICON(type, ICON_SIZES[sizes])}
      sizes={sizes}
      alt={`${type} 아이콘`}
      isButton={false}
      {...args}
    />
  );
};

export default TransportIcon;
