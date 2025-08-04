// 로드되면 퀄리티 개선?
'use client';
import Image from 'next/image';
import { useState } from 'react';

const QualityImproveOnloadImage = ({ src, width, height }: { src: string; width: number; height: number }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      src={src}
      alt={`${src} 이미지`}
      onLoad={() => setLoaded(true)}
      quality={loaded ? 100 : 1}
      priority={true}
      width={+String(width)}
      height={+String(height)}
    />
  );
};

export default QualityImproveOnloadImage;
