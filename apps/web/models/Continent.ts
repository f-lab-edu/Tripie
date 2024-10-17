import { CONTINENTS } from 'constants/continents';

// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers
export type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

export type Continents = CreateMutable<typeof CONTINENTS>;

export type ContinentKeys = keyof Continents;
export type ContinentIds = Continents[ContinentKeys]['id'];
