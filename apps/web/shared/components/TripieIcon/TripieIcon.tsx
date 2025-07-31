'use client';
import { Icon, IconProps } from '@tripie-pyotato/design-system/@components';
import API from 'constants/api-routes';
import { Transport } from 'models/Itinery';

const iconMap = {
  cloud: Icon.Cloud,
  x: Icon.X,
  cursor: Icon.Cursor,
  loading: Icon.Loading,
  base: Icon,
  plane: Icon.Plane,
  check: Icon.Check,
  transport: Icon.Transport,
  auth: Icon.Auth,
  refresh: Icon.Refresh,
} as const;

type Variant = keyof typeof iconMap;

const TripieIcon = ({
  variant = 'base',
  index = 0,
  ...args
}: IconProps & {
  hovered?: string;
  delay?: number;
  variant?: string;
  index?: number;
  active?: boolean;
  type?: Transport;
}) => {
  const Component = iconMap[variant as Variant];

  if (Component) {
    return <Component {...args} index={index} cloudinaryUrl={API.MEDIA_URL} />;
  }

  return <Icon {...args} cloudinaryUrl={API.MEDIA_URL} />;
};

export default TripieIcon;
