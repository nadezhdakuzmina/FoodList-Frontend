import type { BaseAction } from '../../types/actions';

export interface SetTokenAction extends BaseAction<'SET_TOKEN'> {
  token: string;
}

export type DeleteTokenAction = BaseAction<'DELETE_TOKEN'>;

export type ActionTypes =
  | SetTokenAction
  | DeleteTokenAction;

export type User = {
  username: string;
  email: string;
  password: string;
};
