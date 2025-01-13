import COLORS from 'constants/colors';
import { Variant } from 'framer-motion';

const GLOW_VARIANT = {
  rest: { boxShadow: 'none' } as Variant,
  glow: {
    boxShadow: [`-2px 0px 10px 0px ${COLORS[50]}`, `2px 0px 10px 0px ${COLORS[50]}`, `0px 2px 10px 0px ${COLORS[50]}`],
    transition: {
      duration: 0.8,
      ease: 'circInOut',
    },
  } as Variant,
};

const SHINE_VARIANT = {
  rest: { boxShadow: 'none' } as Variant,
  selected: {
    backgroundColor: COLORS[100],
    borderColor: COLORS[300],
  } as Variant,
  shine: { backgroundColor: COLORS[100], borderColor: COLORS[300] } as Variant,
};
export { GLOW_VARIANT, SHINE_VARIANT };
