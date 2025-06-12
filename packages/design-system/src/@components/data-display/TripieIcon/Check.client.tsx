import { ICON_RESOURCE_ICON, ICON_SIZES } from 'shared';
import Icon, { IconProps } from './Icon.client';

const CheckIcon = ({ sizes = 'icon', ...args }: Readonly<IconProps>) => {
  return <Icon src={ICON_RESOURCE_ICON('CHECK', ICON_SIZES[sizes])} alt={`체크 아이콘`} {...args} />;
};
export default CheckIcon;
