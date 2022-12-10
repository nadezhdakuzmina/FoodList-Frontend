import { combineReducers } from 'redux';

import { frige } from './reducers/frige';
import { core } from './reducers/core';

export const reducer = combineReducers({
  frige,
  core,
});
