'use client';
// https://base-ui.com/react/components/popover
import Popover from 'wrappers/base-ui-components';
import { classNames } from '../../../wrappers';

import { ComponentProps, ReactElement, ReactNode, useMemo } from 'react';
import { COLORS } from 'shared';

import ArrowSvg from '../TripieIcon/Arrow/Arrow.client';
import Style from './tooltip.module.scss';

const cx = classNames.bind(Style);

export type Side = 'bottom' | 'top' | 'left' | 'right' | 'inline-end' | 'inline-start';
export type Align = 'center' | 'start' | 'end';
export type PopoverRootProps = ComponentProps<typeof Popover.Root>;
export type PopoverTriggerProps = ComponentProps<typeof Popover.Trigger>;
export type PopoverPortalProps = ComponentProps<typeof Popover.Portal>;
export type PopoverPopupProps = ComponentProps<typeof Popover.Popup>;
export type PopoverArrowProps = ComponentProps<typeof Popover.Arrow>;
export type PopoverDescriptionProps = ComponentProps<typeof Popover.Description>;
export type PopoverCloseProps = ComponentProps<typeof Popover.Close>;
export type PopoverTitleProps = ComponentProps<typeof Popover.Title>;
export type PopoverPositionerProps = ComponentProps<typeof Popover.Positioner>;

export type ToolTipPosition =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'
  | 'left-start'
  | 'left'
  | 'left-end';

const ToolTip = ({
  title,
  sideOffset = 8,
  description,
  defaultOpen = false,
  open,
  tooltipPosition = 'bottom',
  onOpenChange,
  actionsRef,
  modal = false,
  onOpenChangeComplete,
  children,
  closeDelay = 0,
  tooltipColor = 400,
  renderDescription,
  keepMounted = false,
  openOnHover = true,
  delay = 0.3,
  className,
  withBackDrop = false,
  withCloseButton = false,
  renderClose,
  renderTitle,
  renderPopup,
  renderArrow,
  renderTrigger,
  arrow,
  collisionPadding = 5,
  collisionBoundary = 'clipping-ancestors',
  anchor,
  sticky = false,
  positionMethod = 'absolute',
  alignOffset = 0,
  collisionAvoidance,
  arrowPadding = 5,
  trackAnchor,
  initialFocus,
  finalFocus,
  triggerChildren,
}: {
  sideOffset?: number;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactElement;
  tooltipPosition?: ToolTipPosition;
  renderDescription?: ReactElement;
  renderClose?: ReactElement;
  withBackDrop?: boolean;
  renderTitle?: ReactElement;
  withCloseButton?: boolean;
  renderArrow?: ReactElement;
  triggerChildren?: ReactNode;
  renderPopup?: ReactElement;
  renderTrigger?: ReactElement;
  arrow?: ReactElement;
  tooltipColor?: keyof typeof COLORS;
} & Partial<PopoverRootProps> &
  Partial<PopoverTriggerProps> &
  Partial<PopoverPortalProps> &
  Partial<PopoverPopupProps> &
  Partial<PopoverPositionerProps> &
  Partial<PopoverArrowProps>) => {
  // Which side of the anchor element to align the popup against. May automatically change to avoid collisions.
  const side: Side = useMemo(() => {
    if (tooltipPosition.startsWith('top')) {
      return 'top';
    } else if (tooltipPosition.startsWith('left')) {
      return 'left';
    } else if (tooltipPosition.startsWith('right')) {
      return 'right';
    } else if (tooltipPosition.startsWith('bottom')) {
      return 'bottom';
    } else {
      return 'bottom';
    }
  }, [tooltipPosition]);

  // How to align the popup relative to the specified side.
  const align: Align = useMemo(() => {
    if (tooltipPosition.endsWith('start')) {
      return 'start';
    } else if (tooltipPosition.startsWith('end')) {
      return 'end';
    }
    return 'center';
  }, [tooltipPosition]);

  if (children != null) {
    return (
      <Popover.Root
        closeDelay={closeDelay}
        modal={modal}
        defaultOpen={defaultOpen}
        open={open}
        onOpenChange={onOpenChange}
        openOnHover={openOnHover}
        delay={delay * 1_000}
        actionsRef={actionsRef}
        onOpenChangeComplete={onOpenChangeComplete}
      >
        {children}
      </Popover.Root>
    );
  }

  return (
    <Popover.Root
      closeDelay={closeDelay}
      modal={modal}
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      openOnHover={openOnHover}
      delay={delay * 1_000}
      actionsRef={actionsRef}
      onOpenChangeComplete={onOpenChangeComplete}
    >
      <Popover.Trigger render={renderTrigger} className={cx('tool-tip-trigger', className)}>
        {triggerChildren}
      </Popover.Trigger>
      <Popover.Portal keepMounted={keepMounted}>
        {withBackDrop ? <Popover.Backdrop /> : null}
        <Popover.Positioner
          collisionPadding={collisionPadding}
          collisionBoundary={collisionBoundary}
          anchor={anchor}
          sticky={sticky}
          positionMethod={positionMethod}
          alignOffset={alignOffset}
          collisionAvoidance={collisionAvoidance}
          arrowPadding={arrowPadding}
          trackAnchor={trackAnchor}
          side={side}
          sideOffset={sideOffset}
          align={align}
          className={cx('positioner')}
        >
          <Popover.Popup
            render={renderPopup}
            className={cx('popup', `tool-tip-color-${tooltipColor}`)}
            initialFocus={initialFocus}
            finalFocus={finalFocus}
          >
            <Popover.Arrow className={cx('arrow')} render={renderArrow}>
              {arrow == null ? <ArrowSvg tooltipColor={tooltipColor} /> : arrow}
            </Popover.Arrow>
            <Popover.Title render={renderTitle}>{title}</Popover.Title>

            <Popover.Description render={renderDescription}>{description}</Popover.Description>
            {withCloseButton ? <Popover.Close render={renderClose} /> : null}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default ToolTip;
