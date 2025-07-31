import { classNames } from 'wrappers';
import TripieContainer from '../../../@core/layout/TripieContainer/TripieContainer';
import Style from './map-terms.module.scss';

const cx = classNames.bind(Style);

const MapTerms = () => {
  return (
    <TripieContainer
      className={cx('attribution')}
      padding="sm"
      margin="sm"
      display="inline-flex"
      justifyContent="flex-end"
      alignItems="center"
      gap="sm"
    >
      <a href="https://maplibre.org/" target="_blank" rel="noopener noreferrer">
        MapLibre | ©
      </a>
      <a
        href="https://docs.aws.amazon.com/location/latest/developerguide/data-attribution.html"
        rel="noopener noreferrer"
        target="_blank"
      >
        AWS,&nbsp;
      </a>
      <a
        href="https://legal.here.com/en-gb/terms/general-content-supplier-terms-and-notices"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Terms
      </a>
    </TripieContainer>
  );
};
export default MapTerms;
