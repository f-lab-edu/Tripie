import classNames from "classnames/bind";
import Image from "next/image";
import Style from "./_gallery.module.scss";

const MAX_IMAGE_SIZE = 4;

export type GalleryProps = {
  imgUrls: string[];
  displayLeftOverImgCount?: boolean;
} & Omit<React.ComponentProps<"div">, "children">;

const style = classNames.bind(Style);

const Gallery = ({
  imgUrls,
  className,
  displayLeftOverImgCount = false,
  ...props
}: GalleryProps) => {
  const totalImgUrlCount = imgUrls.length;
  return (
    <div
      className={style(
        "gallery",
        `gallery-img-length-${imgUrls.slice(0, 5).length}`
      )}
      {...props}
    >
      {imgUrls.slice(0, 5).map((url, index) =>
        displayLeftOverImgCount && index === 4 ? (
          <div className={style("image-container")}>
            <span className={style("display-leftover-img-count")}>
              +{totalImgUrlCount - MAX_IMAGE_SIZE}
            </span>
            <Image
              src={url}
              alt={url}
              width={300}
              height={300}
              className={style("gallery-item", "overlay")}
              key={url + index}
            />
          </div>
        ) : (
          <Image
            src={url}
            alt={url}
            width={300}
            height={300}
            className={style("gallery-item")}
            key={url + index}
          />
        )
      )}
    </div>
  );
};

export default Gallery;
