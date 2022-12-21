import { combineReducers } from 'redux';

import { frige } from './reducers/frige';
import { foodList } from './reducers/foodList';
import { core } from './reducers/core';

export const reducer = combineReducers({
  frige,
  core,
  foodList,
});
