import { useMemo } from 'react';

const useImgAlt = ({ imgUrl }: { imgUrl: string }) => {
  const alt = useMemo(() => {
    return `${imgUrl}의 이미지일 수도 있음`;
  }, [imgUrl]);
  return { alt };
};

export default useImgAlt;
