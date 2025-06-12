'use client';

import Icon, { IconProps } from '../Icon.client';

import { ICON_RESOURCE_ICON, ICON_SIZES } from '../../../../shared/resource';
import variants from './variants';

const RefreshIcon = ({ onTapStart, animate, transition, sizes = 'icon', isButton, ...args }: Readonly<IconProps>) => {
  return (
    // <Motion.Div
    // onTapStart={onTapStart}
    // whileTap={'hover'}
    // whileHover={'hover'}
    // className={cx(sizes, className)}
    // variants={variants('undo')}
    // transition={transition}
    // initial={'closed'}
    // animate={animate}
    // >
    //   <img
    //     width={ICON_SIZES[sizes]}
    //     height={ICON_SIZES[sizes]}
    //     src={ICON_RESOURCE_ICON('REFRESH', ICON_SIZES[sizes])}
    //     alt={'새로고침 버튼'}
    //     className={cx(isButton ? 'btn-icon' : '', 'icon-image')}
    //     crossOrigin="anonymous"
    //   />
    // </Motion.Div>
    <Icon
      onTapStart={onTapStart}
      whileTap={'hover'}
      whileHover={'hover'}
      variants={variants('undo')}
      transition={transition}
      initial={'closed'}
      animate={animate}
      {...args}
      src={ICON_RESOURCE_ICON('REFRESH', ICON_SIZES[sizes])}
      alt={'새로고침 아이콘'}
      isButton={isButton}
    />
  );
};
export default RefreshIcon;
