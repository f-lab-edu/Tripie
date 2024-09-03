import COLORS from 'constants/colors';
import { Variant } from 'framer-motion';

const GLOW_VARIANT = {
  rest: { boxShadow: 'none' } as Variant,
  glow: {
    boxShadow: [`-2px 0px 10px 0px ${COLORS[50]}`, `2px 0px 10px 0px ${COLORS[50]}`, `0px 2px 10px 0px ${COLORS[50]}`],
  } as Variant,
};
export { GLOW_VARIANT };
