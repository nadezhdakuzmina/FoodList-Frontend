import { T as CoreT } from './actions/core';

export interface BaseAction {
  type: string;
}

export type ActionTypes =
  | CoreT.StartPageAction;
