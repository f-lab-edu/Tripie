// 'use client';
// import { Container } from '@tripie-pyotato/design-system';
// import classNames from 'classnames/bind';
// import { Dispatch, SetStateAction, createRef, useRef } from 'react';
// import Chip from 'shared/components/Chip/Chip';
// import Divider from 'shared/components/Divider/Divider';
// import Icon from 'shared/components/Icon/Icon';
// import { Poi, PoiCard } from '../Pois';
// import Style from './map-with-carousel.module.scss';

// export type Transportation = {
//   type: 'transportation';
//   value: { duration: string; transportation: string };
// };

// export type ItineraryItem = {
//   memo: string;
//   poi: Poi;
//   schedule: string;
//   transportation: Transportation[];
// };

// export type MapWithCarouselProps = {
//   type: 'pois';
//   value: {
//     pois: Array<Poi>;
//     memo: Array<ItineraryItem['memo']>;
//     schedule: Array<ItineraryItem['schedule']>;
//     transportation: Array<ItineraryItem['transportation']>;
//   };
// };

// export type Itinerary = {
//   day: number;
//   hideAddButton: boolean;
//   items: ItineraryItem[];
// };

// export type ItineraryProps = { type: 'itinerary'; value: { itinerary: Itinerary } };

// const cx = classNames.bind(Style);

// const TRANSPORTATION: { [key: string]: ({ active }: { active: boolean }) => JSX.Element } = {
//   walk: Icon.Walking,
//   tram: Icon.Tram,
//   ship: Icon.Ship,
//   train: Icon.Train,
//   bus: Icon.Bus,
//   car: Icon.Car,
// };

// const MapWithCarousel = ({
//   item,
//   current,
//   setCurrent,
// }: {
//   item: MapWithCarouselProps;
//   current: string;
//   setCurrent: Dispatch<SetStateAction<string>>;
// }) => {
//   const { pois, transportation, schedule } = item.value;
//   const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(pois.map(() => createRef()));

//   return (
//     <Container margin="none">
//       <Divider className={cx('timeline-divider')} />
//       <Container applyMargin="top-bottom" className={cx(pois.length > 1 ? ['carousel'] : null)}>
//         <Container
//           className={cx(pois.length > 1 ? ['flex-items', 'embedded-card-wrap', 'itinerary-cards'] : null)}
//           margin="none"
//         >
//           {pois.map((poi, index) => (
//             <Container margin="none" key={index + poi.id + poi.source.areas?.[0]?.id} className={cx('total-wrap')}>
//               {transportation[index].map(({ value }) => (
//                 <Container
//                   margin="none"
//                   key={value.duration + value.transportation + index}
//                   className={cx('icon-wrap')}
//                 >
//                   {TRANSPORTATION[value.transportation] != null
//                     ? TRANSPORTATION[value.transportation]({ active: current === `${index + 1}-0` })
//                     : value.transportation}
//                   {'  '}
//                   {value.duration}
//                 </Container>
//               ))}
//               {index === 0 ? <Icon.Flag active={false} className={cx('flag')} /> : null}
//               {index === pois.length - 1 ? (
//                 <Container
//                   margin="none"
//                   key={transportation[0][0].value.transportation + 'null' + index}
//                   className={cx('icon-wrap', 'last-poi')}
//                 >
//                   {TRANSPORTATION[transportation[0][0].value.transportation] != null
//                     ? TRANSPORTATION[transportation[0][0].value.transportation]({
//                         active: current === `${index + 1}-0`,
//                       })
//                     : transportation[0][0].value.transportation}
//                   {transportation[0][0].value.duration}
//                 </Container>
//               ) : null}

//               <Container applyMargin="top" className={cx('timeline-item-wrap')}>
//                 <Container applyMargin="bottom" className={cx('timeline')}>
//                   <Chip className={cx('marker', poi.type)} selected={current === `${index + 1}-0`}>
//                     {schedule[index] != '' ? schedule[index] : index + 1}
//                   </Chip>
//                 </Container>
//                 <PoiCard
//                   onClick={() => setCurrent(`${index + 1}-0`)}
//                   poi={poi}
//                   cardRef={cardRefs.current[index]}
//                   className={cx('itinerary-card')}
//                   selected={current === `${index + 1}-0`}
//                 />
//               </Container>
//             </Container>
//           ))}
//         </Container>
//       </Container>
//     </Container>
//   );
// };

// export default MapWithCarousel;
