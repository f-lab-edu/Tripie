# Tripie Design system

> !! THIS LIBRARY IS CURRENTLY UNDERGOING MAJOR CHANGES !!

## Heads up

- ~~All the components are marked `'use client';`~~
- `@components` : for client components (marked with `'use client;'`)`
- `@components@core` : base components available as server components
- `@shared` : shared variables

|        Name        |    Category    | Description                                               | Usage                                                                                                                                        |
| :----------------: | :------------: | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
|       COLORS       |    `colors`    | Referable color constants to use in inline style or props | `import { COLORS } from '@tripie-pyotato/design-system/shared'; <TextFillAnimation text={'Text fill animation'} baseColor={COLORS['40']} />` |
| ACCORDIAN_VARIANTS |   `variants`   | –                                                         | –                                                                                                                                            |
|    GLOW_VARIANT    |   `variants`   | –                                                         | –                                                                                                                                            |
|   SHINE_VARIANT    |   `variants`   | –                                                         | –                                                                                                                                            |
|    PLACEHOLDER     | `resource url` | –                                                         | –                                                                                                                                            |
|    LOADING_IMG     | `resource url` | –                                                         | –                                                                                                                                            |
|   CLOUDINARY_URL   | `resource url` | –                                                         | –                                                                                                                                            |
|      RESOURCE      | `resource url` | –                                                         | –                                                                                                                                            |
|   ICON_RESOURCE    | `resource url` | –                                                         | –                                                                                                                                            |

- `@hooks` : custom hooks

| Name          | Description                                                                 | Usage |
| ------------- | --------------------------------------------------------------------------- | ----- |
| `useAppTheme` | Custom hook to set up color theme. Currently, only dark theme is available. |       |
| `useCalendar` | Custom hook to interact with the calendar component.                        |       |
| `useCycle`    | Custom hook to toggle between available style states.                       |       |

(DOCUMENTATION IS IN PROGRESS!)
