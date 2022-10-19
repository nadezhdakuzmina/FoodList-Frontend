import { createStore } from 'redux';

import { middleware, reducer } from '@store';
import { startPage } from '@store/actions/core';

import type { CoreData } from '@types';
import type { Store } from 'redux';

export const create = (data: CoreData): Store => {
  const store = createStore(reducer, middleware);

  const serverTime = Date.now();
  store.dispatch(startPage(serverTime, data));

  return store;
};
