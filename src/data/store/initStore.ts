import { fetchItems as fetchFrigeItems} from '@data/resourses/frige/fetchItems';
import { fetchItems as fetchFoodListItems} from '@data/resourses/foodList/fetchItems';

import type { CoreState } from '@data/reducers/core';
import type { State } from '../types';
import { initUser } from './initUser';

const makeErrorHandler = (reqId: string) => (error: Error) => console.error(
  `[${new Date()}](${reqId}) -`,
  error
);

export const initStore = async (token?: string): Promise<State> => {
  const reqId = Math.floor(Math.random() * 10e10).toString();
  token = token || await initUser();

  const core: CoreState = {
    token,
  };

  const [
    frigeItems,
    foodListItems,
  ] = token ? await Promise.all([
    fetchFrigeItems(token).catch(makeErrorHandler(reqId)),
    fetchFoodListItems(token).catch(makeErrorHandler(reqId)),
  ]) : [];

  return {
    core,
    frige: {
      items: frigeItems || [],
    },
    foodList: {
      items: foodListItems || [],
    }
  };
};
