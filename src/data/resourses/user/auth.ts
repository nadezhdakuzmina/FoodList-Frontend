
import axios from 'axios';
import { RESOURCE_URL } from './constants';

import type { DirtyUserAuthData } from './types';
import type { User } from '@data/actions/core/types';

const METHOD_URL = `${RESOURCE_URL}/auth`;

export const auth = async (user: User): Promise<string> => {
  return axios(METHOD_URL, {
    method: 'POST',
    withCredentials: true,
    data: {
      ...user
    },
  })
    .then((res) => res.data)
    .then((data: DirtyUserAuthData) => data.token);
};
