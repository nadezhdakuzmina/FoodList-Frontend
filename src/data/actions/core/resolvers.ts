import { auth } from '@data/resourses/user/auth';
import { createUser } from '@data/resourses/user/createUser';
import { logout } from '@data/resourses/user/logout';

import { setTokenAction, deleteTokenAction } from '.';

import type { Dispatch } from 'redux';
import type { User } from './types';

export const createUserResolver = (user: User) => {
  return async (dispatch: Dispatch) => {
    await createUser(user);

    const token = await auth(user);

    dispatch(setTokenAction(token));
  };
};

export const authUserResolver = (user: User) => {
  return async (dispatch: Dispatch) => {
    const token = await auth(user);

    dispatch(setTokenAction(token));
  };
};

export const logoutResolver = () => {
  return async (dispatch: Dispatch) => {
    await logout();
    
    dispatch(deleteTokenAction());
  };
};
