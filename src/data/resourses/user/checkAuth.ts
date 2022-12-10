import axios from 'axios';
import { RESOURCE_URL } from './constants';

import { DirtyUserAuthData } from './types';

const METHOD_URL = `${RESOURCE_URL}/checkAuth`;

export const checkAuth = async (): Promise<string> => {
  return axios(METHOD_URL, {
    withCredentials: true,
  })
    .then((res) => res.data)
    .then((data: DirtyUserAuthData) => data.token);
};
