import axios from 'axios';
import { RESOURCE_URL } from './constants';

const METHOD_URL = `${RESOURCE_URL}/delete`;

export const removeItem = async (token: string, id: number) => {
  return axios(METHOD_URL, {
    method: 'POST',
    data: {
      id,
      token
    },
  })
    .then((res) => Boolean(res.data));
};
