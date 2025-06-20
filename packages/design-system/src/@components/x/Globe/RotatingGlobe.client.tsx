'use client';

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useRef } from 'react';
import { GlobeMethods } from 'react-globe.gl';
import { CLOUDINARY_URL, COLORS, RESOURCE } from '../../../shared';

import TripieContainer, { TripieContainerProps } from '@core/layout/TripieContainer';
import Countries from './countries.json';

import './globe.scss';

// https://github.com/vasturiano/react-globe.gl/issues/1#issuecomment-1710898408
const Globe = dynamic(() => import('react-globe.gl').then(mod => mod.default), {
  ssr: false,
});

const RotatingGlobe = ({
  className,
  height = 500,
  width = 500,
  ...args
}: TripieContainerProps & { width: number; height: number }) => {
  const globeRef = useRef<GlobeMethods>();

  // Globe 가 충분히 로드될때까지 초기화 대기
  // React ref 가 아직 undefined인 문제가 있었음. globeRef 가 준비 되기 전 확인하기
  useEffect(() => {
    const interval = setInterval(() => {
      if (globeRef.current) {
        const globe = globeRef.current;
        const controls = globe.controls();
        controls.enableZoom = false; // zoom 비활성화
        controls.autoRotate = true; // 자동화
        controls.autoRotateSpeed = 2.5;
        clearInterval(interval); // ref가 준비되면 polling mechanism 중단
      }
    }, 100); // 100ms 마다 확인

    return () => clearInterval(interval);
  }, []);

  return (
    <TripieContainer {...args} className={`globe ${className != null ? className : ''}`}>
      <Suspense fallback={null}>
        <Globe
          height={height}
          width={width}
          ref={globeRef}
          backgroundColor={COLORS['100000']}
          globeImageUrl={`${CLOUDINARY_URL()}${RESOURCE.EARTH}`}
          hexPolygonsData={Countries.features}
          hexPolygonColor={() => COLORS[50]}
          atmosphereColor={COLORS[50]}
        />
      </Suspense>
    </TripieContainer>
  );
};

export default RotatingGlobe;
