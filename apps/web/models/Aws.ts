import { ContinentKeys } from 'hooks/useCountries';

export type TripPlanner = {
  continent: ContinentKeys;
  country: string;
  city: { all: string[]; selected: string[] };
  duration: string;
  companion: string;
  preference: string;
};

export type Activity = {
  time: string;
  activity: string;
  comments: string;
  place: string;
  label: 'attraction' | 'hotel' | 'restaurant';
};

export type TripContent = {
  day: number;
  date: string;
  activities: Array<Activity>;
};

export type AwsLocationSummary = {
  Text: string;
  MaxResults: number;
  ResultBox: number[];
  DataSource: string;
};

export type AwsPlace = {
  Label: Activity['label'];
  Geometry: {
    Point: number[];
  };
  Region: string;
  Country: string;
  Interpolated: false;
  Categories: string[];
};

export type AwsLocation = {
  Place: AwsPlace;
  Relevance: number;
};

export type AwsPlaceResult = {
  Summary: AwsLocationSummary;
  Results: AwsLocation[];
};

export type AwsSuggestedPlaceResult = {
  Results: [
    {
      Categories: string[];
      PlaceId: string;
      SupplementalCategories: string[];
      Text: string;
    },
  ];
  Summary: {
    BiasPosition: number[];
    DataSource: string;
    FilterBBox: [number];
    FilterCategories: string[];
    FilterCountries: string[];
    Language: string;
    MaxResults: number;
    Text: string;
  };
};
