/** 새로운 탭에 페이지 열어준다. */
export const openNewTab = (url: string) => {
  if (typeof window !== 'undefined' && window?.open) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

export const windowIsValid = () => {
  return typeof window !== 'undefined';
};

export const handleTabAction = ({ url, action = 'open' }: { url?: string; action?: 'open' | 'close' }) => {
  const tabAction = {
    open: () => {
      window?.open ? window.open(url, '_blank', 'noopener,noreferrer') : null;
    },
    close: () => {
      window?.close ? window.close() : null;
    },
  };

  if (windowIsValid()) {
    tabAction[action]();
  }
};
