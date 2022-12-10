import { UPDATE_ITEMS, REMOVE_ITEM } from '@data/actions/frige/actions';

import type { ActionTypes } from '@data/actions/frige/types';
import type { FrigeState } from './types';

export const initialState: FrigeState = {
  items: [],
};

export const frige = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case UPDATE_ITEMS:
      return {
        ...state,
        items: action.items,
      };

    case REMOVE_ITEM:
      const newItems = [...state.items];
      const index = newItems.findIndex((item) => item.id === action.id);
      if (index !== -1) {
        newItems.splice(index, 1);
      }

      return {
        ...state,
        items: newItems,
      };

    default:
      return state;
  }
};
