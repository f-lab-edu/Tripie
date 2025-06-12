# Tripie Design system

> !! THIS LIBRARY IS CURRENTLY UNDERGOING MAJOR CHANGES !!

## Heads up

- `@components` : for client components (marked with `'use client;'`)`
- `@components@core` : base components available as server components
- `@shared` : shared variables

Under the hood, tripie's design system have peer dependencies as stated below.

```json
{
  "next": "*",
  "react": "*",
  "react-dom": "^18.3.1",
  "framer": "^2.4.1",
  "framer-motion": "^11.11.17",
  "maplibre-gl": "^4.7.1",
  "react-map-gl": "^7.1.7",
  "react-globe.gl": "^2.27.2",
  "react-calendar": "^5.0.0",
  "react-intersection-observer": "9.13.1",
  "usehooks-ts": "^3.1.0"
}
```

To use those features, install peer dependencies.

## Installation

```bash
 $pnpm i framer framer-motion maplibre-gl react-globe.gl react-calendar react-intersection-observer usehooks-ts
 $pnpm i @tripie-pyotato/design-system
```

|        Name        |    Category    | Description                                               | Usage                                                                                                                                        |
| :----------------: | :------------: | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
|       COLORS       |    `colors`    | Referable color constants to use in inline style or props | `import { COLORS } from '@tripie-pyotato/design-system/shared'; <TextFillAnimation text={'Text fill animation'} baseColor={COLORS['40']} />` |
| ACCORDION_VARIANTS |   `variants`   | –                                                         | –                                                                                                                                            |
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
