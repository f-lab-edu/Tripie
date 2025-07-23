'use server';
import { cache } from 'react';
import { pageParamData } from '../../page-param-data';

export const getParamData = cache(pageParamData);

export default getParamData;
