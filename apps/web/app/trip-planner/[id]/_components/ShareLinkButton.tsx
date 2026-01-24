import copyTextUrl, { isClipBoardTextCopied } from '@/app/helper/copyUrl';
import { Divider, Icon } from '@tripie-pyotato/design-system/@components';
import ToolTip from '@tripie-pyotato/design-system/@components/Tooltip';
import { Stack, Text } from '@tripie-pyotato/design-system/@core';
import { PointerEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';

function ShareLinkButton({ url }: { url: string }) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isTouchRef = useRef(false);
  const isTouchInteractionRef = useRef(false);

  const isTouch = isTouchInteractionRef.current;

  const handleLinkShare = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const res = await copyTextUrl(url);
      setIsCopied(Boolean(res));
    } finally {
      setIsLoading(false);
    }
  }, [url, isLoading]);

  const handlePointerDown = useCallback(
    async (e: PointerEvent) => {
      if (e.pointerType === 'touch') {
        isTouchInteractionRef.current = true;
        e.preventDefault();

        setIsTooltipOpen(true); // 👈 always open on touch
        await handleLinkShare();

        // allow tooltip to auto-close again AFTER a short window
        setTimeout(() => {
          isTouchInteractionRef.current = false;
        }, 300);
      }
    },
    [handleLinkShare]
  );

  const checkClipboard = useCallback(async () => {
    const copied = await isClipBoardTextCopied(url);
    setIsCopied(copied);
  }, [url]);

  useEffect(() => {
    checkClipboard();
  }, [checkClipboard]);

  const copyStatus = useMemo(() => {
    if (isLoading) {
      return (
        <Stack gap="sm" direction="row" margin="none">
          <Text>중 </Text> <Icon.Loading width={4} height={4} animate={'spin'} />
        </Stack>
      );
    }
    return isCopied ? (
      <Stack gap="sm" direction="row" margin="none">
        <Text>완료 </Text>
        <Icon.Check width={4} height={4} animate={{}} />
      </Stack>
    ) : (
      '하기'
    );
  }, [isLoading, isCopied]);

  const handleOpenTooltip = useCallback(() => {
    setIsTooltipOpen(true);
    checkClipboard();
  }, [checkClipboard]);

  const handleClick = useCallback(() => {
    if (isTouchRef.current) {
      isTouchRef.current = false;
      return; // 🚫 ignore fake click after touch
    }

    handleLinkShare();
  }, [handleLinkShare]);

  useEffect(() => {
    if (isCopied) {
      const t = setTimeout(() => setIsTooltipOpen(false), 1500);
      return () => clearTimeout(t);
    }
  }, [isCopied]);

  return (
    <ToolTip
      tooltipPosition="right"
      open={isTooltipOpen}
      onOpenChange={open => {
        // 🚫 ignore auto-close during touch interaction
        if (isTouchInteractionRef.current && open === false) {
          return;
        }
        handleClick();
        setIsTooltipOpen(open);
      }}
      onPointerDown={handlePointerDown}
      key={`${isCopied}-${isLoading}-${copyStatus}`}
      onMouseEnter={isTouch ? undefined : handleOpenTooltip}
      onMouseLeave={isTouch ? undefined : handleOpenTooltip}
      onFocus={isTouch ? undefined : handleOpenTooltip}
      onBlur={isTouch ? undefined : handleOpenTooltip}
      triggerChildren={
        <span>
          <Stack gap="sm" direction="row" margin="none">
            <Icon.Link height={12} width={12} tooltipColor={50} cursor="pointer" />
            <Text.Accented size="tiny" bold={true} margin="none" noGapUnderText={true}>
              링크 복사
            </Text.Accented>
          </Stack>
          <Divider />
        </span>
      }
      renderDescription={
        <Stack gap="sm" direction="row" margin="none">
          <Text.Accented size="tiny" noGapUnderText={true}>
            복사
          </Text.Accented>{' '}
          <Text.Accented size="tiny"> {copyStatus}</Text.Accented>
        </Stack>
      }
    />
  );
}

export default ShareLinkButton;
