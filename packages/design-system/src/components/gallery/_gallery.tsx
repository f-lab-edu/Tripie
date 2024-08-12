import classNames from "classnames/bind";
import Image from "next/image";
import Style from "./_gallery.module.scss";

const MAX_IMAGE_COUNT = 5;

export type GalleryProps = {
  urls: string[];
  displayLeftOverImgCount?: boolean;
  variant?: "default" | "post";
} & Omit<React.ComponentProps<"div">, "children">;

const cx = classNames.bind(Style);
const DEFAULT_IMG_SIZE_PX = 1024;

const Gallery = ({
  urls,
  className,
  displayLeftOverImgCount = false,
  variant = "default",
  ...props
}: GalleryProps) => {
  const totalImgUrlCount = urls.length;
  const displayedImages = urls.slice(0, MAX_IMAGE_COUNT);

  return (
    <div
      className={cx(
        "gallery",
        variant,
        `gallery-img-length-${displayedImages.length}`
      )}
      {...props}
    >
      {displayedImages.map((url, index) =>
        displayLeftOverImgCount && index === 4 ? (
          <div className={cx("image-container", variant)}>
            <span className={cx("display-leftover-img-count", variant)}>
              +{totalImgUrlCount - MAX_IMAGE_COUNT}
            </span>
            <Image
              src={url}
              alt={url}
              width={DEFAULT_IMG_SIZE_PX}
              height={DEFAULT_IMG_SIZE_PX}
              className={cx("gallery-item", "overlay", variant)}
              key={url + index}
            />
          </div>
        ) : (
          <Image
            src={url}
            alt={url}
            width={DEFAULT_IMG_SIZE_PX}
            height={DEFAULT_IMG_SIZE_PX}
            className={cx("gallery-item", variant)}
            key={url + index}
          />
        )
      )}
    </div>
  );
};

const PostGallery = (props: Omit<GalleryProps, "variant">) => (
  <Gallery {...props} variant="post" />
);

Gallery.Post = PostGallery;

export default Gallery;
