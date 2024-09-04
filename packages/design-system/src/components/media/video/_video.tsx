import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import Style from "./_video.module.scss";

export type VideoProps = React.ComponentProps<"video">;

const cx = classNames.bind(Style);

const Video = ({ className, src, ...props }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 스크롤이 threshold를 벗어나면 재생하지 않도록
  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };

    let handlePlay = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={cx(className, "video")}
      autoPlay
      loop
      playsInline
      muted
      {...props}
      src={src}
    />
  );
};

export type SkeletonProps = React.ComponentProps<"div">;

const VideoSkeleton = ({ className, ...props }: SkeletonProps) => {
  return <div className={cx(className, "video", "skeleton")} {...props} />;
};

Video.Skeleton = VideoSkeleton;

export default Video;
