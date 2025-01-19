import classNames from 'classnames/bind';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { default as NextImage } from 'next/image';
import Style from './_image.module.scss';

const DEFAULT_IMAGE_SIZE_PX = 1024;
const URLS = {
  NO_IMAGE: 'https://placehold.co/600x600?text=NO+IMAGE',
  NO_PROFILE: 'https://eu.ui-avatars.com/api/?name=&size=250',
};

export type ImageProps = {
  width?: number;
  height?: number;
  src?: string | StaticImport;
  variant?: 'default' | 'profile';
  alt?: string | StaticImport;
  sizes?: 'l' | 'm' | 'sm';
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height' | 'sizes'>;

const cx = classNames.bind(Style);

const Image = ({
  children,
  className,
  src = URLS.NO_IMAGE,
  alt = 'NO IMAGE',
  width = DEFAULT_IMAGE_SIZE_PX,
  height = DEFAULT_IMAGE_SIZE_PX,
  variant = 'default',
  sizes = 'm',
  ...props
}: ImageProps) => {
  return (
    <NextImage
      className={cx(className, variant, variant == 'profile' ? sizes : null, 'image')}
      width={width}
      src={src}
      alt={alt}
      height={height}
      {...props}
      placeholder="blur"
      blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnUlEQVR42u3RAQ0AAAQAMJKLQVw1zP4Kz56p4IwUIgQhQhAiBCFCECJEiBCECEGIEIQIQYgQhCBECEKEIEQIQoQgBCFCECIEIUIQIgQhCBGCECEIEYIQIQhBiBCECEGIEIQIQQhChCBECEKEIEQIQhAiBCFCECIEIUIQghAhCBGCECEIEYIQhAhBiBCECEGIEIQIESIEIUIQIgQh3y0o/eO9w8OBXwAAAABJRU5ErkJggg=="
    />
  );
};

export type ProfileProps = {
  userName: string;
} & ImageProps;

const ProfileImage = ({ sizes, src = URLS.NO_PROFILE, userName = '', className, ...props }: ProfileProps) => (
  <Image
    {...props}
    className={cx(className)}
    variant="profile"
    src={
      src == URLS.NO_PROFILE ? URLS.NO_PROFILE.replace('?name=&size=250', `?name=${encodeURI(userName)}&size=250`) : src
    }
    sizes={sizes}
  />
);

Image.Profile = ProfileImage;

export default Image;
