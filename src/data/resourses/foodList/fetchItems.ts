import axios from 'axios';
import { RESOURCE_URL } from './constants';

const METHOD_URL = RESOURCE_URL;

export const fetchItems = async (token: string) => {
  return axios(METHOD_URL, {
    params: {
      token,
    },
  })
    .then((res) => res.data)
    .then((data) => (data.items));
};
