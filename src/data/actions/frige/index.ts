import type {
  UpdateItemsAction, RemoveItemAction,
} from './types';

import { UPDATE_ITEMS, REMOVE_ITEM } from './actions';

import type { FrigeItem } from '@data/reducers/frige';

export const updateItemsAction = (items: FrigeItem[]): UpdateItemsAction => ({
  type: UPDATE_ITEMS,
  items,
});

export const removeItemAction = (id: number): RemoveItemAction => ({
  type: REMOVE_ITEM,
  id,
});
