import type { CoreState } from '@data/reducers/core';
import type { FoodListState } from '@data/reducers/foodList';
import type { FrigeState } from '../reducers/frige';

export interface State {
  frige: FrigeState;
  core: CoreState;
  foodList: FoodListState;
}
