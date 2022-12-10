import type {
  SetTokenAction,
  DeleteTokenAction,
} from './types';

import { DELETE_TOKEN, SET_TOKEN } from './actions';

export const setTokenAction = (token: string): SetTokenAction => ({
  type: SET_TOKEN,
  token,
});

export const deleteTokenAction = (): DeleteTokenAction => ({
  type: DELETE_TOKEN
})
