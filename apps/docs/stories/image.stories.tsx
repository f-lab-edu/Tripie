import type { Meta, StoryObj } from '@storybook/react';
import { TripieImage } from '@tripie-pyotato/design-system/@components/core';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof TripieImage> = {
  title: 'tripie-design/Image',
  component: TripieImage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '이미지 컴포넌트입니다. withBorder boolean 값으로 테두리를 설정할 수 있고, TripieImage.WithSourceUrl 컴포넌트의 경우 sourceUrl을 제공하여 이미지 출처를 표기할 수 있습니다.',
      },
    },
  },
  argTypes: {},
  decorators: [
    (story, context) => {
      const { mode } = useAppTheme();
      context.globals.theme = mode;
      return <div className={`${mode}`}>{story()}</div>;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    alt: 'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg이미지일수도 있음',
    src: 'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg',
    blurDataURL:
      'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgPGZpbHRlciBpZD0nYicgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSdzUkdCJz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgIDwvZmlsdGVyPgogICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgCiAgICBocmVmPSdkYXRhOmltYWdlL2F2aWY7YmFzZTY0LC85ai8yd0JEQUFnSUNBZ0pDQWtLQ2drTkRnd09EUk1SRUJBUkV4d1VGaFFXRkJ3ckd4OGJHeDhiS3lZdUpTTWxMaVpFTlM4dk5VUk9RajVDVGw5VlZWOTNjWGVjbk5ILzJ3QkRBUWdJQ0FnSkNBa0tDZ2tORGd3T0RSTVJFQkFSRXh3VUZoUVdGQndyR3g4Ykd4OGJLeVl1SlNNbExpWkVOUzh2TlVST1FqNUNUbDlWVlY5M2NYZWNuTkgvd2dBUkNBQUxBQkFEQVNJQUFoRUJBeEVCLzhRQUZnQUJBUUVBQUFBQUFBQUFBQUFBQUFBQUJnVUgvOFFBRlFFQkFRQUFBQUFBQUFBQUFBQUFBQUFBQkFYLzJnQU1Bd0VBQWhBREVBQUFBS0NuRFhhSjMvL0VBQ0lRQUFFREF3TUZBQUFBQUFBQUFBQUFBQUlCQXdVQUJCSVJFeUV4TWtGaHNmL2FBQWdCQVFBQlB3Q01uYmQ1eHNIV2tISXROVStwUXpFRXp0NVhIZVdLWWdTODFBcVRyd01tU2szb2E0K3c2VmNtVzZmUG12L0VBQm9SQUFJQ0F3QUFBQUFBQUFBQUFBQUFBQUVDQXhFQUVpTC8yZ0FJQVFJQkFUOEFFMHBUWXZmVlovL0VBQm9SQVFBQ0F3RUFBQUFBQUFBQUFBQUFBQUVDQXdBRUVSTC8yZ0FJQVFNQkFUOEFxMXFtYkh5SERQL1onIC8+CiAgPC9zdmc+Cg==',
    sizes: 'default',
  },
};

export const NoImage: Story = {
  name: 'Image.None',
  args: {
    sizes: 'medium',
  },
};

export const IconImage: Story = {
  name: 'Image.Icon',
  args: {
    alt: 'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg이미지일수도 있음',
    src: 'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg',
    sizes: 'icon',
    withBorder: false,
  },
};

export const MediumImage: Story = {
  name: 'Image.Medium',
  args: {
    alt: 'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg이미지일수도 있음',
    src: 'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg',
    sizes: 'medium',
  },
};
export const SmallImage: Story = {
  name: 'Image.Small',
  args: {
    alt: 'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg이미지일수도 있음',
    src: 'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg',
    sizes: 'small',
  },
};

export const WithSourceUrl: Story = {
  name: 'Image.WithSourceUrl',
  render: () => (
    <TripieImage.WithSourceUrl
      sourceUrl={'https://이미지 출처'}
      alt={
        'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg이미지일수도 있음'
      }
      src={'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg'}
    />
  ),
};

export const WithLongSourceUrl: Story = {
  name: 'Image.WithLongSourceUrl',
  render: () => (
    <TripieImage.WithSourceUrl
      sourceUrl={
        'https://엄청 긴 이미지 출처 엄청 긴 이미지 출처엄청 긴 이미지 출처엄청 긴 이미지 출처엄청 긴 이미지 출처엄청 긴 이미지 출처엄청 긴 이미지 출처엄청 긴 이미지 출처엄청 긴 이미지 출처엄청 긴 이미지 출처엄청 긴 이미지 출처엄청 긴 이미지 출처'
      }
      alt={
        'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg이미지일수도 있음'
      }
      src={'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg'}
    />
  ),
};

export const WithBlurDataUrl: Story = {
  name: 'Image.WithBlurDataUrl',
  render: () => {
    return (
      <div style={{ width: '24rem' }}>
        <TripieImage
          alt={
            'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg이미지일수도 있음'
          }
          src={
            'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/54e3594d-1087-43ff-b760-7231d4103edf.jpeg'
          }
          blurDataURL="data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgPGZpbHRlciBpZD0nYicgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSdzUkdCJz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgIDwvZmlsdGVyPgogICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgCiAgICBocmVmPSdkYXRhOmltYWdlL2F2aWY7YmFzZTY0LC85ai8yd0JEQUFnSUNBZ0pDQWtLQ2drTkRnd09EUk1SRUJBUkV4d1VGaFFXRkJ3ckd4OGJHeDhiS3lZdUpTTWxMaVpFTlM4dk5VUk9RajVDVGw5VlZWOTNjWGVjbk5ILzJ3QkRBUWdJQ0FnSkNBa0tDZ2tORGd3T0RSTVJFQkFSRXh3VUZoUVdGQndyR3g4Ykd4OGJLeVl1SlNNbExpWkVOUzh2TlVST1FqNUNUbDlWVlY5M2NYZWNuTkgvd2dBUkNBQUxBQkFEQVNJQUFoRUJBeEVCLzhRQUZnQUJBUUVBQUFBQUFBQUFBQUFBQUFBQUJnVUgvOFFBRlFFQkFRQUFBQUFBQUFBQUFBQUFBQUFBQkFYLzJnQU1Bd0VBQWhBREVBQUFBS0NuRFhhSjMvL0VBQ0lRQUFFREF3TUZBQUFBQUFBQUFBQUFBQUlCQXdVQUJCSVJFeUV4TWtGaHNmL2FBQWdCQVFBQlB3Q01uYmQ1eHNIV2tISXROVStwUXpFRXp0NVhIZVdLWWdTODFBcVRyd01tU2szb2E0K3c2VmNtVzZmUG12L0VBQm9SQUFJQ0F3QUFBQUFBQUFBQUFBQUFBQUVDQXhFQUVpTC8yZ0FJQVFJQkFUOEFFMHBUWXZmVlovL0VBQm9SQVFBQ0F3RUFBQUFBQUFBQUFBQUFBQUVDQXdBRUVSTC8yZ0FJQVFNQkFUOEFxMXFtYkh5SERQL1onIC8+CiAgPC9zdmc+Cg=="
        />
      </div>
    );
  },
};
