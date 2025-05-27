import type { Meta, StoryObj } from '@storybook/react';
import { BlurImageOnLoad, Carousel } from '@tripie-pyotato/design-system/@components';

import images from '../tests/images';

const meta: Meta<typeof Carousel> = {
  title: 'tripie-design/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '인스타그램의 이미지 carousel와 같이 임계점을 넘어야 해당 이미지에 고정되는 carousel 컴포넌트입니다.ex. 기본은 인접한 게시물의 60%가 보여야 해당 콘텐츠로 넘어갑니다.',
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Carousel.Image.2',
  render: () => {
    return (
      <Carousel
        items={images.slice(0, 2).map((item, index) => (
          <BlurImageOnLoad.WithSourceUrl
            sizes="large"
            key={item.src + index}
            alt={item.alt}
            src={item.src}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurDataURL}
          />
        ))}
      />
    );
  },
};

export const CarouselImageOf3: Story = {
  name: 'Carousel.Image.3',
  render: () => {
    return (
      <Carousel
        items={images.slice(0, 3).map((item, index) => (
          <BlurImageOnLoad.WithSourceUrl
            sizes="large"
            key={item.src + index}
            alt={item.alt}
            src={item.src}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurDataURL}
          />
        ))}
      />
    );
  },
};

export const CarouselImageOf4: Story = {
  name: 'Carousel.Image.4',
  render: () => {
    return (
      <Carousel
        items={images.slice(0, 4).map((item, index) => (
          <BlurImageOnLoad.WithSourceUrl
            sizes="large"
            key={item.src + index}
            alt={item.alt}
            src={item.src}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurDataURL}
          />
        ))}
      />
    );
  },
};

export const CarouselImageOf5: Story = {
  name: 'Carousel.Image.5',
  render: () => {
    return (
      <Carousel
        items={images.map((item, index) => (
          <BlurImageOnLoad.WithSourceUrl
            sizes="large"
            key={item.src + index}
            alt={item.alt}
            src={item.src}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurDataURL}
          />
        ))}
      />
    );
  },
};
