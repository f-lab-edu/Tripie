'use client';

import dynamic from 'next/dynamic';
import { ReactNode, useEffect, useRef, useState } from 'react';
import TripieContainer, { TripieContainerProps } from '../../../@core/layout/TripieContainer';
import { CLOUDINARY_URL, COLORS, RESOURCE, useInView } from '../../../shared';
import { GlobeMethods, GlobeProps } from '../../../wrappers/react-globe';

import LoadingIcon from '@components/data-display/TripieIcon/Loading.client';
import Countries from './countries.json';

// https://github.com/vasturiano/react-globe.gl/issues/1#issuecomment-1710898408
const Globe = dynamic(() => import('react-globe.gl').then(mod => mod.default), {
  ssr: false,
  loading: () => <LoadingIcon />,
});

const RotatingGlobe = ({
  height = 500,
  width = 500,
  display = 'inline-flex',
  cloudinaryUrl,
  fallback = <LoadingIcon />,
  backgroundColor = COLORS['100000'],
  hexPolygonColor = () => COLORS[50],
  globeImageUrl = CLOUDINARY_URL() + 'f_auto,q_auto/' + RESOURCE.EARTH,
  ...args
}: GlobeProps & { fallback?: ReactNode; cloudinaryUrl?: string } & Pick<TripieContainerProps, 'display'>) => {
  const globeRef = useRef<GlobeMethods>();
  const { ref, inView } = useInView();
  const [isRotating, setIsRotating] = useState(false);

  // Globe 가 충분히 로드될때까지 초기화 대기
  // React ref 가 아직 undefined인 문제가 있었음. globeRef 가 준비 되기 전 확인하기
  useEffect(() => {
    const interval = setInterval(() => {
      if (globeRef.current && !isRotating && inView) {
        // const coutryList = import('./countries.json');

        const globe = globeRef.current;
        const controls = globe.controls();
        controls.enableZoom = false; // zoom 비활성화
        controls.autoRotate = true; // 자동화
        controls.autoRotateSpeed = 2.5;
        setIsRotating(true);

        clearInterval(interval); // ref가 준비되면 polling mechanism 중단
      }
    }, 100); // 100ms 마다 확인

    return () => {
      clearInterval(interval);
    };
  }, [inView, isRotating]);

  return (
    <TripieContainer
      ref={ref}
      display={display}
      style={{ minHeight: height, minWidth: width }}
      alignItems="center"
      justifyContent="center"
    >
      <Globe
        height={height}
        width={width}
        ref={globeRef}
        backgroundColor={backgroundColor}
        globeImageUrl={
          cloudinaryUrl != null ? globeImageUrl?.replace('https://res.cloudinary.com', cloudinaryUrl) : globeImageUrl
        }
        hexPolygonsData={Countries.features}
        hexPolygonColor={hexPolygonColor}
        atmosphereColor={COLORS[50]}
        {...args}
      />
    </TripieContainer>
  );
};

export default RotatingGlobe;
