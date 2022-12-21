import axios from 'axios';
import { RESOURCE_URL } from './constants';

const METHOD_URL = `${RESOURCE_URL}/check`;

export const checkItem = async (token: string, id: number, status: boolean) => {
  return axios(METHOD_URL, {
    method: 'POST',
    data: {
      id,
      token,
      status,
    },
  })
    .then((res) => Boolean(res.data));
};
