import classNames from "classnames/bind";
import Link from "next/link";
import { ReactNode } from "react";
import Container from "../container";
import Gallery from "../gallery";
import Image, { ProfileProps } from "../media/image";
import Style from "./_card.module.scss";

export type CardProps = {
  children?: ReactNode;
  coverImage: string[];
  href: string;
} & Omit<React.ComponentProps<"div">, "children"> &
  ProfileProps;

const cx = classNames.bind(Style);

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={cx(className, "card")} {...props}>
      {children}
    </div>
  );
};

const PostCard = ({
  href,
  children,
  className,
  coverImage,
  src,
  userName,
  ...props
}: CardProps) => {
  return (
    <Link href={href} className={cx(className, "card-link")}>
      <Container margin="none" className={cx("card")} {...props}>
        <Container margin="none" className={cx("card-profile-image")}>
          <Image.Profile src={src} userName={userName} />
        </Container>
        <Container margin="none" className={cx("card-gallery-container")}>
          <Gallery
            urls={coverImage}
            className={cx("card-gallery", `card-${coverImage.length}`)}
          />
        </Container>
        <Container margin="m" className={cx("card-content-container")}>
          {children}
        </Container>
      </Container>
    </Link>
  );
};

Card.Post = PostCard;

export default Card;
