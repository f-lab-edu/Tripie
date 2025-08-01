import NavigationButton from '@tripie-pyotato/design-system/@components/NavigationButton';
import API from 'constants/api-routes';

const NavButton = ({ onTapStart, sizes = 'large' }: { sizes?: string; onTapStart?: () => void }) => {
  return <NavigationButton sizes={sizes} cloudinaryUrl={API.MEDIA_URL} onTapStart={onTapStart} />;
};

export default NavButton;
