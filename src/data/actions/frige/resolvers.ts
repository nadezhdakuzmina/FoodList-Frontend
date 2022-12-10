import { removeItem } from '@data/resourses/frige/removeItem';
import { addItem } from '@data/resourses/frige/addItem';
import { removeItemAction, updateItemsAction } from '.';

import type { State } from '@data/types';
import type { Dispatch } from 'redux';
import type { FrigeItem } from '@data/reducers/frige';
import { fetchItems } from '@data/resourses/frige/fetchItems';

export const removeItemResolver = (id: number) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const { core } = getState();

    const hasBeenRemoved = await removeItem(core.token, id)
      .catch(console.error);

    if (hasBeenRemoved) {
      dispatch(removeItemAction(id));
      return true;
    }

    return false
  };
};

export const addItemResolver = (item: Omit<FrigeItem, 'id'>) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const { core } = getState();

    const hasBeenAdded = await addItem(core.token, item)
      .catch(console.error);

    const items = await fetchItems(core.token)
      .catch(console.error);

    if (hasBeenAdded && items) {
      dispatch(updateItemsAction(items));
      return true;
    }

    return false;
  };
};
