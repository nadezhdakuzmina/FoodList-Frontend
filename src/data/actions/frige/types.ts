import type { BaseAction } from '../../types/actions';
import type { FrigeItem } from '@data/reducers/frige/types';

export interface UpdateItemsAction extends BaseAction<'frige@UPDATE_ITEMS'> {
  items: FrigeItem[];
}

export interface RemoveItemAction extends BaseAction<'frige@REMOVE_ITEM'> {
  id: number;
}

export type ActionTypes =
  | UpdateItemsAction
  | RemoveItemAction;
