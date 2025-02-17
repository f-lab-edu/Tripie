import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import TripieImage from '../TripieImage/TripieImage';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'tripie-ui/Carousel',
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
  decorators: [
    (story, context) => {
      const { mode, setMode } = useAppTheme();
      const selectedTheme = context.globals.theme || mode;

      useEffect(() => {
        setMode(selectedTheme);
      }, [selectedTheme]);

      return <div className={`${context.globals.theme}`}>{story()}</div>;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const images = [
  {
    sizes: 'large',
    alt: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/c18376c0-cfde-424c-ad1d-b298cd45007a.jpeg',
    src: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/c18376c0-cfde-424c-ad1d-b298cd45007a.jpeg',
    sourceUrl: 'instagram.com/p/Cdsp6hjJomr',
    blurDataURL:
      'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgPGZpbHRlciBpZD0nYicgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSdzUkdCJz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgIDwvZmlsdGVyPgogICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgCiAgICBocmVmPSdkYXRhOmltYWdlL2F2aWY7YmFzZTY0LC85ai8yd0JEQUFnSUNBZ0pDQWtLQ2drTkRnd09EUk1SRUJBUkV4d1VGaFFXRkJ3ckd4OGJHeDhiS3lZdUpTTWxMaVpFTlM4dk5VUk9RajVDVGw5VlZWOTNjWGVjbk5ILzJ3QkRBUWdJQ0FnSkNBa0tDZ2tORGd3T0RSTVJFQkFSRXh3VUZoUVdGQndyR3g4Ykd4OGJLeVl1SlNNbExpWkVOUzh2TlVST1FqNUNUbDlWVlY5M2NYZWNuTkgvd2dBUkNBQVFBQkFEQVNJQUFoRUJBeEVCLzhRQUZnQUJBUUVBQUFBQUFBQUFBQUFBQUFBQUJnUUYvOFFBRlFFQkFRQUFBQUFBQUFBQUFBQUFBQUFBQXdYLzJnQU1Bd0VBQWhBREVBQUFBQjBpREdPaC84UUFJaEFBQVFRQkJBSURBQUFBQUFBQUFBQUFBZ0VEQkJFQUJRWVNGUk1oSWtGQy85b0FDQUVCQUFFL0FBMkpPb0M3R0tpMGhmdkorelowT0pJa0ZOakdqWUtWRHp0Y2xzNnBPSmx6c0lyYlFrSzBQa1FsckpFYlVZd1BQOWl5ZEN2eERuN1c3KzgvLzhRQUhCRUFBd0FCQlFBQUFBQUFBQUFBQUFBQUFRSURBQkVTSVRLQy85b0FDQUVDQVFFL0FKTFF5TDBRQjlPbTdnZXMvOFFBR3hFQUFRUURBQUFBQUFBQUFBQUFBQUFBQVFBQ0VSSURNc0gvMmdBSUFRTUJBVDhBZFE1QXhseUozamkvLzlrPScgLz4KICA8L3N2Zz4K',
  },
  {
    sizes: 'large',
    alt: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/32a954b5-67e9-436d-a39c-f159ca9d5969.jpeg',
    src: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/32a954b5-67e9-436d-a39c-f159ca9d5969.jpeg',
    sourceUrl: 'instagram.com/p/BmQcLlqhHzB/',
    blurDataURL:
      'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgPGZpbHRlciBpZD0nYicgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSdzUkdCJz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgIDwvZmlsdGVyPgogICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgCiAgICBocmVmPSdkYXRhOmltYWdlL2F2aWY7YmFzZTY0LC85ai8yd0JEQUFnSUNBZ0pDQWtLQ2drTkRnd09EUk1SRUJBUkV4d1VGaFFXRkJ3ckd4OGJHeDhiS3lZdUpTTWxMaVpFTlM4dk5VUk9RajVDVGw5VlZWOTNjWGVjbk5ILzJ3QkRBUWdJQ0FnSkNBa0tDZ2tORGd3T0RSTVJFQkFSRXh3VUZoUVdGQndyR3g4Ykd4OGJLeVl1SlNNbExpWkVOUzh2TlVST1FqNUNUbDlWVlY5M2NYZWNuTkgvd2dBUkNBQVFBQkFEQVNJQUFoRUJBeEVCLzhRQUZ3QUFBd0VBQUFBQUFBQUFBQUFBQUFBQUFRSUVCLy9FQUJVQkFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBRS85b0FEQU1CQUFJUUF4QUFBQURObm1Lbi84UUFJUkFBQWdFREJBTUJBQUFBQUFBQUFBQUFBZ01CQUFRRkJoRVNGQ0ZCVVdMLzJnQUlBUUVBQVQ4QTAyalMxMGhxOHB4VThKM2hoTklCTWF6ZHRwVzF0aTZNaTV4K0E0dWtvSDlUV0t5dlhOaEVzWjNXSSt2VTFrY3RMalVRckdPSEw1NTNyLy9FQUJnUkFRRUFBd0FBQUFBQUFBQUFBQUFBQUFFQ0FBTWgvOW9BQ0FFQ0FRRS9BQ3RoVHd6L3hBQWFFUUFDQWdNQUFBQUFBQUFBQUFBQUFBQUJBd0FDRVJJaC85b0FDQUVEQVFFL0FORkZOVG5zLzlrPScgLz4KICA8L3N2Zz4K',
  },
];

export const Default: Story = {
  name: 'Carousel.Image',
  args: {
    items: images.map((item, index) => (
      <TripieImage.WithSourceUrl
        sizes="large"
        key={item.src + index}
        alt={item.alt}
        src={item.src}
        sourceUrl={item.sourceUrl}
        blurDataURL={item.blurDataURL}
      />
    )),
  },
};
