# Tripie Design system

> !! THIS LIBRARY IS CURRENTLY UNDERGOING MAJOR CHANGES !!

## Heads up

- ~~All the components are marked `'use client';`~~
- `@components` : for client components (marked with `'use client;'`)`
- `@components/core` : base components available as server components
- `@shared` : shared variables

  |:----:|:-:|:---|:--------------------|
  |name|category|description|usage|
  |COLORS|`colors`|referable color constants to use in inline style or props |`import { COLORS } from '@tripie-pyotato/design-system/shared'; <TextFillAnimation text={'Text fill animation'} baseColor={COLORS['40']} />`|
  |ACCORDIAN_VARIANTS|`variants`|||
  |GLOW_VARIANT|`variants`|||
  |SHINE_VARIANT|`variants`|||
  |PLACEHOLDER|`resource url`|||
  |LOADING_IMG|`resource url`||
  |CLOUDINARY_URL|`resource url`||
  |RESOURCE|`resource url`||
  |ICON_RESOURCE|`resource url`||

- `@hooks` : custom hooks

  |:----:|:-:|:---|:--------------------|
  |name|description|usage|
  |`useAppTheme`| custom hook to set up color theme ,currently dark theme is only available||
  |`useCalendar`| custom hook to interact with calendar component||
  |`useCycle`| custom hook to toggle between available style states||

(DOCUMENTATION IS IN PROGRESS!)
