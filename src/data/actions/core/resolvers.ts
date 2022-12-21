import { auth } from '@data/resourses/user/auth';
import { createUser } from '@data/resourses/user/createUser';
import { logout } from '@data/resourses/user/logout';
import { initStore } from '@data/store/initStore';

import { setTokenAction, deleteTokenAction } from '.';
import { updateItemsAction as updateFrigeItemsAction } from '../frige';
import { updateItemsAction as updateFoodListItemsAction } from '../foodList';

import type { Dispatch } from 'redux';
import type { User } from './types';
import type { ThunkActionDispatch } from 'redux-thunk';

export const createUserResolver = (user: User) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    await createUser(user);
    const token = await auth(user);
    dispatch(updateStore(token));
  };
};

export const authUserResolver = (user: User) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    const token = await auth(user);
    dispatch(updateStore(token));
  };
};

export const updateStore = (token: string) => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    const { frige, foodList } = await initStore(token);
    console.log(frige, foodList);
    dispatch(updateFrigeItemsAction(frige.items));
    dispatch(updateFoodListItemsAction(foodList.items));
    dispatch(setTokenAction(token));
  };
};

export const logoutResolver = () => {
  return async (dispatch: Dispatch) => {
    await logout();
    
    dispatch(deleteTokenAction());
  };
};
