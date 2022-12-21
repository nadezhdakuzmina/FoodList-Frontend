import { removeItem } from '@data/resourses/foodList/removeItem';
import { addItem } from '@data/resourses/foodList/addItem';
import { checkItemAction, removeItemAction, updateItemsAction } from '.';

import type { State } from '@data/types';
import type { Dispatch } from 'redux';
import type { FoodListItem } from '@data/reducers/foodList';
import { fetchItems } from '@data/resourses/foodList/fetchItems';
import { checkItem } from '@data/resourses/foodList/checkItem';

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

export const checkItemResolver = (id: number, status: boolean) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const { core } = getState();

    const hasBeenChecked = await checkItem(core.token, id, status)
      .catch(console.error);

    if (hasBeenChecked) {
      dispatch(checkItemAction(id, status));
      return true;
    }

    return false
  };
};

export const addItemResolver = (item: Omit<FoodListItem, 'id'>) => {
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
