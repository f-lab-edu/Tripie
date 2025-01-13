import Particle from './Particle';

import classNames from 'classnames/bind';

import Style from './particle-field.module.scss';
const cx = classNames.bind(Style);

const particles = Array.from({ length: 50 }, () => ({
  x: Math.random() * 1000 - 500,
  y: Math.random() * 1000 - 500,
  duration: Math.random() * 10 + 5,
}));

const ParticleField = () => {
  return (
    <div className={cx('particle-field')}>
      {particles.map((particle, index) => (
        <Particle key={index} x={particle.x} y={particle.y} duration={particle.duration} />
      ))}
    </div>
  );
};

export default ParticleField;
