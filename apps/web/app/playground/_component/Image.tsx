import Image from 'next/image';

const NextImage = ({ src, width, height }: { src: string; width: number; height: number }) => {
  return <Image src={src} alt={`${src} 이미지`} priority={true} width={width} height={height} />;
};
export default NextImage;
