'use client';

// import { Container } from '@tripie-pyotato/design-system';
// import classNames from 'classnames/bind';
// import useFunnel from 'hooks/useFunnel';
// import { ContinentKeys } from 'models/Continent';
// import ChatFunnel from './_components/Chat';
// import CompanionFunnel from './_components/Companion';
// import DurationFunnel from './_components/Duration';
// import { LocationFunnel } from './_components/Location/LocationFunnel';
// import PreferenceFunnel from './_components/Preference';
// import Style from './trip-planner.module.scss';

// const cx = classNames.bind(Style);

// const TripPlanner = () => {
//   const funnel = useFunnel<{
//     LOCATION: {
//       continent?: ContinentKeys;
//       country?: string;
//       city?: { all: string[]; selected: string[] };
//     };
//     DURATION: {
//       continent: ContinentKeys;
//       country: string;
//       city: { all: string[]; selected: string[] };
//       duration?: string;
//       companion?: string;
//       preference?: string;
//     };
//     COMPANION: {
//       continent: ContinentKeys;
//       country: string;
//       city: { all: string[]; selected: string[] };
//       duration: string;
//       companion: string;
//       preference?: string;
//     };
//     PREFERENCE: {
//       continent: ContinentKeys;
//       country: string;
//       city: { all: string[]; selected: string[] };
//       duration: string;
//       companion: string;
//       preference?: string;
//     };
//     CHAT: {
//       continent: ContinentKeys;
//       country: string;
//       city: { all: string[]; selected: string[] };
//       duration: string;
//       companion: string;
//       preference: string;
//     };
//   }>({
//     id: 'trip-plan',
//     initial: {
//       step: 'LOCATION',
//       context: { continent: 'ALL' },
//     },
//   });

//   return (
//     <Container margin="none" className={cx('background')}>
//       <funnel.Render
//         LOCATION={({ context, history }) => (
//           <LocationFunnel
//             mainContext={context}
//             onNext={location => {
//               history.push('DURATION', JSON.parse(location));
//             }}
//           />
//         )}
//         DURATION={({ context, history }) => (
//           <DurationFunnel context={context} onNext={duration => history.push('COMPANION', { duration })} />
//         )}
//         COMPANION={({ context, history }) => (
//           <CompanionFunnel context={context} onNext={companion => history.push('PREFERENCE', { companion })} />
//         )}
//         PREFERENCE={({ context, history }) => (
//           <PreferenceFunnel context={context} onNext={preference => history.push('CHAT', { preference })} />
//         )}
//         CHAT={({ context }) => <ChatFunnel context={context} />}
//       />
//     </Container>
//   );
// };

// export default TripPlanner;

// export default function TripPlanner() {
//   return <>TripPlanner</>;
// }
