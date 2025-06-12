'use client';
import { TripPlanner } from 'models/Aws';
import LoadingContents from './LoadingContents';

const DoneStep = ({ context }: { context: TripPlanner }) => {
  return <LoadingContents context={context} />;
};

export default DoneStep;
