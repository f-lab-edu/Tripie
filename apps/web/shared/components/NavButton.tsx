import { NavigationButton } from '@tripie-pyotato/design-system/@components';
import API from 'constants/api-routes';

const NavButton = ({ onTapStart, sizes = 'large' }: { sizes?: 'large' | 'icon'; onTapStart?: () => void }) => {
  return <NavigationButton sizes={sizes} cloudinaryUrl={API.MEDIA_URL} onTapStart={onTapStart} />;
};

export default NavButton;
