'use client';

import classNames from 'classnames/bind';
import COLORS from 'constants/colors';
import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';

import { GlobeMethods } from 'react-globe.gl';
import Countries from './countries.json';
import Style from './globe.module.scss';

const cx = classNames.bind(Style);

// https://github.com/vasturiano/react-globe.gl/issues/1#issuecomment-554459831
const Globe = dynamic(import('react-globe.gl'), { ssr: false });

const RotatingGlobe = () => {
  const globeRef = useRef<GlobeMethods>();

  useEffect(() => {
    const globe = globeRef.current;
    if (globe != null) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 2.5;
      globe.controls().enableZoom = false;
    }
  }, []);

  return (
    <div className={cx('globe')}>
      <Globe
        height={500}
        ref={globeRef}
        backgroundColor={COLORS['100000']}
        globeImageUrl="/earth-dark.jpeg"
        hexPolygonsData={Countries.features}
        hexPolygonColor={() => COLORS[50]}
        atmosphereColor={COLORS[50]}
      />
    </div>
  );
};

export default RotatingGlobe;
