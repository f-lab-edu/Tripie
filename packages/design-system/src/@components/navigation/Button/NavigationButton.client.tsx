'use client';

import { useRouter } from 'next/navigation';
import { Motion, classNames } from 'wrappers';

import Style from './navigation-button.module.scss';

import NavigateIcon, {
  NavigationDirection,
  NavigationIconProps,
} from '@components/data-display/TripieIcon/Navigation/Navigation.client';

const cx = classNames.bind(Style);

const NavigateButton = ({
  direction = 'back',
  src,
  sizes = 'icon',
  disabled,
  onTapStart,
  navigateUrl,
}: Readonly<NavigationIconProps>) => {
  const navigate = useRouter();

  const onNavigate = ({ direction }: NavigationDirection) => {
    if (navigateUrl != null) {
      return navigate.replace(navigateUrl);
    }
    direction === 'back' ? navigate.back() : navigate.forward();
  };

  return (
    <Motion.Button
      disabled={disabled}
      onTapStart={() => {
        onTapStart != null ? onTapStart() : onNavigate({ direction });
      }}
      className={cx('btn-icon', classNames)}
    >
      <NavigateIcon direction={direction} sizes={sizes} src={src} />
    </Motion.Button>
  );
};

export default NavigateButton;
