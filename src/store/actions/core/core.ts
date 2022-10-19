import {
  START_PAGE,
} from './actions';

import type {
  StartPageAction,
} from './types';

import type { CoreData } from '@types';

export const startPage = (time: number, data: CoreData): StartPageAction => ({
  type: START_PAGE,
  time,
  data,
});
