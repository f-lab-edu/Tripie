'use client';

import COLORS from 'constants/colors';
import { useEffect, useRef, useState } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';

import classNames from 'classnames/bind';
import Countries from './countries.json';
import Style from './globe.module.scss';

const cx = classNames.bind(Style);

const RotatingGlobe = () => {
  const [countries] = useState(Countries);
  const globeRef = useRef<GlobeMethods>();
  const [rotation] = useState(true);

  useEffect(() => {
    if (globeRef?.current != null) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 2.5;
      globeRef.current.controls().enableZoom = false;
    }
  }, [rotation]);

  return (
    <div className={cx('globe')}>
      <Globe
        height={500}
        ref={globeRef}
        backgroundColor={COLORS[500]}
        globeImageUrl="/earth-dark.jpeg"
        hexPolygonsData={countries.features}
        hexPolygonColor={() => COLORS[50]}
        atmosphereColor={COLORS[50]}
      />
    </div>
  );
};
export default RotatingGlobe;
