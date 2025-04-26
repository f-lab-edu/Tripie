import { ComponentProps } from 'react';
import { classNames } from '../../../wrappers';
import Style from './skeleton.module.scss';

export type GridProps = ComponentProps<'div'>;

const cx = classNames.bind(Style);

const Skeleton = ({ children, className, ...props }: GridProps) => {
  return (
    <div className={cx('skeleton', className)} {...props}>
      {children}
    </div>
  );
};

const SkeletonImage = ({ children, className, ...props }: GridProps) => {
  return (
    <div className={cx('skeleton', className)} {...props}>
      {children}
    </div>
  );
};

Skeleton.Image = SkeletonImage;

export default Skeleton;
