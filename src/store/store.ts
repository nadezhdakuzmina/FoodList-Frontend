import { applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import core from './reducers/core';

export const reducer = combineReducers({
  core,
});

export const middleware = compose(
  applyMiddleware(thunk),
);
  
