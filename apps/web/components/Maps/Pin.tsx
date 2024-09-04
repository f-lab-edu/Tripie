import { Pin as ReactGoogleMapsPin, PinProps as ReactGoogleMapsPinProps } from '@vis.gl/react-google-maps';
import { PIN_VARIATION } from 'constants/maps';

interface PinProps extends ReactGoogleMapsPinProps {
  variation?: 'accommodation' | 'restaurant' | 'attraction';
  numberOfOrder?: number;
}

const Pin = ({ numberOfOrder = 1, variation = 'accommodation', ...props }: PinProps) => {
  return (
    <ReactGoogleMapsPin
      {...props}
      background={PIN_VARIATION[variation]['background']}
      borderColor={PIN_VARIATION[variation]['borderColor']}
      glyphColor={PIN_VARIATION[variation]['glyphColor']}
    >
      {numberOfOrder}
    </ReactGoogleMapsPin>
  );
};

export default Pin;
