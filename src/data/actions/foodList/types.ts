import type { BaseAction } from '../../types/actions';
import type { FoodListItem } from '@data/reducers/foodList/types';

export interface UpdateItemsAction extends BaseAction<'foodList@UPDATE_ITEMS'> {
  items: FoodListItem[];
}

export interface RemoveItemAction extends BaseAction<'foodList@REMOVE_ITEM'> {
  id: number;
}

export interface CheckItemAction extends BaseAction<'foodList@CHECK_ITEM'> {
  id: number;
  status: boolean;
}

export type ActionTypes =
  | UpdateItemsAction
  | RemoveItemAction
  | CheckItemAction;
