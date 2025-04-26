import Particle from '../Particles/Particles';

import { classNames } from '../../../../wrappers';
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
        <Particle
          key={`${index}-${particle.x}-${particle.y}-${particle.duration}`}
          x={particle.x}
          y={particle.y}
          duration={particle.duration}
        />
      ))}
    </div>
  );
};

export default ParticleField;
